@php $guard = []; @endphp
@if (Auth::guard('teacher')->check())
    @php
        $guard = [
            'user' => Auth::guard('teacher')->user(),
            'role' => 'teacher'
        ];
    @endphp
@elseif (Auth::guard('admin')->check())
    @php
        $guard = [
            'user' => Auth::guard('admin')->user(),
            'role' => 'admin'
        ];
    @endphp
@endif
<script>
    var GUARD = {!! json_encode($guard) !!}
    console.log(GUARD)
</script>
