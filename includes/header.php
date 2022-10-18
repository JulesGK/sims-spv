<?php include_once 'includes/config.php'; ?>

<!DOCTYPE html>
<html lang="sv">
<head>
    <title><?= $site_title . $divider . $page_title; ?></title>
    <meta charset="utf-8">

    <!-- Bootstrap  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" referrerpolicy="no-referrer">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css" integrity="sha512-OTcub78R3msOCtY3Tc6FzeDJ8N9qvQn1Ph49ou13xgA9VsH9+LRxoFU6EqLhW4+PKRfU+/HReXmSZXHEkpYoOA==" crossorigin="anonymous" referrerpolicy="no-referrer">
    
    <!-- Chart -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="stylesheet" href="assets/css/normalize.css">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    <!--<link rel="stylesheet" href="assets/css/calulator.css">-->
</head>
<body>

<?php include_once 'includes/mainmenu.php'; ?>