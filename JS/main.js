document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const education = 'Polis';
    var studylength = 2;
    var csnAllowence = 'xxxx';
    var csnLoan = 'xxxx';
    const job = 'Polis';
    const servicePension = new Boolean(true);
    var scen1BruSalary = 'xxxx';
    var scen1NetSalary = 'xxxx';
    var scen1Saving = 'xxxx';
    var scen2BruSalary = 'xxxx';
    var scen2NetSalary = 'xxxx';
    var scen2Saving = 'xxxx';
    var scen3BruSalary = 'xxxx';
    var scen3NetSalary = 'xxxx';
    var scen3Saving = 'xxxx';


    function input(){

    }

    function results() {
       document.getElementById("education").value = education; 
       document.getElementById("studylength").innerText = studylength;
       document.getElementById("csnAllowence").innerHTML = csnAllowence;
       document.getElementById("csnLoan").innerHTML = csnLoan;
       document.getElementById("job").innerHTML = job;
       if(servicePension){
           document.getElementById("servicePension").innerHTML = 'Ja';
       }
       else{
           document.getElementById("servicePension").innerHTML = 'Nej';
       }
    }

    function graphs() {

    }
});