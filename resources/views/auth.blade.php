    @php $guard = []; @endphp
    @if (Auth::check())
        @php
            $guard = [
                'user' => Auth::user(),
                'role' => 'student'
            ];
        @endphp
    @endif
    @if (Auth::guard('teacher')->check())
        @php
            $guard = [
                'user' => Auth::guard('teacher')->user(),
                'role' => 'teacher'
            ];
        @endphp
    @endif
    @if (Auth::guard('admin')->check())
        @php
            $guard = [
                'user' => Auth::guard('admin')->user(),
                'role' => 'admin'
            ];
        @endphp
    @endif
    <script>
        var GUARD = {!! json_encode($guard) !!}
    </script>
