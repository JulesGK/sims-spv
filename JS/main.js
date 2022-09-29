document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    
    const education = 'Polis';
    var studylength = 2;
    var csnAllowence = '2000';
    var csnLoan = '10000';
    const job = 'Polis';
    const servicePension = new Boolean(true);
    var scen1BruSalary = '15000';
    var scen1NetSalary = '10000';
    var scen1Saving = '500';
    var scen2BruSalary = '45000';
    var scen2NetSalary = '30000';
    var scen2Saving = '1000';
    var scen3BruSalary = '75000';
    var scen3NetSalary = '50000';
    var scen3Saving = '1500';

    var year = 12; //months in a year
    var publicPension = 0.185; //Percentage of salary going towards public pension
    var retire = 67;
    var adult = 18;
    var worklife = retire - (adult + studylength);
    var roof = 47000;
    var occupantionPensionUnder47k = 0.045
    var occupantionPensionOver47k = 0.3
    



    function input(){

    }

    document.getElementById("test").addEventListener( "click", function results() {
       document.getElementById("education").innerHTML += education; 
       document.getElementById("studylength").innerHTML += studylength;
       document.getElementById("csnAllowence").innerHTML += csnAllowence;
       document.getElementById("csnLoan").innerHTML += csnLoan;
       document.getElementById("job").innerHTML += job;
       if(servicePension){
        document.getElementById("servicePension").innerHTML += 'Ja';
       }
       else{
        document.getElementById("servicePension").innerHTML += 'Nej';
       }

       document.getElementById("scen1BruSalary").innerHTML = scen1BruSalary;
       document.getElementById("scen2BruSalary").innerHTML = scen2BruSalary;
       document.getElementById("scen3BruSalary").innerHTML = scen3BruSalary;

       document.getElementById("scen1NetSalary").innerHTML = scen1NetSalary;
       document.getElementById("scen2NetSalary").innerHTML = scen2NetSalary;
       document.getElementById("scen3NetSalary").innerHTML = scen3NetSalary;

       document.getElementById("scen1Saving").innerHTML = scen1Saving;
       document.getElementById("scen2Saving").innerHTML = scen2Saving;
       document.getElementById("scen3Saving").innerHTML = scen3Saving;

       if(scen1BruSalary < roof){
        document.getElementById("totScen1AlmPension").innerHTML = (scen1BruSalary * year * publicPension * worklife);
       }
       else{
        document.getElementById("totScen1AlmPension").innerHTML = (roof * year * publicPension * worklife);
       }
        
       
       if(scen2BruSalary < roof){
        document.getElementById("totScen2AlmPension").innerHTML = (scen2BruSalary * year * publicPension * worklife);
       }
       else{
        document.getElementById("totScen2AlmPension").innerHTML = (roof * year * publicPension * worklife);
       }
       
       if(scen3BruSalary < roof){
        document.getElementById("totScen3AlmPension").innerHTML = (scen3BruSalary * year * publicPension * worklife);
       }
       else{
        document.getElementById("totScen3AlmPension").innerHTML = (roof * year * publicPension * worklife);
       }

       if(scen1BruSalary < roof) {
        document.getElementById("totScen1TjaPension").innerHTML = (scen1BruSalary * year * occupantionPensionUnder47k * worklife);
       }
       else{
        document.getElementById("totScen1TjaPension").innerHTML = (scen1BruSalary * year * occupantionPensionUnder47k * worklife) + ((scen1BruSalary - roof) * year * occupantionPensionOver47k * worklife);
       } 

       if(scen2BruSalary < roof) {
        document.getElementById("totScen2TjaPension").innerHTML = (scen2BruSalary * year * occupantionPensionUnder47k * worklife);
       }
       else{
        document.getElementById("totScen2TjaPension").innerHTML = (scen2BruSalary * year * occupantionPensionUnder47k * worklife) + ((scen2BruSalary - roof) * year * occupantionPensionOver47k * worklife);
       }

       if(scen3BruSalary < roof) {
        document.getElementById("totScen3TjaPension").innerHTML = (scen3BruSalary * year * occupantionPensionUnder47k * worklife);
       }
       else{
        document.getElementById("totScen3TjaPension").innerHTML = (scen3BruSalary * year * occupantionPensionUnder47k * worklife) + ((scen3BruSalary - roof) * year * occupantionPensionOver47k * worklife);
       }

       document.getElementById("totScen1Saving").innerHTML = worklife * scen1Saving * year;
       document.getElementById("totScen2Saving").innerHTML = worklife * scen2Saving * year;
       document.getElementById("totScen3Saving").innerHTML = worklife * scen3Saving * year;
    })

    function graphs() {

    }
});