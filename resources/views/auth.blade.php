@php $guard = []; @endphp
@if (Auth::guard('teacher')->check())
    @php
        $guard = [
            'user' => Auth::guard('teacher')->user(),
            'role' => 'teacher'
        ];
    @endphp
@endif
<script>
    var GUARD = {!! json_encode($guard) !!}
    console.log(GUARD)
</script>
