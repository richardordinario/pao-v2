<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">

    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
    @include('auth')
    @if(Auth::check())
    <script src="{{asset('js/student.js')}}"></script>
    @endif
    @if(Auth::guard('teacher')->check())
    <script src="{{asset('js/teacher.js')}}"></script>
    @endif
    @if(Auth::guard('admin')->check())
    <script src="{{asset('js/admin.js')}}"></script>
    @endif
    
</body>
</html>
