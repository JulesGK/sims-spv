<?php
$page_title = "Startsida";
include_once 'includes/header.php';
?>

<section class="header py-5">
    <div class="container">
      <div class="header-desc-row row mb-4">
        <div class="header-desc-col col-12 col-md-9 mx-auto">
          <h1 class="mb-3">Alla dina pensionspengar</h1>
          <p class="mb-4">
            Tänk dig att du har några olika konton där det sätts in pengar till en framtida lön. En lön som du ska leva på när
            du inte längre jobbar. Det är pension det!
          </p>
          <h4 class="mb-3">Pensionen brukar liknas vid en pyramid:</h4>
          <p class="mb-2">Basen är allmän pension. Jobbar du och betalar skatt i Sverige får du också inbetalningar till två konton för den allmänna pensionen.</p>
          <p class="mb-2">Tjänstepension får du inbetalning till om du jobbar på en schysst arbetsplats. Här kan det bli några konton eftersom det skiljer sig åt beroende på var du jobbar. Byter du jobb kan du få ännu fler konton.</p>
          <p class="mb-2">Och så kan du toppa med eget sparande på lite olika sätt, om du vill och behöver det.</p>
          <p class="mb-2">Klicka på delarna så får du veta lite mer om pengarna i dem!</p>
        </div>
      </div>

<?php
include_once 'views/own-saving.php';
include_once 'views/service-pension.php';
include_once 'views/public-pension.php';
include_once 'views/chart.php';
?>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="assets/js/pyramid.js"></script>
