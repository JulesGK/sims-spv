
var barChart
const education = "";
var csnAllowence = 3360;
var csnLoan = 7728;
var job = '';
var servicePension = new Boolean();

var year = 12; //months in a year
var semester = 10; //Amount of months you study
var publicPension = 0.185; //Percentage of salary going towards public pension
var retire = 67; // The calculator assumes the avrage retirement age of 67
var adult = 18; // The age at which you finish secondary highschool
var getWorkLife = (studylength = 0) => retire - adult - studylength; //The length of your worklife is from when you begin working to your retirement 
var roof = 47000; // The roof for how much you can earn that will go into public pension
var csnToPublicPension = 0.21; //The average percentage of CSN allowence that goes to public pension
var servicePensionUnder47k = 0.045; //The average percentage of your salary that goes into service pension when earning under 47 thousand kr
var servicePensionOver47k = 0.3; //The average percentage of your salary that goes into service pension when earning over 47 thousand kr
var publicPensionCalculation = year * publicPension * getWorkLife(studylength) + (csnAllowence * semester * csnToPublicPension) * studylength;
var servicePensionCalculation = year * servicePensionUnder47k * getWorkLife(studylength);
var servicePensionExtra = year * servicePensionOver47k * getWorkLife(studylength);


//functions
var getPublicPensionCalculation = (studylength) =>
year * publicPension * getWorkLife(studylength) + 
(csnAllowence * semester * csnToPublicPension) * studylength;

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
    return salary * getPublicPensionCalculation(studylength);
  }else {
    return roof * getPublicPensionCalculation(studylength);
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
      label: "Tjänstepension",
      data: [0, 0, 0, 0],
      backgroundColor: "blue",
      borderColor: "blue",
      borderWidth: 1,
    }, {
      label: "Allmän Pension",
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

const config = {
  type: "bar",
  data: dataset,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

if(!barChart){
  barChart = new Chart(
    document.getElementById("bar-chart").getContext("2d"),
    config
  );
  
}
  else if (barChart.destroy) {
    barChart.destroy()
}
  

function updateChart(el) {
  let scen1BruSalary = document.getElementById("scen1BruSalary").value;
  scen1BruSalary = !Number.isNaN(scen1BruSalary) ? scen1BruSalary : 1;

  let scen1Saving = document.getElementById("scen1Saving").value;
  scen1Saving = !Number.isNaN(scen1Saving) ? scen1Saving : 1;

  let scen2BruSalary = document.getElementById("scen2BruSalary").value;
  scen2BruSalary = !Number.isNaN(scen2BruSalary) ? scen2BruSalary : 1;

  let scen2Saving = document.getElementById("scen2Saving").value;
  scen2Saving = !Number.isNaN(scen2Saving) ? scen2Saving : 1;

  let scen3BruSalary = document.getElementById("scen3BruSalary").value;
  scen3BruSalary = !Number.isNaN(scen3BruSalary) ? scen3BruSalary : 1;

  let scen3Saving = document.getElementById("scen3Saving").value;
  scen3Saving = !Number.isNaN(scen3Saving) ? scen1Saving : 1;

  let studylength = document.getElementById("studylength").value;
  studylength = !Number.isNaN(studylength) ? studylength : 1;

// Scenario 1
  const totalSavingScen1 = getTotalSaving(
    studylength, 
    scen1Saving
  );

  const totalServicePensionScen1 = getTotalServicePension(
    scen1BruSalary,
    studylength
  );

  const totalPublicPensionScen1 = getTotalPublicPension(
    scen1BruSalary,
    studylength
  );

  const totalPensionScen1 = getTotalPension(
    scen1BruSalary,
    scen1Saving,
    studylength
  )

  //Scenrio 2
  const totalSavingScen2 =  getTotalSaving(
    studylength,
    scen2Saving
  );

  const totalServicePensionScen2 = getTotalServicePension(
    scen2BruSalary,
    studylength
  );

  const totalPublicPensionScen2 = getTotalPublicPension(
    scen2BruSalary,
    studylength
  );

  const totalPensionScen2 = getTotalPension(
    scen2BruSalary,
    scen2Saving,
    studylength
  );

  //Scenrio 3
  const totalSavingScen3 =  getTotalSaving(
    studylength,
    scen3Saving
  );

  const totalServicePensionScen3 = getTotalServicePension(
    scen3BruSalary,
    studylength
  );

  const totalPublicPensionScen3 = getTotalPublicPension(
    scen3BruSalary,
    studylength
  );

  const totalPensionScen3 = getTotalPension(
    scen3BruSalary,
    scen3Saving,
    studylength
  );

  
  console.log(totalSavingScen1, totalServicePensionScen1, totalPublicPensionScen1, totalPensionScen1);
  barChart.data.datasets[0].data = [
    totalSavingScen1, 
    totalSavingScen2, 
    totalSavingScen3
  ];
  barChart.data.datasets[1].data = [
    totalServicePensionScen1, 
    totalServicePensionScen2,
    totalServicePensionScen3 
  ];
  barChart.data.datasets[2].data = [ 
    totalPublicPensionScen1,
    totalPublicPensionScen2,
    totalPublicPensionScen3 
  ];
  barChart.data.datasets[3].data = [
    totalPensionScen1,
    totalPensionScen2,
    totalPensionScen3
  ];

  barChart.update("active");
}
 






  // setup donut-chart
  // setup 
 /*  const data2 = {
      labels: ['Brutto Lön', 'Netto Lön', 'Sparande'],
      datasets: [{
        label: 'Test dynamic chart',
        data: [scen2BruSalary.value, scen2NetSalary.value, scen2Saving.value],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(0, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 0, 0, 1)'
        ],
        borderWidth: 1
      }]
    };

    // config 
    const configDoughnut = {
      type: 'doughnut',
      data: data2,
      options: {}
    };

    // render init block
    const doughnutChart = new Chart(
      document.getElementById('doughnut-Chart'),
      configDoughnut
  );

  function updateDonutChart() {
    var updateValues = [scen2BruSalary.value, scen2NetSalary.value, scen2Saving.value];
    doughnutChart.data.datasets[0].data = updateValues;
    doughnutChart.update();
  }

 */
