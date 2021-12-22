<?php

namespace App\Http\Controllers\Users;

use App\Helpers\Helpers;
use App\Http\Controllers\Controller;
use App\Models\Location_log;
use App\Mail\ConfirmDevice;
use Auth;
use Illuminate\Support\Str;
use Mail;
use App\Models\Siteinfo;

class CheckStatusUserController extends Controller
{
    public function checkUserStatus()
    {

        // Get user
        $user = Auth::user();

        // Get Site Info
        $getSiteInfo = Siteinfo::first()->payment_status;

        // If has BraintreeId
        // if payment status is true check the payment

        if (!$getSiteInfo) {

            // Check location And Set Language
//            $checkLocation = $this->checkLocation();
//            if (!$checkLocation) {
//                return response()->json([
//                    'status' => 'failed',
//                    'message' => 'Please confirm the new location from your mail to access to your account'], 401);
//            }


            if ($user->braintree_id !== null) {

                $setupPay = new \Braintree\Gateway([
                    'environment' => config('services.braintree.environment'),
                    'merchantId' => config('services.braintree.merchant_id'),
                    'publicKey' => config('services.braintree.public_key'),
                    'privateKey' => config('services.braintree.private_key'),
                ]);

                if ($user->period_end >= date("Y-m-d")) {
                    $get_customer = $setupPay->customer()->find($user->braintree_id);
                    $payment_details = $setupPay->subscription()->find($get_customer->paymentMethods[0]->subscriptions[0]->id);

                    if ($payment_details->status === 'Canceled') {
                        $user->period_end = $payment_details->billingPeriodEndDate->format('Y-m-d');
                        $user->save();
                        return response()->json([
                            'name' => $user->name,
                            'email' => $user->email,
                            'language' => $user->language,
                            'status' => 'cancel',
                            'cancel_time' => $payment_details->billingPeriodEndDate->format('Y-m-d'),
                            'caption' => $user->caption,
                        ]);
                    }
                    elseif ($payment_details->status === 'Active') {

                        // When the mail is not confirmed
                        if ($user->confirmed === 0) {
                            return response()->json([
                                'name' => Auth::user()->name,
                                'email' => Auth::user()->email,
                                'status' => 'confirm_step',
                                'language' => $user->language,
                                'caption' => $user->caption]);
                        } else {
                            return response()->json([
                                'name' => $user->name,
                                'email' => $user->email,
                                'status' => 'active',
                                'language' => $user->language,
                                'caption' => $user->caption]);
                        }
                    }
                }
                else {
                    // Get subscription details
                    $get_customer = $setupPay->customer()->find($user->braintree_id);
                    $payment_details = $setupPay->subscription()->find($get_customer->paymentMethods[0]->subscriptions[0]->id);

                    $period_end_date = $payment_details->billingPeriodEndDate->format('Y-m-d');

                    $detect_status = $payment_details->status;

                    //When an invoice payment on a subscription fails, the subscription becomes past_due.
                    //After Braintree exhausts all payment retry attempts, the subscription remains past_due or moves to a status of either canceled or unpaid, depending upon your retry settings.
                    if ($detect_status === 'past_due' || $detect_status === 'canceled' || $detect_status === 'unpaid') {
                        $user->save();
                        return response()->json([
                            'plan' => '1',
                            'email' => $user->email,
                            'name' => $user->name,
                            'status' => 'payment_reactive',
                            'language' => 'en',
                        ]);
                    }

                    // When subscription is active
                    if ($detect_status === 'active' || $detect_status === 'trialing' && $period_end_date >= date("Y-m-d")) {
                        $user->period_end = $period_end_date;
                        $user->save();
                        return response()->json([
                            'name' => $user->name,
                            'email' => $user->email,
                            'status' => 'active',
                            'language' => $user->language,
                            'caption' => $user->caption]);
                    }
                }
            }else{
                return response()->json([
                    'name' => Auth::user()->name,
                    'email' => Auth::user()->email,
                    'status' => 'payment_step',
                    'language' => $user->language,
                    'caption' => $user->caption], 200);
            }
        } else {

            // Set Language
            //$this->setLanguage();

            // When the mail is not confirmed
            if ($user->confirmed === 0) {
                return response()->json([
                    'name' => Auth::user()->name,
                    'email' => Auth::user()->email,
                    'status' => 'confirm_step',
                    'language' => $user->language,
                    'caption' => $user->caption]);
            } else {
                return response()->json([
                    'name' => $user->name,
                    'email' => $user->email,
                    'status' => 'active',
                    'language' => $user->language,
                    'caption' => $user->caption]);
            }
        }
    }

    /**
     * Check Location Of User
     *
     */
    public function checkLocation()
    {
        // Get Location by IP
        $ipLocation = Helpers::getIp();
        $getLocationLogs = Location_log::where('uid', Auth::id())->first();

        // When First Time Access To Account
        if (is_null($getLocationLogs)) {
            $setLocation = new Location_log();
            $setLocation->status = 'on';
            $setLocation->country_code = $ipLocation['countryCode'];
            $setLocation->country = $ipLocation['country'];
            $setLocation->city = $ipLocation['city'];
            $setLocation->ip = $ipLocation['query'];
            $setLocation->zip_code = $ipLocation['zip'];
            $setLocation->isp = $ipLocation['isp'];
            $setLocation->uid = Auth::id();
            $setLocation->save();

            // Set Language
            $this->setLanguage();

            return true;
        } else {

            $geAlltLocationLogsOff = Location_log::where('uid', Auth::id())->where('status', 'off')->get();
            $getLocationLogsOn = Location_log::where('uid', Auth::id())->where('status', 'on')->first();

            if (!is_null($getLocationLogsOn)) {
                if ($getLocationLogsOn->country_code == $ipLocation['countryCode'] &&
                    $getLocationLogsOn->city == $ipLocation['city']) {

                    // Set on
                    $setStatus = Location_log::find($getLocationLogsOn->id);
                    $setStatus->status = 'on';
                    $setStatus->updated_at = NOW();
                    $setStatus->save();

                    // Set Language
                    $this->setLanguage();
                    return true;
                } else {
                    if (!$geAlltLocationLogsOff->isEmpty()) {

                        foreach ($geAlltLocationLogsOff as $key => $value) {
                            if ($value->country_code == $ipLocation['countryCode'] &&
                                $value->city == $ipLocation['city']) {

                                // Set off all row
                                Location_log::where('uid', Auth::id())->where('status', 'on')->update(['status' => 'off']);

                                // Set on
                                $setStatus = Location_log::find($value->id);
                                $setStatus->status = 'on';
                                $setStatus->save();

                                // Set Language
                                $this->setLanguage();
                                return true;

                            } else {
                                $checkFailedIpExist = Location_log::where(['uid' => Auth::id(), 'ip' => $value->ip])->first();

                                if (is_null($checkFailedIpExist)) {
                                    $setLocation = new Location_log();
                                    $setLocation->status = 'failed';
                                    $setLocation->country_code = $ipLocation['countryCode'];
                                    $setLocation->country = $ipLocation['country'];
                                    $setLocation->city = $ipLocation['city'];
                                    $setLocation->ip = $ipLocation['query'];
                                    $setLocation->zip_code = $ipLocation['zip'];
                                    $setLocation->isp = $ipLocation['isp'];
                                    $setLocation->uid = Auth::id();
                                    $setLocation->confirm_hash = Str::random(50);
                                    $setLocation->save();

                                    // Send Mail With Confrim Device Link
                                    Mail::to(Auth::user())
                                        ->send(new ConfirmDevice($setLocation));

                                    return false;
                                } else {
                                    // Send Mail With Confrim Device Link
                                    Mail::to(Auth::user())
                                        ->send(new ConfirmDevice($checkFailedIpExist));
                                    return false;
                                }
                            }

                        }
                    } else {

                        $checkFailedIpExist = Location_log::where(['uid' => Auth::id(), 'ip' => $ipLocation['query']])->first();

                        if (is_null($checkFailedIpExist)) {
                            $setLocation = new Location_log();
                            $setLocation->status = 'failed';
                            $setLocation->country_code = $ipLocation['countryCode'];
                            $setLocation->country = $ipLocation['country'];
                            $setLocation->city = $ipLocation['city'];
                            $setLocation->ip = $ipLocation['query'];
                            $setLocation->zip_code = $ipLocation['zip'];
                            $setLocation->isp = $ipLocation['isp'];
                            $setLocation->uid = Auth::id();
                            $setLocation->confirm_hash = Str::random(50);
                            $setLocation->save();
                            // Send Mail With Confrim Device Link
                            Mail::to(Auth::user())
                                ->send(new ConfirmDevice($setLocation));
                            return false;
                        } else {
                            // Send Mail With Confrim Device Link
                            Mail::to(Auth::user())
                                ->send(new ConfirmDevice($checkFailedIpExist));
                            return false;
                        }

                    }
                }

            } else {

                if (!$geAlltLocationLogsOff->isEmpty()) {

                    foreach ($geAlltLocationLogsOff as $key => $value) {
                        if ($value->country_code == $ipLocation['countryCode'] &&
                            $value->city == $ipLocation['city']) {

                            // Set off all row
                            Location_log::where('uid', Auth::id())->where('status', 'on')->update(['status' => 'off']);

                            // Set on
                            $setStatus = Location_log::find($value->id);
                            $setStatus->status = 'on';
                            $setStatus->save();

                            // Set Language
                            $this->setLanguage();
                            return true;

                        } else {
                            $checkFailedIpExist = Location_log::where(['uid' => Auth::id(), 'ip' => $value->ip])->first();

                            if (is_null($checkFailedIpExist)) {
                                $setLocation = new Location_log();
                                $setLocation->status = 'failed';
                                $setLocation->country_code = $ipLocation['countryCode'];
                                $setLocation->country = $ipLocation['country'];
                                $setLocation->city = $ipLocation['city'];
                                $setLocation->ip = $ipLocation['query'];
                                $setLocation->zip_code = $ipLocation['zip'];
                                $setLocation->isp = $ipLocation['isp'];
                                $setLocation->uid = Auth::id();
                                $setLocation->confirm_hash = Str::random(50);
                                $setLocation->save();
                                // Send Mail With Confrim Device Link
                                Mail::to(Auth::user())
                                    ->send(new ConfirmDevice($setLocation));
                                return false;
                            } else {
                                // Send Mail With Confrim Device Link
                                Mail::to(Auth::user())
                                    ->send(new ConfirmDevice($checkFailedIpExist));
                                return false;
                            }
                        }

                    }
                } else {

                    $checkFailedIpExist = Location_log::where(['uid' => Auth::id(), 'ip' => $ipLocation['query']])->first();

                    if (is_null($checkFailedIpExist)) {
                        $setLocation = new Location_log();
                        $setLocation->status = 'failed';
                        $setLocation->country_code = $ipLocation['countryCode'];
                        $setLocation->country = $ipLocation['country'];
                        $setLocation->city = $ipLocation['city'];
                        $setLocation->ip = $ipLocation['query'];
                        $setLocation->zip_code = $ipLocation['zip'];
                        $setLocation->isp = $ipLocation['isp'];
                        $setLocation->uid = Auth::id();
                        $setLocation->confirm_hash = Str::random(50);
                        $setLocation->save();
                        return false;
                        // Send Mail With Confrim Device Link
                        Mail::to(Auth::user())
                            ->send(new ConfirmDevice($setLocation));
                    } else {
                        // Send Mail With Confrim Device Link
                        Mail::to(Auth::user())
                            ->send(new ConfirmDevice($checkFailedIpExist));
                        return false;
                    }

                }
            }

        }
    }

    public function setLanguage()
    {
        // get user
        $user = Auth::user();

        // Add Language By Location
        if (is_null($user->language)) {
            $ipLocation = Helpers::getIp();

            // Language in script
            $language = config('language');
            $countryCode = strtolower($ipLocation['countryCode']);

            if (in_array($countryCode, $language)) {
                $user->language = strtolower($ipLocation['countryCode']);
            } else {
                $user->language = 'en';
            }
        }
    }
}
