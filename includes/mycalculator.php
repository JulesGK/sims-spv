
<?php
include("includes/jobs.class.php");
include("includes/getjob.php");

?>
<script type="text/javascript" src="JS/main.js"></script>

<form>
    <div>
        <label for="education"> Utbildning 
            <div class="tooltip">&#9432;
                <span class="tooltiptext"> Skriv din utbildning som du ska läsa! </span>
            </div>
        </label>
        <input type="text" id="education" name="education" placeholder="Skriv din utbildning">
        <label for="studyLength"> Studietid </label>
        <input type="number" min = "0" max = "6" id="studyLength" name="studyLength" placeholder="Antal år">
    </div>
    <div>
        <label for="csnAllowance"><i class="csnAllowance"></i> CSN bidrag
        </label>

        <input type="number" id="csnAllowance" name="csnAllowance" disabled>

        <label for="csnLoan"><i class="csnLoan"></i> CSN lån</label>
        <input type="number" id="csnLoan" name="csnLoan" disabled>
    </div>

    <div>
        <label for="job" > Yrke
            <div class="tooltip">&#9432;
                <span class="tooltiptext">Välj yrket som du vill jobba som efter din utbildning!</span>
            </div>
        </label>
        
        <SELECT id=job>
            <option > --Välj yrke--</option>
            <?php
            $db = mysqli_connect('localhost', 'root', '', 'admin');;
            $jobresult= mysqli_query($db, "SELECT work_name,salary FROM occupation");
            while($row=mysqli_fetch_assoc($jobresult)){
                $salary= $row['salary'];
                $work_name=$row['work_name'];
                echo "<option value='".$salary."' >".$work_name."</option>";
            }
            ?>
        </SELECT>
        
    <div class='yesno'>
        <label for="choice-radio"><i class="servicePension"></i> Tjänstepension</label>
        <input type="radio" id="yes" name="choice-radio"> Ja
        <input type="radio" id="no" name="choice-radio"> Nej
    </div>   
    
    <div class='parent'>
        <div class='child'>
            <label for="Scenario1"> Scenario 1</label>

            <label for="Scenario2"> Scenario 2</label>

            <label for="Scenario3"> Scenario 3</label>
        
        </div>

        <div class='child'>
            <label for class = "bruSalary"> <i class = "bruSalary"></i> Lön före skatt (Bruttolön)</label>
        </div>
        
        <div class='child'>
            <label for="scen1BruSalary"><i class="scen1BruSalary"></i></label>
            <input type="number" id="scen1BruSalary" name="scen1BruSalary" placeholder="Skriv lägre lön">

            <label for="scen2BruSalary"><i class="scen2BruSalary"></i></label>
            <input type="number" id="scen2BruSalary" name="scen2BruSalary" disabled>

            <label for="scen3BruSalary"><i class="scen3BruSalary"></i></label>
            <input type="number" id="scen3BruSalary" name="scen3BruSalary" placeholder="Skriv högre lön ">
        </div>

        <div class='child'>
            <div class ="col-25" style="margin: 0px 0px 0px 0px;">
                <label for class = "bruSalary"> <i class = "bruSalary" ></i> Lön efter skatt (Nettolön) </label>
            </div>
        </div>

        <div class='child'>
            <label for="scen1NetSalary"><i class="scen1NetSalary"></i></label>
            <input type="number" id="scen1NetSalary" name="scen1NetSalary" disabled>

            <label for="scen2NetSalary"><i class="scen2NetSalary"></i></label>
            <input type="number" id="scen2NetSalary" name="scen2NetSalary" disabled>

            <label for="scen3NetSalary"><i class="scen2NetSalary"></i></label>
            <input type="number" id="scen3NetSalary" name="scen3NetSalary" disabled>
        </div>

        <div class='child'>
            <label for class = "monthSaving"> <i class="bruSalary"></i> Månadssparande</label>
        </div>

        <div class='child'>
        <label for="scen1Saving"><i class="scen1Saving"></i></label>
        <input type="number" id="scen1Saving" name="scen1Saving" placeholder="Skriv belopp" >

        <label for="scen2Saving"><i class="scen2Saving"></i></label>
        <input type="number" id="scen2Saving" name="scen2Saving" placeholder="Skriv belopp" >

        <label for="scen3Saving"><i class="scen3Saving"></i></label>
        <input type="number" id="scen3Saving" name="scen3Saving" placeholder="Skriv belopp" >

        </div>
    </div>
