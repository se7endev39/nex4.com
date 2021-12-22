<?php

use Illuminate\Http\Request;
use App\Models\Braintree;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// USERS
Route::middleware('throttle:60,1')->group(function () {


    // Footer details
    Route::get('/v1/get/app/details', 'Users\HomeController@getAppDetails');

    // Send Mail From Contact us
    Route::post('/v1/new/contactus', 'Users\ContactusController@sendMail');

    // Plan
    Route::get('/v1/get/app/plan', function () {
        return response()->json(['status' => 'success', 'data' => Braintree::get()]);
    });


    // Registers
    Route::get('/v1/register/verify/{token}', 'Users\RegisterController@codeConfirmed')->name('email_confiem');
    Route::post('/v1/create/register', 'Users\RegisterController@register');
    Route::post('/v1/check/register/email', 'Users\RegisterController@sendForgetPassword');
    Route::post('/v1/register/forget/checkhash', 'Users\RegisterController@forgetCheckHash');
    Route::post('/v1/update/register/password', 'Users\RegisterController@recoverPassword');

    // Device Confirm
    Route::get('/v1/register/verify/device/{token}', 'Users\RegisterController@confirmDevice')->name('confirm_device');


    Route::group(['middleware' => 'auth:api', 'prefix' => 'v1'], function () {

        // Check user status
        Route::get('/get/check/user', 'Users\CheckStatusUserController@checkUserStatus');

        // User details
        Route::get('/user', function (Request $request) {
            return response()->json(['name' => $request->user()->name, 'image' => $request->user()->image, 'email' => $request->user()->email, 'url' => \Illuminate\Support\Facades\Storage::disk('local')->url('users_image/')]);
        });

        //Discover
        Route::get('/get/home', 'Users\DiscoverController@getHomeResult');

        // Get movies list or sort it by trening and genres
        Route::get('/get/movies', 'Users\MoviesController@getAllMovies');
        Route::get('/get/movie/{id}', 'Users\MoviesController@getMovieDetails')->where('id', '^[\w-]*$');
        Route::post('/get/movies/sort', 'Users\MoviesController@sortMovies');

        // Get series list or sort it by trening and genres
        Route::get('/get/series', 'Users\SeriesController@getAllSeries');
        Route::get('/get/series/{id}', 'Users\SeriesController@getSeriesDetails')->where('id', '^[\w-]*$');
        Route::post('/get/series/sort', 'Users\SeriesController@sortSeries');

        // Get series and movies kids rating system
        Route::get('/get/kids', 'Users\KidsController@getAll');

        // Tv
        Route::get('/get/tv', 'Users\TvController@getAll');
        Route::post('/get/tv/search', 'Users\TvController@searchChannel');

        // Create new collection or add to already collection
        Route::get('/get/collection', 'Users\CollectionsController@getCollection');
        Route::get('/get/collection/{id}', 'Users\CollectionsController@getCollectionList')->where('id', '^[\w-]*$');
        Route::post('/create/item/collection', 'Users\CollectionsController@addNewToCollection');
        Route::post('/update/collection', 'Users\CollectionsController@updateCollection');
        Route::post('/delete/collection', 'Users\CollectionsController@deleteCollection');
        Route::post('/delete/item/collection', 'Users\CollectionsController@DeleteFromCollection');

        // Add like to movie or delete it
        Route::post('/create/like', 'Users\LikesController@addLike');

        // Get movie and episode video,details -- Player
        Route::post('/get/watch/movie', 'Users\VideoPlayerController@getMovieVideo');
        Route::post('/get/watch/series', 'Users\VideoPlayerController@getEpisodeVideo');
        Route::get('/get/watch/tv/{id}', 'Users\TvController@getChannelDetails');
        Route::post('/create/watch/movie/recently', 'Users\VideoPlayerController@setRecentlyTimeMovie');
        Route::post('/create/watch/series/recently', 'Users\VideoPlayerController@setRecentlyTimeEpiosde');

        // Player M3u8 HLS
        Route::get('/player/data/tv/{id}/{name}', 'Users\TvController@dataTvPlayer');


        // Reports
        Route::post('/create/report/movie', 'Users\VideoPlayerController@movieReport');
        Route::post('/create/report/series', 'Users\VideoPlayerController@seriesReport');

        // Get search by movie name or series, cast
        Route::post('/get/search', 'Users\SearchController@getSearch');

        // Get cast details
        Route::get('/get/cast/{id}', 'Users\CastController@getCastDetails')->where('id', '^[\w-]*$');

        // Profile
        Route::post('/update/profile/image', 'Users\ProfileController@avatarUpload');
        Route::post('/update/profile/details', 'Users\ProfileController@updateDetails');
        Route::post('/update/profile/password', 'Users\ProfileController@updatePassword');

        // Payment setting
        Route::get('/get/profile/payment', 'Users\ProfileController@getPaymentInfo');
        Route::get('/get/profile/payment/billing', 'Users\ProfileController@getBillingDetails');
        Route::get('/update/profile/payment/cancel_membership', 'Users\ProfileController@cancelMembership');
        Route::get('/update/profile/payment/resume_membership', 'Users\ProfileController@resumeMembership');
        Route::post('/update/profile/payment/update', 'Users\ProfileController@paymentUpdate');
        Route::post('/update/profile/payment/change_plan', 'Users\ProfileController@changePlan');

        // Update language
        Route::post('/update/profile/language', 'Users\ProfileController@changeLanguage');

        // Update caption style
        Route::post('/update/profile/caption', 'Users\ProfileController@changeCaption');

        // Get viewing history
        Route::get('/get/profile/viewing_history', 'Users\ProfileController@getViewingHistory');

        // Mail confirm
        Route::get('/register/sendactivity', 'Users\RegisterController@sendActivityMail');

        // Payment
        Route::post('/register/payment', 'Users\RegisterController@payment');

        // Support Request
        Route::post('/create/support/request', 'Users\SupportController@create');
        Route::post('/create/support/request/reply', 'Users\SupportController@submitReply');
        Route::get('/get/support/request/{id}', 'Users\SupportController@getRequest');
        Route::get('/get/support/request', 'Users\SupportController@get');

        // Notifcation
        Route::get('/get/notifcation', 'Users\DiscoverController@getNotifaction');

        // Device Activity
        Route::get('/get/device/activity', 'Users\ProfileController@getDeviceActivity');
        Route::delete('/delete/device/session/{id}', 'Users\ProfileController@deleteDeviceSession');


        // Logout
        Route::get('/get/logout', 'Users\ProfileController@logOutAPI');

        // Get all seasons
        Route::post('/get/series/season', 'Users\VideoPlayerController@getSeason');


    });

    // GHOST

    Route::group(['prefix' => 'v1'], function () {

        //Discover
        Route::get('/ghost/get/discover', 'Ghost\DiscoverController@getHomeResult');

        // Get movies list or sort it by trening and genres
        Route::get('/ghost/get/movies', 'Ghost\MoviesController@getAllMovies');
        Route::get('/ghost/get/movie/{id}', 'Ghost\MoviesController@getMovieDetails')->where('id', '^[\w-]*$');
        Route::post('/ghost/get/movies/sort', 'Ghost\MoviesController@sortMovies');

        // Get series list or sort it by trening and genres
        Route::get('/ghost/get/series', 'Ghost\SeriesController@getAllSeries');
        Route::get('/ghost/get/series/{id}', 'Ghost\SeriesController@getSeriesDetails')->where('id', '^[\w-]*$');
        Route::post('/ghost/get/series/sort', 'Ghost\SeriesController@sortSeries');

        // Get series and movies kids rating system
        Route::get('/ghost/get/kids', 'Ghost\KidsController@getAll');

        // Tv
        Route::get('/ghost/get/tv', 'Users\TvController@getAll');
        Route::post('/ghost/get/tv/search', 'Ghost\TvController@searchChannel');


        // Get search by movie name or series, cast
        Route::post('/ghost/get/search', 'Ghost\SearchController@getSearch');

        // Get cast details
        Route::get('/ghost/get/cast/{id}', 'Ghost\CastController@getCastDetails')->where('id', '^[\w-]*$');

        // Tv
        Route::get('/ghost/get/tv', 'Ghost\TvController@getAll');


        // Get search by movie name or series, cast
        Route::post('/ghost/get/search', 'Ghost\SearchController@getSearch');

        // Get cast details
        Route::get('/ghost/get/cast/{id}', 'Ghost\CastController@getCastDetails')->where('id', '^[\w-]*$');

        Route::get('/ghost/get/genres', 'Ghost\GenresController@getAllGenres');

    });

});

