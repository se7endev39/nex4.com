<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Ad;

class AdsVastController extends Controller
{
    /**
     * Get all ADS by KIND
     *
     * @param $kind
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAllAds()
    {

        $getAds = Ad::get();

        // Check if there is no cast
        if ($getAds->isEmpty()) {
            $getAds = null;
        }

        return response()->json(
            [
                'status' => 'success',
                'data' => [
                    'ads' => $getAds,
                ],
            ],
            200
        );

    }


    /**
     * Get ad info
     *
     * @param $kind
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAd($id)
    {

        $getCategory = Ad::find($id);

        if (is_null($getCategory)) {
            return response()->json(['status' => 'failed', 'message' => 'Error, input failed'], 422);
        }

        return response()->json(
            [
                'status' => 'success',
                'data' => $getCategory
            ],
            200
        );

    }


    /**
     * Create new ad
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createAd(Request $request)
    {

        $request->validate([
            'ad_name' => 'required|max:50',
            'client' => 'required|string|alpha|max:20',
            'tags' => 'required|url',
            'start_on' => 'nullable|integer',
            'frequency' => 'nullable|integer',
            'start_on_seek' => 'nullable|string|max:10',
            'time_between_ads' => 'nullable|integer'
        ]);


        $create = new Ad();
        $create->ad_name = $request->input('ad_name');
        $create->client = $request->input('client');
        $create->tags = $request->input('tags');
        $create->start_on = $request->input('start_on');
        $create->frequency = $request->input('frequency');
        $create->start_on_seek = $request->input('start_on_seek');
        $create->time_between_ads = $request->input('time_between_ads');
        $create->save();


        return response()->json(['status' => 'success', 'message' => 'Successful create' . $request->ad_name . ' Ad '], 200);

    }


    /**
     * Update AD
     *
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateAd(Request $request)
    {

        $request->validate([
            'id' => 'required|integer',
            'ad_name' => 'required|max:50',
            'client' => 'required|string|alpha|max:20',
            'tags' => 'required|url',
            'start_on' => 'nullable|integer',
            'frequency' => 'nullable|integer',
            'start_on_seek' => 'nullable|string|max:10',
            'time_between_ads' => 'nullable|integer'
        ]);

        $create = Ad::find($request->input('id'));

        if (is_null($create)) {
            return response()->json(['status' => 'success', 'message' => 'Error ads not found'], 422);
        }

        $create->ad_name = $request->input('ad_name');
        $create->client = $request->input('client');
        $create->tags = $request->input('tags');
        $create->start_on = $request->input('start_on');
        $create->frequency = $request->input('frequency');
        $create->start_on_seek = $request->input('start_on_seek');
        $create->time_between_ads = $request->input('time_between_ads');
        $create->save();

        return response()->json(['status' => 'success', 'message' => 'Successful update ' . $request->ad_name . ' Ad'], 200);
    }


    /**
     * Delete AD
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     *
     */
    public function deleteAd($id)
    {

        $delete = Ad::find($id)->delete();

        if ($delete) {
            return response()->json(['status' => 'success', 'message' => 'Successful delete ad'], 200);
        }

        return response()->json(['status' => 'failed', 'message' => 'Failed to delete'], 422);
    }

}
