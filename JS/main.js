//Loads the whole page
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    
    const education = '';
    var studylength = 0;
    var csnAllowence = '';
    var csnLoan = '';
    const job = '';
    const servicePension = new Boolean();
    var scen1BruSalary = '';
    var scen1NetSalary = '';
    var scen1Saving = '';
    var scen2BruSalary = '';
    var scen2NetSalary = '';
    var scen2Saving = '';
    var scen3BruSalary = '';
    var scen3NetSalary = '';
    var scen3Saving = '';

    var year = 12; //months in a year
    var semester = 10 //Amount of months you study
    var publicPension = 0.185; //Percentage of salary going towards public pension
    var retire = 67; // The calculator assumes the avrage retirement age of 67
    var adult = 18; // The age at which you finish secondary highschool
    var worklife = retire - (adult + studylength); //The length of your worklife is from when you begin working to your retirement 
    var roof = 47000; // The roof for how much you can earn that will go into public pension
    var csnToPublicPension = 0.21; //The average percentage of CSN allowence that goes to public pension
    var servicePensionUnder47k = 0.045 //The average percentage of your salary that goes into service pension when earning under 47 thousand kr
    var servicePensionOver47k = 0.3 //The average percentage of your salary that goes into service pension when earning over 47 thousand kr
    



    function input(){

    }

    document.getElementById("test").addEventListener( "click", function results() {
       document.getElementById("education").innerHTML = "Utbildning: " + education; 
       document.getElementById("studylength").innerHTML = "Studietid: " + studylength;
       document.getElementById("csnAllowence").innerHTML = "Bidrag: " + csnAllowence;
       document.getElementById("csnLoan").innerHTML = "Lån: " + csnLoan;
       document.getElementById("job").innerHTML = "Yrke: " + job;
       if(servicePension){
        document.getElementById("servicePension").innerHTML = "Tjänstepension: Ja";
       }
       else{
        document.getElementById("servicePension").innerHTML = "Tjänstepension: Nej";
       }

       //Inputs
       //These seven simply assigns the value to the correct square
       document.getElementById("scen1BruSalary").innerHTML = scen1BruSalary;
       document.getElementById("scen2BruSalary").innerHTML = scen2BruSalary;
       document.getElementById("scen3BruSalary").innerHTML = scen3BruSalary;

       document.getElementById("scen1NetSalary").innerHTML = scen1NetSalary;
       document.getElementById("scen2NetSalary").innerHTML = scen2NetSalary;
       document.getElementById("scen3NetSalary").innerHTML = scen3NetSalary;

       document.getElementById("scen1Saving").innerHTML = scen1Saving;
       document.getElementById("scen2Saving").innerHTML = scen2Saving;
       document.getElementById("scen3Saving").innerHTML = scen3Saving;

       //Public pension
       //Since there's a roof for how much can go into the public pension we need to check against it
       if(scen1BruSalary < roof){
        document.getElementById("totScen1AlmPension").innerHTML = (scen1BruSalary * year * publicPension * worklife + (csnAllowence * semester * csnToPublicPension) * studylength));
       }
       else{
        document.getElementById("totScen1AlmPension").innerHTML = (roof * year * publicPension * worklife + (csnAllowence * semester * csnToPublicPension) * studylength));
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

       //Service pension
       //Since different percenteges goes into service pension there's different equations depending on how much you earn
       if(scen1BruSalary < roof) {
        document.getElementById("totScen1TjaPension").innerHTML = (scen1BruSalary * year * servicePensionUnder47k * worklife);
       }
       else{
        document.getElementById("totScen1TjaPension").innerHTML = (scen1BruSalary * year * servicePensionUnder47k * worklife) + ((scen1BruSalary - roof) * year * servicePensionOver47k * worklife);
       } 

       if(scen2BruSalary < roof) {
        document.getElementById("totScen2TjaPension").innerHTML = (scen2BruSalary * year * servicePensionUnder47k * worklife);
       }
       else{
        document.getElementById("totScen2TjaPension").innerHTML = (scen2BruSalary * year * servicePensionUnder47k * worklife) + ((scen2BruSalary - roof) * year * servicePensionOver47k * worklife);
       }

       if(scen3BruSalary < roof) {
        document.getElementById("totScen3TjaPension").innerHTML = (scen3BruSalary * year * servicePensionUnder47k * worklife);
       }
       else{
        document.getElementById("totScen3TjaPension").innerHTML = (scen3BruSalary * year * servicePensionUnder47k * worklife) + ((scen3BruSalary - roof) * year * servicePensionOver47k * worklife);
       }

       //Savings
       document.getElementById("totScen1Saving").innerHTML = worklife * scen1Saving * year;
       document.getElementById("totScen2Saving").innerHTML = worklife * scen2Saving * year;
       document.getElementById("totScen3Saving").innerHTML = worklife * scen3Saving * year;
    })

    function graphs() {

    }
});
