document.addEventListener("DOMContentLoaded", function () {
        "use strict";

        const education = '';
        var studylength = 0;
        var csnAllowance = 3360;
        var csnLoan = 7728;
        const job = '';
        const servicePension = new Boolean();
        var scen1BruSalary = 0;
        var scen1NetSalary = 0;
        var scen1Saving = 0;
        var scen2BruSalary = 0;
        var scen2NetSalary = 0;
        var scen2Saving = 0;
        var scen3BruSalary = 0;
        var scen3NetSalary = 0;
        var scen3Saving = 0;
        var totScen1AlmPension = 0;
        var totScen2AlmPension = 0;
        var totScen3AlmPension = 0;
        var totScen1TjanstePension = 0;
        var totScen2TjanstePension = 0;
        var totScen3TjanstePension = 0;
        var totScen1Saving = 0;
        var totScen2Saving = 0;
        var totScen3Saving = 0;

        var tax = 1/3;
        var year = 12; //months in a year
        var semester = 10 //Amount of months you study
        var publicPension = 0.185; //Percentage of salary going towards public pension
        var retire = 67; // The calculator assumes the average retirement age of 67
        var adult = 18; // The age at which you finish secondary high school
        var getWorkLife = (studylength = 0) => retire - adult - studylength;
        var worklife = retire - adult - studylength; //The length of your worklife is from when you begin working to your retirement
        var roof = 47000; // The roof for how much you can earn that will go into public pension
        var csnToPublicPension = csnAllowance * semester * 0.21 * studylength; //The average percentage of CSN allowance that goes to public pension
        var servicePensionUnder47k = 0.045 //The average percentage of your salary that goes into service pension when earning under 47 thousand kr
        var servicePensionOver47k = 0.3 //The average percentage of your salary that goes into service pension when earning over 47 thousand kr
        var publicPensionCalculation = year * publicPension * getWorkLife(studylength);
        var servicePensionCalculation = year * servicePensionUnder47k * getWorkLife(studylength);
        var servicePensionExtra = year * servicePensionOver47k * getWorkLife(studylength);
        var lifeSpan = 280; //total months in life expectancy after turning 65 year

        //Calculations
        //Public pension and Service Pension
        //Since there's a roof for how much can go into the public pension we need to check against it
        //Since different percentages goes into service pension there's different equations depending on how much you earn

        //Scenario 1
        if(scen1BruSalary < roof){
            totScen1AlmPension = scen1BruSalary * publicPensionCalculation + csnToPublicPension;
            totScen1TjanstePension = scen1BruSalary * servicePensionCalculation;
        }
        else{
            totScen1AlmPension = roof * publicPensionCalculation  + csnToPublicPension;
            totScen1TjanstePension = roof * servicePensionCalculation + (scen1BruSalary - roof) * servicePensionExtra;
        }

        //Scenario 2
        if(scen2BruSalary < roof){
            totScen2AlmPension = scen2BruSalary * publicPensionCalculation  + csnToPublicPension;
            totScen2TjanstePension = scen2BruSalary * servicePensionCalculation;
        }
        else{
            totScen1AlmPension = roof * publicPensionCalculation  + csnToPublicPension;
            totScen2TjanstePension = roof * servicePensionCalculation + (scen2BruSalary - roof) * servicePensionExtra;
        }

        //Scenario 3
        if(scen3BruSalary < roof){
            totScen3AlmPension = scen3BruSalary * publicPensionCalculation  + csnToPublicPension;
            totScen3TjanstePension = scen3BruSalary * servicePensionCalculation;
        }
        else{
            totScen3AlmPension = roof * publicPensionCalculation  + csnToPublicPension;
            totScen3TjanstePension = roof * servicePensionCalculation + (scen3BruSalary - roof) * servicePensionExtra;
        }

        //Savings
        totScen1Saving = worklife * scen1Saving * year;

        totScen2Saving = worklife * scen2Saving * year;

        totScen3Saving = worklife * scen3Saving * year;

        document.getElementById("studyLength").addEventListener("change", calculateCsn);


        function calculateCsn(){
            var studyLengthValue = document.getElementById("studyLength").value;
            var result1 = semester * studyLengthValue * csnAllowance ;
            document.getElementById("csnAllowance").value = result1;
            var result2 = semester * studyLengthValue * csnLoan;
            document.getElementById("csnLoan").value = result2;
        }

        document.getElementById("scen1BruSalary").addEventListener("change", calculateNettoSalary);
        document.getElementById("scen2BruSalary").addEventListener("change", calculateNettoSalary);
        document.getElementById("scen3BruSalary").addEventListener("change", calculateNettoSalary);


        function calculateNettoSalary(){
            scen1BruSalary = document.getElementById("scen1BruSalary").value;
            scen1NetSalary = parseInt(scen1BruSalary - scen1BruSalary * tax) ;
            document.getElementById("scen1NetSalary").value = scen1NetSalary;

            scen2BruSalary = document.getElementById("scen2BruSalary").value;
            scen2NetSalary = parseInt(scen2BruSalary - scen2BruSalary * tax) ;
            document.getElementById("scen2NetSalary").value = scen2NetSalary;

            scen3BruSalary = document.getElementById("scen3BruSalary").value;
            scen3NetSalary = parseInt(scen3BruSalary - scen3BruSalary * tax) ;
            document.getElementById("scen3NetSalary").value = scen3NetSalary;
        }


        document.getElementById("job").addEventListener("change", function(){
            document.getElementById("scen2BruSalary").value = document.getElementById("job").value;
            calculateNettoSalary();
            newValue2();
            updateChart();
        });

        //Line Graph
        var chart = new CanvasJS.Chart("chartContainer", {
            theme:"light2",
            animationEnabled: true,
            title:{
                text: "Pension"
            },
            axisY :{
                title: "Total pension (kr)",
                minimum: adult + studylength,
            },
            toolTip: {
                shared: "true"
            },
            legend:{
                cursor:"pointer",
            },

            data: [{
                type: "line",
                showInLegend: true,
                yValueFormatString: "##.00kr",
                name: "Scenario 1",
                dataPoints: []
            },
                {
                    type: "line",
                    showInLegend: true,
                    yValueFormatString: "##.00kr",
                    name: "Scenario 2",
                    dataPoints: []
                },
                {
                    type: "line",
                    showInLegend: true,
                    yValueFormatString: "##.00kr",
                    name: "Scenario 3",
                    dataPoints: []
                }
            ]
        });

        window.addEventListener('load', function graph() {

            for(var i = 0; i <= worklife; i++){

                chart.options.data[0].dataPoints.push({
                    label: i + adult + studylength,
                    y: ((totScen1AlmPension - csnToPublicPension)/worklife) * i + csnToPublicPension +
                        totScen1TjanstePension/worklife * i +
                        totScen1Saving/worklife * i
                })
                chart.options.data[1].dataPoints.push({
                    label: i + adult + studylength,
                    y: ((totScen2AlmPension - csnToPublicPension)/worklife) * i + csnToPublicPension +
                        totScen2TjanstePension/worklife * i +
                        totScen2Saving/worklife * i
                })
                chart.options.data[2].dataPoints.push({
                    label: i + adult + studylength,
                    y: ((totScen3AlmPension - csnToPublicPension)/worklife) * i + csnToPublicPension +
                        totScen3TjanstePension/worklife * i +
                        totScen3Saving/worklife * i
                })
            }
            chart.render();
        });

        document.getElementById("scen1BruSalary").addEventListener("change", newValue1);
        document.getElementById("scen3BruSalary").addEventListener("change", newValue3);
        document.getElementById("scen1Saving").addEventListener("change", newValue1);
        document.getElementById("scen2Saving").addEventListener("change", newValue2);
        document.getElementById("scen3Saving").addEventListener("change", newValue3);


        function newValue1(){
            if(isNaN(document.getElementById("scen1BruSalary").value)){
                document.getElementById("scen1BruSalary").value = 0;
            }
            if(document.getElementById("scen1BruSalary").value % 1 != 0){
                document.getElementById("scen1BruSalary").value = Math.round(document.getElementById("scen1BruSalary").value);
            }
            if(document.getElementById("scen1BruSalary").value >= scen2BruSalary){
                document.getElementById("scen1BruSalary").value = scen2BruSalary - 1;
            }
            for(var i = 0; i <= worklife; i++){
                scen1BruSalary = document.getElementById("scen1BruSalary").value;
                scen1Saving = document.getElementById("scen1Saving").value;

                if(scen1BruSalary < roof){
                    totScen1AlmPension = scen1BruSalary * publicPensionCalculation + csnToPublicPension;
                    totScen1TjanstePension = scen1BruSalary * servicePensionCalculation;
                }
                else{
                    totScen1AlmPension = roof * publicPensionCalculation  + csnToPublicPension;
                    totScen1TjanstePension = roof * servicePensionCalculation + (scen1BruSalary - roof) * servicePensionExtra;
                }

                totScen1Saving = worklife * scen1Saving * year;

                chart.options.data[0].dataPoints[i].y =
                    ((totScen1AlmPension - csnToPublicPension)/worklife) * i + csnToPublicPension +
                    totScen1TjanstePension/worklife * i +
                    totScen1Saving/worklife * i

            }
            chart.render();
            updateChart();

        }

        function newValue2(){

            for(var i = 0; i <= worklife; i++){
                scen2BruSalary = document.getElementById("scen2BruSalary").value;
                scen2Saving = document.getElementById("scen2Saving").value;

                if(scen2BruSalary < roof){
                    totScen2AlmPension = scen2BruSalary * publicPensionCalculation + csnToPublicPension;
                    totScen2TjanstePension = scen2BruSalary * servicePensionCalculation;
                }
                else{
                    totScen2AlmPension = roof * publicPensionCalculation  + csnToPublicPension;
                    totScen2TjanstePension = roof * servicePensionCalculation + (scen2BruSalary - roof) * servicePensionExtra;
                }

                totScen2Saving = worklife * scen2Saving * year;

                chart.options.data[1].dataPoints[i].y =
                    ((totScen2AlmPension - csnToPublicPension)/worklife) * i + csnToPublicPension +
                    totScen2TjanstePension/worklife * i +
                    totScen2Saving/worklife * i

            }
            chart.render();
            updateChart();
        }

        function newValue3(){

            if(isNaN(document.getElementById("scen3BruSalary").value)){
                document.getElementById("scen3BruSalary").value = 0;
            }
            if(document.getElementById("scen3BruSalary").value % 1 != 0){
                document.getElementById("scen3BruSalary").value = Math.round(document.getElementById("scen3BruSalary").value);
            }
            if(document.getElementById("scen3BruSalary").value <= scen2BruSalary){

                document.getElementById("scen3BruSalary").value = +1 + +scen2BruSalary;
            }

            for(var i = 0; i <= worklife; i++){
                scen3BruSalary = document.getElementById("scen3BruSalary").value;
                scen3Saving = document.getElementById("scen3Saving").value;

                if(scen3BruSalary < roof){
                    totScen3AlmPension = scen3BruSalary * publicPensionCalculation + csnToPublicPension;
                    totScen3TjanstePension = scen3BruSalary * servicePensionCalculation;
                }
                else{
                    totScen3AlmPension = roof * publicPensionCalculation  + csnToPublicPension;
                    totScen3TjanstePension = roof * servicePensionCalculation + (scen3BruSalary - roof) * servicePensionExtra;
                }

                totScen3Saving = worklife * scen3Saving * year;

                chart.options.data[2].dataPoints[i].y =
                    ((totScen3AlmPension - csnToPublicPension)/worklife) * i + csnToPublicPension +
                    totScen3TjanstePension/worklife * i +
                    totScen3Saving/worklife * i
            }
            chart.render();
            updateChart();
        }

        //Bar-chart
        //functions
        var getWorkLife = (studylength) => retire - adult - studylength;

        var getPublicPensionCalculation = (studylength) =>
            year * publicPension * getWorkLife(studylength);

        var getServicePensionCalculation = (studylength) =>
            year * servicePensionUnder47k * getWorkLife(studylength);

        var getServicePensionExtra = (studylength) =>
            year * servicePensionOver47k * getWorkLife(studylength);

        var getTotalSaving = (studylength, saving) =>
            getWorkLife(studylength) * saving * year;

        var getTotalServicePension = (salary, studylength) => {
            if (salary < roof) {
                return salary * getServicePensionCalculation(studylength);
            }else {
                return roof * getServicePensionCalculation(studylength) +
                    (salary - roof) * getServicePensionExtra(studylength);
            }
        };

        var getTotalPublicPension = (salary, studylength) => {
            if (salary < roof) {
                return salary * getPublicPensionCalculation(studylength) + csnToPublicPension;
            }else {
                return roof * getPublicPensionCalculation(studylength) + csnToPublicPension;
            }
        };

        var getTotalPension = (salary, saving, studylength) =>
            getTotalServicePension(salary, studylength) + getTotalSaving(studylength, saving) +
            getTotalPublicPension(salary, studylength);


        // setup Bar chart
        const dataset = {
            labels: ["Scenario1", "Scenario2", "Scenario3"],
            datasets: [
                {
                    label: "Eget Sparande",
                    data: [0, 0, 0, 0],
                    backgroundColor: "green",
                    borderColor: "green",
                    borderWidth: 1,
                }, {
                    label: "Tj??nstepension",
                    data: [0, 0, 0, 0],
                    backgroundColor: "blue",
                    borderColor: "blue",
                    borderWidth: 1,
                }, {
                    label: "Allm??n Pension",
                    data: [0, 0, 0, 0],
                    backgroundColor: "orange",
                    borderColor: "orange",
                    borderWidth: 1,
                }, {
                    label: "Total pension",
                    data: [0, 0, 0, 0],
                    backgroundColor: "purple",
                    borderColor: "purple",
                    borderWidth: 1,

                }
            ],
        };

        const configbar = {
            type: "bar",
            data: dataset,
            options: {
                locale: 'sv-SV',
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: (value, index, values) => {
                                return new Intl.NumberFormat('sv-SV',{
                                    style: 'currency',
                                    currency: 'SEK',
                                    maximumSignificantDigits: 3
                                }).format(value);
                            }
                        }
                    }
                }
            }
        };

        const barChart = new Chart(
            document.getElementById("bar-chart").getContext("2d"),
            configbar
        );


        window.addEventListener('load' , updateChart());

        function updateChart() {

            // Scenario 1
            const monthSavingScen1 = getTotalSaving(
                studylength,
                scen1Saving
            ) / lifeSpan;

            const monthServicePensionScen1 = getTotalServicePension(
                scen1BruSalary,
                studylength
            ) / lifeSpan;

            const monthPublicPensionScen1 = getTotalPublicPension(
                scen1BruSalary,
                studylength
            ) / lifeSpan;

            const totalPensionScen1 = getTotalPension(
                scen1BruSalary,
                scen1Saving,
                studylength
            ) / lifeSpan;

            //Scenario 2
            const monthSavingScen2 =  getTotalSaving(
                studylength,
                scen2Saving
            ) / lifeSpan;

            const monthServicePensionScen2 = getTotalServicePension(
                scen2BruSalary,
                studylength
            ) / lifeSpan;

            const monthPublicPensionScen2 = getTotalPublicPension(
                scen2BruSalary,
                studylength
            ) / lifeSpan;

            const totalPensionScen2 = getTotalPension(
                scen2BruSalary,
                scen2Saving,
                studylength
            ) / lifeSpan;

            //Scenario 3
            const monthSavingScen3 =  getTotalSaving(
                studylength,
                scen3Saving
            ) / lifeSpan;

            const monthServicePensionScen3 = getTotalServicePension(
                scen3BruSalary,
                studylength
            ) / lifeSpan;

            const monthPublicPensionScen3 = getTotalPublicPension(
                scen3BruSalary,
                studylength
            ) / lifeSpan;

            const totalPensionScen3 = getTotalPension(
                scen3BruSalary,
                scen3Saving,
                studylength
            ) / lifeSpan;

            console.log({monthSavingScen1, monthServicePensionScen1, monthPublicPensionScen1, totalPensionScen1});
            console.log({monthSavingScen2, monthServicePensionScen2, monthPublicPensionScen2, totalPensionScen2});
            console.log({monthSavingScen3, monthServicePensionScen3, monthPublicPensionScen3, totalPensionScen3});
            barChart.data.datasets[0].data = [
                monthSavingScen1,
                monthSavingScen2,
                monthSavingScen3
            ];
            barChart.data.datasets[1].data = [
                monthServicePensionScen1,
                monthServicePensionScen2,
                monthServicePensionScen3
            ];
            barChart.data.datasets[2].data = [
                monthPublicPensionScen1,
                monthPublicPensionScen2,
                monthPublicPensionScen3
            ];
            barChart.data.datasets[3].data = [
                totalPensionScen1,
                totalPensionScen2,
                totalPensionScen3
            ];

            barChart.update("active");
        };
    }
);
