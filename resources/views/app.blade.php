<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Scripts -->
    <link href="/vendor/unicons-2.0.1/css/unicons.css" rel="stylesheet" />
    <link href="/css/style.css" rel="stylesheet" />
    <link href="/css/responsive.css" rel="stylesheet" />
    <link href="/css/night-mode.css" rel="stylesheet" />
    <link href="/css/vertical-responsive-menu.min.css" rel="stylesheet" />
    <link href="/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
    <link href="/vendor/OwlCarousel/assets/owl.carousel.css" rel="stylesheet" />
    <link href="/vendor/OwlCarousel/assets/owl.theme.default.min.css" rel="stylesheet" />
    <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet" />
    @routes
    @vite('resources/js/app.js')
    @inertiaHead
</head>

<body class="d-flex flex-column h-100">
    @inertia
    <script src="/js/vertical-responsive-menu.min.js"></script>
    <script src="/js/jquery-3.6.0.min.js"></script>
    <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="/vendor/OwlCarousel/owl.carousel.js"></script>
    <script src="/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
    <script src="/vendor/mixitup/dist/mixitup.min.js"></script>
    <script src="/js/custom.js"></script>
    <script src="/js/night-mode.js"></script>
    <script src="https://js.braintreegateway.com/web/dropin/1.33.4/js/dropin.min.js"></script>
    <script src="https://cdn.ckeditor.com/ckeditor5/35.3.1/classic/ckeditor.js"></script>

</body>

</html>
