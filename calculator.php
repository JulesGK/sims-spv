<!DOCTYPE html>
<?php
include("includes/jobs.class.php");
include("assets/css/calculator.css");
include ("includes/getjob.php");

?>
<script type="text/javascript" src="JS/calculator.js"></script>

<header>
    <div class ="overlay">
        <h1>Räkna din pension</h1>
    </div>
</header>
<body>
<div class ="row">
    <div class = "column">
        <div class = "col-75">
            <div class = "container">
                <form action="/action_page.php">
                    <div class = "row">
                        <div class = "col-25">

                            <label for = "education"><i class = "education"></i> Utbildning
                                <div class="tooltip">&#9432;
                                    <span class="tooltiptext"> Skriv din utbildning som du ska läsa! </span>
                                </div>
                            </label>
                            <input type="text" id="education" name="education" placeholder="Skriv din utbildning">

                        </div>
                        <div class="col-25">
                            <label for="studyLength"><i class="studyLength"></i> Studietid </label>
                            <input type="number" min = "0" max = "6" id="studyLength" name="studyLength" placeholder="Antal år" oninput="calculateCsn()">
                        </div>
                    </div>
                    <div class = "row">
                        <div class="col-25">

                            <label for="csnAllowance"><i class="csnAllowance"></i> CSN bidrag
                                <div class="tooltip">&#9432;
                                    <span class="tooltiptext">Den kommer visa din CSN Bidrag, beror på antal år din utbildning är!</span>
                                </div>
                            </label>

                            <div class ="display">
                                <output  id="totalStudyAllowance">0</output>

                            </div>
                        </div>
                        <div class="col-25">

                            <label for="csnLoan"><i class="csnLoan"></i> CSN lån
                                <div class="tooltip">&#9432;
                                    <span class="tooltiptext">Den kommer visa din CSN Lån, beror på antal år din utbildning är!</span>
                                </div>
                            </label>
                            <div class ="display">
                                <output  id="totalStudyLoan">0</output>

                            </div>
                        </div>

                    </div>

                    <div class = "row">
                        <div class ="col-25">
                            <label for="job" > Yrke
                                <div class="tooltip">&#9432;
                                    <span class="tooltiptext">Välj yrket som du vill jobba som efter din utbildning!</span>
                                </div>
                            </label>
                            <br>
                            <SELECT   id =job  >
                                <option > --Välj yrke--</option>
                                <?php
                                $db = mysqli_connect("localhost", "admin", "password", "admin");;
                                $jobresult= mysqli_query($db, "SELECT work_name FROM occupation");
                                while($row=mysqli_fetch_assoc($jobresult)){
                                    $work_id= $row['work_id'];
                                    $work_name=$row['work_name'];
                                    echo "<option value='".$work_id."' >".$work_name."</option>";
                                }
                                ?>
                            </SELECT>
                            <BR>
                            <BR>
                        </div>
                        <div class ="col-25">

                            <label for=""><i class="servicePension"></i> Tjänstepension
                                <div class="tooltip">&#9432;
                                    <span class="tooltiptext">Välj om du ska ha tjänstepension då du jobbar, testa båda alternativen!</span>
                                </div>
                            </label>
                            <br>
                            <br>
                            <div>
                                <input type="radio" name="choice-radio"> Ja
                                <input type="radio" name="choice-radio"> Nej
                            </div>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-25" style ="width:128px; height:50px; padding-left: 10px;">

                            <label for = "Scenario1" <i class "Scenario1"></i> Scenario 1 </label>

                        </div>
                        <div class = "col-25" style = "padding-left: 4px;">

                            <label for = "Scenario2" <i class "Scenario2"></i>Scenario 2 </label>

                        </div>
                        <div class = "col-25" style ="padding-left:4px;">

                            <label for = "Scenario3" <i class "Scenario3"></i> Scenario 3 </label>

                        </div>
                    </div>
                    <div class =row>
                        <div class ="col-25" style="margin: 0px 0px 0px 0px;">
                            <label for class = "bruSalary" <i class = "bruSalary"></i> Lön före skatt (Bruttolön)
                            <div class="tooltip">&#9432;
                                <span class="tooltiptext">Ange din bruttolön och det kommer visa automatiskt din nettolön</span>
                            </div>
                            </label>
                        </div>
                    </div>

                    <div class = "row">
                        <div class = "col-25">
                            <label for="scen1BruSalary"><i class="scen1BruSalary"></i></label>

                            <input type="number" id="scen1BruSalary" name="scen1BruSalary" placeholder="Skriv lägre lön" oninput="calculateNettoSalary()">
                        </div>

                        <div class = "col-25">
                            <label for="scen2BruSalary"><i class="scen2BruSalary"></i></label>

                            <div class ="display">
                                <output  id="scen2BruSalary"  oninput="calculateNettoSalary()">0</output>
                            </div>

                        </div>
                        <div class = "col-25">
                            <label for="scen3BruSalary"><i class="scen3BruSalary"></i></label>
                            <input type="number" id="scen3BruSalary" name="scen3BruSalary" placeholder="Skriv högre lön " oninput="calculateNettoSalary()" >
                        </div>
                    </div>

                    <div class =row>
                        <div class ="col-25" style="margin: 0px 0px 0px 0px;">
                            <label for class = "bruSalary" <i class = "bruSalary" ></i> Lön efter skatt (Nettolön) </label>
                        </div>
                    </div>
                    <div class = "row">

                        <div class = "col-25">

                            <label for="scen1NetSalary"><i class="scen1NetSalary"></i></label>
                            <div class ="display">
                                <output id = "scen1NetSalary" > 0 </output>
                            </div>
                        </div>
                        <div class = "col-25">
                            <label for="scen2NetSalary"><i class="scen2NetSalary"></i></label>
                            <div class ="display">


                                <output id = "scen2NetSalary" > 0 </output>

                            </div>
                        </div>
                        <div class = "col-25">
                            <label for="scen3NetSalary"><i class="scen3NetSalary"></i></label>
                            <div class ="display">
                                <output id = "scen3NetSalary" > 0 </output>
                            </div>
                        </div>
                    </div>
                    <div class =row>
                        <div class ="col-25" style="margin: 0px 0px 0px 0px;">
                            <label for class = "monthSaving" <i class "bruSalary"></i> Månadssparande
                            <div class="tooltip">&#9432;
                                <span class="tooltiptext">Ange hur mycket du vill månadsspara per månad tills du blir 67 år!</span>
                            </div>
                            </label>
                        </div>
                    </div>
                    <div class = "row">
                        <div class = "col-25">

                            <label for="scen1Saving"><i class="scen1Saving"></i></label>
                            <input type="number" id="scen1Saving" name="scen1Saving" placeholder="Skriv belopp" >
                        </div>

                        <div class = "col-25">
                            <label for="scen2Saving"><i class="scen2Saving"></i></label>
                            <input type="number" id="scen2Saving" name="scen2Saving" placeholder="Skriv belopp" >
                        </div>

                        <div class = "col-25">
                            <label for="scen3Saving"><i class="scen3Saving"></i></label>
                            <input type="number" id="scen3Saving" name="scen3Saving" placeholder="Skriv belopp" >
                        </div>
                    </div>


                </form>
            </div>
        </div>
    </div>
</div>
</body>