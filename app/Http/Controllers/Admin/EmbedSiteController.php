<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EmbedSite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class EmbedSiteController extends Controller
{
    public function ListProduction() {

        $ListProduction = EmbedSite::get();

        if($ListProduction->isEmpty()) {
            $ListProduction = null;
        }

        return response()->json([
            'ListProduction' => $ListProduction
        ]);
    }


    public function CreateProduction(Request $request) {

        $request->validate([
            'Name' => 'required|max:100',
            'Image' => 'required|mimes:jpeg,png,jpg'
        ]);

        // Upload Image
        $backdropName = Str::random(20) . '.png';
        $backdropEncode = Image::make($request->file('Image'))->encode('png');
        $upload = Storage::disk('public')->put('production/' . $backdropName, $backdropEncode->__toString());

        if($upload) {
            $CreateProduction = new EmbedSite();
            $CreateProduction->name = $request->input('Name');
            $CreateProduction->image = $backdropName;
            $CreateProduction->save();
        }
        return response()->json([
            'Message' => 'Successful create ' .  $request->input('Name') . ' Production'
        ]);
    }


    public function ProductionInfo($id){

        $ProductionInfo = EmbedSite::findOrFail($id);

        return response()->json(
            [
                'ProductionInfo' => $ProductionInfo
            ], 200
        );

    }

    public function UpdateProduction(Request $request, $id)
    {
        $request->validate([
            'Name' => 'string|max:250|nullable',
            'Image' => 'mimes:jpeg,png,jpg|nullable'
        ]);

        // Create new object
        $create = EmbedSite::findOrFail($id);

        // Upload image
        if ($request->file('Image')) {
            // Upload Image
            $backdropName = Str::random(20) . '.png';
            $backdropEncode = Image::make($request->file('Image'))->encode('png');
            $upload = Storage::disk('public')->put('production/' . $backdropName, $backdropEncode->__toString());

            if ($upload) {
                $create->image = $backdropName;
            } else {
                return response()->json(['status' => 'failed', 'message' => 'Failed to upload'], 422);
            }
        }


        $create->name = $request->input('Name');
        $create->save();

        return response()->json(['Message' => 'Successful update ' . $create->name . ' production'], 200);
    }


    public function DeleteProduction($id)
    {

        $delete = EmbedSite::findOrFail($id)->delete();

        if ($delete) {
            return response()->json(['status' => 'success', 'message' => 'Successful delete'], 200);
        }

        return response()->json(['status' => 'failed', 'message' => 'Failed to delete'], 422);
    }
}
