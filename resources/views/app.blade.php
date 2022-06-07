<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <meta name="google-site-verification" content="2SuwWd8cXOGWZCp38Kt2CqB0i5Xt6zPQbDbQdBMBoVU" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@if(array_key_exists('head_data',$page['props'])){{  $page['props']['head_data']['title'] }}@else akar map @endif</title>
    <meta name="description" content="{{  array_key_exists('head_data',$page['props']) ? $page['props']['head_data']['description']:'عقار ماب كل ما تود البحث عنه من تأجير وبيع اي شئ يخص العقارات ستجده هنا بأفضل الاسعار'  }}">
    <meta name="keywords" content="{{  array_key_exists('head_data',$page['props']) ? $page['props']['head_data']['keywords']:'akar map , عقار ماب , تأجير وبيع العقارات عن طريق الانترنت , افضل مواقع شراء العقارات'  }}">
    <meta name="author" content="ahmed mamdouh">
      <meta property="og:type" content="website">
    <meta property="og:url" content="bneksy.com">
    <meta property="og:title" content="عقار ماب">
    <meta property="og:image" content="https://bneksy.com/public/images/logo.png">
      <meta property="og:description" content=" موقع متخصص فى بيع العقارات وتأجيرها بأفضل الاسعار ">

    <script src="https://code.jquery.com/jquery-3.2.1.min.js" defer></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js" defer></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" defer integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" defer integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdn.ckeditor.com/4.16.2/full/ckeditor.js" async></script>
      <script src="https://www.merchant.geidea.net/hpp/geideapay.min.js" defer>
      </script>

    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap" rel="stylesheet">
      <link href='https://fonts.googleapis.com/css?family=Cairo' rel='stylesheet'>

    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    @if(session()->get('lang') == 'en')
        <link href="{{ mix('/css/english.css') }}" rel="stylesheet" />
    @else
          <link href="{{ mix('/css/arabic.css') }}" rel="stylesheet" />
    @endif
    <link rel="icon" href="/images/logo.png" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.min.js"></script>




      <script src="{{ mix('/js/app.js') }}" defer></script>
      <style>
          body{
              overflow: hidden;
          }
          .content > div:first-of-type , .content > section:first-of-type{
              height: calc(100vh);
              overflow: auto;
              direction: ltr;
          }

      </style>
  </head>
  <body class="{{ session()->get('lang')  }}">
<!--    <span class="up-page"><i class="ri-arrow-up-line"></i></span>-->



    <div class="content">
        @inertia
    </div>

  </body>
</html>
