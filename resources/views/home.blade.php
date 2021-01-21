@extends('layouts.app')

@section('content')
@if (Auth::guard('teacher')->check())
    <Teacher/>
@else

@endif

@endsection
