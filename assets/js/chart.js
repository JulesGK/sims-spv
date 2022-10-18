
var chart
const education = "";
var csnAllowance = 3360;
var csnLoan = 7728;
var job = '';
var servicePension = new Boolean();
let studylength = 0;

var year = 12; //months in a year
var semester = 10; //Amount of months you study
var publicPension = 0.185; //Percentage of salary going towards public pension
var retire = 67; // The calculator assumes the average retirement age of 67
var adult = 18; // The age at which you finish secondary high school
var getWorkLife = (studylength = 0) => retire - adult - studylength; //The length of your work-life is from when you begin working to your retirement
var roof = 47000; // The roof for how much you can earn that will go into public pension
var csnToPublicPension = 0.21 * csnAllowance * semester * studylength; //The average percentage of CSN allowance that goes to public pension
var servicePensionUnder47k = 0.045; //The average percentage of your salary that goes into service pension when earning under 47 thousand kr
var servicePensionOver47k = 0.3; //The average percentage of your salary that goes into service pension when earning over 47 thousand kr
var publicPensionCalculation = year * publicPension * getWorkLife(studylength) + csnToPublicPension;
var servicePensionCalculation = year * servicePensionUnder47k * getWorkLife(studylength);
var servicePensionExtra = year * servicePensionOver47k * getWorkLife(studylength);
var lifeSpan = 280; //total months in life expectancy after turning 65 year



//functions
var getPublicPensionCalculation = (studylength) =>
    year * publicPension * getWorkLife(studylength) +
    (csnAllowance * semester * csnToPublicPension) * studylength;

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
const data = {
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
  data,
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
              maximumSignificantDigits: 4
            }).format(value);
          }
        }
      }
    }
  }
};

if(!chart){
  chart = new Chart(
      document.getElementById("bar-chart").getContext("2d"),
      config
  );
}
else if (chart.destroy) {
  chart.destroy()
}

//function to update the chart
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
  scen3Saving = !Number.isNaN(scen3Saving) ? scen3Saving : 1;

  let studylength = document.getElementById("studylength").value;
  studylength = !Number.isNaN(studylength) ? studylength : 1;

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


  console.log(studylength);
  console.log({monthSavingScen1, monthServicePensionScen1, monthPublicPensionScen1, totalPensionScen1});
  console.log({monthSavingScen2, monthServicePensionScen2, monthPublicPensionScen2, totalPensionScen2});
  console.log({monthSavingScen3, monthServicePensionScen3, monthPublicPensionScen3, totalPensionScen3});
  chart.data.datasets[0].data = [
    monthSavingScen1,
    monthSavingScen2,
    monthSavingScen3
  ];
  chart.data.datasets[1].data = [
    monthServicePensionScen1,
    monthServicePensionScen2,
    monthServicePensionScen3
  ];
  chart.data.datasets[2].data = [
    monthPublicPensionScen1,
    monthPublicPensionScen2,
    monthPublicPensionScen3
  ];
  chart.data.datasets[3].data = [
    totalPensionScen1,
    totalPensionScen2,
    totalPensionScen3
  ];

  chart.update("active");
}
