function calculateCsn(){
    var studylength = '0';
    var csnAllowance = '3360';
    var csnLoan = '7728';


    var semester = '10';
    var studyLengthValue = document.getElementById("studyLength").value;
    var result1 = semester * studyLengthValue * csnAllowence ;
    document.getElementById("totalStudyAllowance").innerHTML = result1;
    var result2 = semester * studyLengthValue * csnLoan;
    document.getElementById("totalStudyLoan").innerHTML = result2;
}

function calculateNettoSalary(){

    var scen1Salary = document.getElementById("scen1BruSalary").value;
    var scen1result = parseInt(scen1Salary - scen1Salary * 1/3) ;
    document.getElementById("scen1NetSalary").innerHTML = scen1result;

    var scen2Salary = document.getElementById("scen2BruSalary").value;
    var scen2result = parseInt(scen2Salary - scen2Salary * 1/3) ;
    document.getElementById("scen2NetSalary").innerHTML = scen2result;

    var scen3Salary = document.getElementById("scen3BruSalary").value;
    var scen3result = parseInt(scen3Salary - scen3Salary * 1/3) ;
    document.getElementById("scen3NetSalary").innerHTML = scen3result;
}

document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    document.getElementById("scen2BruSalary").addEventListener("change", calculateNettoSalary);


    document.getElementById("job").addEventListener("change", function(){
        document.getElementById("scen2BruSalary").value = document.getElementById("job").value;
        calculateNettoSalary();
        //newValue2();
        //updateChart();
    });
});