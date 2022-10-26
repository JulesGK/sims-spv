
<style>
<?php include_once 'assets/css/style.css';?>
</style>
<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/pyramid.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>






<header>
    <div class ="header">
        <h1>Alla dina pensionspengar</h1>
        <h2> Tänk dig att du har några olika konton där det sätts in pengar till en framtida lön. En lön som du ska leva på när
            du inte längre jobbar. Det är pension det!</h2>
    </div>
</header>

<div class="parent">
    <div class="div1">
        <div class = "content">

            <h2>Pensionen brukar liknas vid en pyramid:</h2>

            <p>Basen är allmän pension. Jobbar du och betalar skatt i Sverige får du också</p>
            <p>inbetalningar till två konton för den allmänna pensionen.</p>
            <p>Tjänstepension får du inbetalning till om du jobbar på en schysst arbetsplats. Här</p>
            <p>kan det bli några konton eftersom det skiljer sig åt beroende på var du jobbar. Byter </p>
            <p>du jobb kan du få ännu fler konton.</p>
            <p>Och så kan du toppa med eget sparande på lite olika sätt, om du vill och behöver det.</p>
            <p class ="single-line">  Klicka på delarna så får du veta lite mer om pengarna i dem!</p>
        </div>
    </div>

    <div class =div2>
        <div class = content>
            <div class="header-desc-row row1 mb-4">
                <div class="header-desc-col col-12 col-md-9 mx-auto">
                    <?php
                    include_once 'views/own-saving.php';
                    include_once 'views/service-pension.php';
                    include_once 'views/public-pension.php';
                    ?>
                </div>
            </div>
        </div>

    </div>
</div>

    <div class ="div3" >
        <div class = container style="background-image:

            url('https://images.pexels.com/photos/4146005/pexels-photo-4146005.jpeg');

    background-size: cover;
    background-position: 55% 45%;

    position: relative;" >


        <h1 style="text-align:center;" >Räkna ut din pension</h1>
        <h3 style="text-align:center;"> Kalkylatorn beräknar på ett ungefär där den utgår ifrån att du börjar studera vid 18 år, jobbar efter utbildningen, pensionerar dig när du är 67 år och ingen ränta på eget sparande</h3>
        </div>
    </div>

<div class = "div4">
    <div class="chartCard">
        <div id="form"> <?php include_once 'includes/classes/calculator.php' ?>
        </div>




</div>

<div class ="div5">
    <div class="chartCard">


    <div <canvas id="chartContainer" style="height: 500px; width: 75%; padding-left: 0; padding-right: 200px;padding-bottom: 25%; "></canvas></div>
    <div class="chartBox" style="display:block;position: relative; height:500px;width:75%;">
        <canvas id="bar-chart"></canvas>
    </div>


</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
