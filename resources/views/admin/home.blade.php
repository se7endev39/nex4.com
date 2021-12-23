<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/css/admin/main.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://cdn.jwplayer.com/libraries/RS5IBWBT.js"></script>
</head>

<body class="admin">
    @if (!Auth::guest())
        <div class="col-12 p-4">
            <div id="administrator"></div>
        </div>
    @endif
</body>

@if (!Auth::guest())
    <script src="/js/admin-js/manifest.js"></script>
    <script src="/js/admin-js/vendor.js"></script>
    <script src="{{ asset('js/admin-js/app.js') }}"></script>
@endif

</html>
