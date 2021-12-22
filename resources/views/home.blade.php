<html lang="{{ app()->getLocale() }}">

<head>
    <title>{{ config('app.name') }}</title>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="HandheldFriendly" content="true">
    <meta name="theme-color" content="#db5945">
    <meta name="description"
        content="Watch movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more. Start your free trial today.">
    <link rel="icon" sizes="192x192" href="/images/logo.png">
    <link rel="stylesheet" href="/css/app.css">
    <script src="https://cdn.jwplayer.com/libraries/RS5IBWBT.js"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;700&display=swap" rel="stylesheet">
</head>

<body id="root">
    <!--  container content: START -->
    <div class="{{ config('plugin.theme') }}"></div>
    <!--  container content: END -->
    <noscript>
        <div class="container">
            <div class="col-sm-6 col-sm-offset-3">
                <div class="alert alert-danger">
                    JavaScript is disabled in your web browser!
                </div>
            </div>
        </div>
    </noscript> <!--  container javascript alert: END -->
    <script src="{{ env('APP_ENV') === 'development' ? mix('js/app.js') : asset('js/app.js') }}"></script>
</body>

</html>
