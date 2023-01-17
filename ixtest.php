<?php

date_default_timezone_set("Africa/Johannesburg");
$date = date("Y-m-d");
$time = time("H:i:sa");

$enquiry = new Enquiries();

if (isset($_POST['submitix'])) {

    if ($enquiry) {

        $captcha = $_POST["captcha"];

        $captchaUser = filter_var($_POST["captcha"], FILTER_SANITIZE_STRING);


        $typecar = $selectedvehicle->Type;
        if (empty($selectedvehicle->id)) {
            return;
        }
        if (strlen($_POST['FirstName']) > 30) {
            return;
        }

        $stock_id = $_POST['StockCode'];
        $stock_id = str_replace("-", "/", $stock_id);
        // $stock_id = str_replace("-","/",$stock_id); 
        $dealer_id  = $_POST['DealershipID'];

        $name = $_POST['FirstName'];
        $surname = $_POST['LastName'];
        $phone = $_POST['phonenumber'];
        $email = $_POST['email'];


        $username = 'Secondhandcars';
        $password = '53condh4ndcar5!';


        //file_put_contents('file.txt', file_get_contents('php://input'));

        $xml = "
    <Lead>
        <General>
            <dealer>$dealer_id</dealer>
            <source>Secondhandcars</source>
            <enquiry>1</enquiry>
            <subtype>4</subtype>
            <comment></comment>
        </General>
        <Prospect>
            <title></title>
            <name>$name</name>
            <surname>$surname</surname>
            <email>$email</email>
            <home></home>
            <work>0000000000</work>
            <mobile>$phone</mobile>
            <idnumber></idnumber>
            <comment>Testing</comment>
            <area></area>
            <license>true</license>
        </Prospect>
        <Item>
            <id>$stock_id</id>
            <makeAsked>0</makeAsked>
            <modelAsked>0</modelAsked>
            <yearAsked>0</yearAsked>
            <mileageAsked>0</mileageAsked>
            <priceAsked>90</priceAsked>
            <colourAsked>0</colourAsked>
            <purchaseDate>0</purchaseDate>
        </Item>
    </Lead>";

        $curl = curl_init($url);

        // The URL
        $url = 'https://leadsubmitapi.ix.co.za/api/submit';

        //Initiate cURL
        $curl = curl_init($url);

        //Set the Content-Type to text/xml.
        curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type: text/xml"));
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $xml);
        curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_DIGEST);
        curl_setopt($curl, CURLOPT_USERPWD, $username . ":" . $password);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        // $result = curl_exec($curl);
        var_dump($curl);
       // die();
        if (curl_errno($curl)) {
            throw new Exception(curl_error($curl));
        }

        $result = curl_exec($curl);
        // echo $result;

        curl_close($curl);



        $enquiry->FirstName         = $_POST['FirstName'];
        $enquiry->LastName          = $_POST['LastName'];
        $enquiry->phonenumber       = $_POST['phonenumber'];
        $enquiry->email             = $_POST['email'];
        $enquiry->vehicleid         = $stock_id;
        $enquiry->DealershipID      = $selectedvehicle->DealershipID;
        $enquiry->Finance           = $_POST['Finance'];
        $enquiry->Trade_in          = $_POST['Trade_in'];
        $enquiry->Salesman          = $_POST['Salesman'];
        $enquiry->status            = $_POST['status'];
        $enquiry->enquiry_date      = $date;
        $enquiry->enquiry_time      = $time;
        $enquiry->consent           = $_POST['consent'];

        $enquiry->save();


        $Dealer__Name = str_replace(" ", "-", $dealerinfo->Dealer_Name);

        // echo $typecar;

        if ($typecar == 'Demo') {
            redirect("https://secondhandcars.co.za/demos/thank-you/" . strtolower($Dealer__Name));
        } elseif ($typecar == 'Used') {
            redirect("https://secondhandcars.co.za/used/thank-you/" . strtolower($Dealer__Name));
        }


        // redirect("https://secondhandcars.co.za/thank-you/" . str_replace(" ", "-", $dealerinfo->Dealer_Name));
    }
};
?>

<script>
    function isNumberKey(evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 46 && charCode > 31 &&
            (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
</script>

<form action="" method="post" class="form-group" enctype="multipart/form-data" onsubmit="$('#loadings').show() && $('#submitix').hide();">


    <body onload="generateCaptcha();">
        <?php include('scripts/contact_form.php'); ?>
        <?php if (!empty($captchaError)) { ?>
            <div class="form-group col-12 text-center">
                <div class="alert text-center <?php echo $captchaError['status']; ?>">
                    <?php echo $captchaError['message']; ?>
                </div>
            </div>
        <?php } ?>
        <input type="hidden" name="StockCode" class="form-control" value="<?php $stock_id = $selectedvehicle->StockCode;
                                                                            echo $stock_id = str_replace("-", "/", $stock_id); ?>">
        <input type="hidden" name="DealershipID" class="form-control" value="<?php echo $selectedvehicle->DealershipID ?>">
        <!-- <input type="text" name="type" class="form-control" value="<?php echo $selectedvehicle->Type ?>"> -->
        <!-- <input type="show" name="Salesman" value="unassigned" />
    <input type="show" name="status" value="pending" /> -->
        <div class="form-group">
            <label for="FirstName">First Name</label>
            <input type="text" required name="FirstName" class="form-control">
        </div>
        <div class="form-group">
            <label for="LastName">Last Name</label>
            <input type="text" required name="LastName" class="form-control">
        </div>
        <div class="form-group">
            <label for="phonenumber">Contact Number</label>
            <input type="text" onkeypress="return isNumberKey(event)" maxlength="10" required name="phonenumber" class="form-control">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" required name="email" class="form-control">
        </div>
        <div class="row mt-3">
            <div class="form-group col-12">
                <!-- <label>Captcha Code</label> -->
                <input type="text" id="mainCaptcha" readonly="readonly" class="py-2" />
            </div>
            <div class="form-group col-12">
                <input type="button" class="btn btn-primary" id="refresh" value="Refresh" onclick="generateCaptcha();" />
            </div>

        </div>
        <div class="row">
            <div class="form-group col-12 mb-0">
                <label>Type Code Above</label>
            </div>
            <div class="form-group col-12">
                <input type="text" id="txtInput" class="form-control" />
            </div>
        </div>


        <div class="form-check my-3">
            <input class="form-check-input" type="checkbox" required value="yes" name="consent" id="consent">
            <label class="form-check-label" for="flexCheckDefault">
                * Consent <br>(I have read and agree to the T&C's and Privacy Policy) <a href="https://secondhandcars.co.za/terms-and-conditions" style="color:#ab2328;">Terms and Conditions</a>
            </label>
        </div>
        <div class="form-group">
            <input type="submit" id="submitix" name="submitix" class="btn btn-primary">
        </div>
        <div id="loadings" style="display:none">Submitting...</div>
        <div class="form-group col-12">
            <td><span id="error" style="color:red"></span></td>
        </div>
        <div class="form-group col-12">
            <td><span id="success" name="success" style="color:green"></span></td>
        </div>
    </body>
</form>


<script type="text/javascript">
    function generateCaptcha() {
        var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
            'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
        var i;
        for (i = 0; i < 4; i++) {
            var a = alpha[Math.floor(Math.random() * alpha.length)];
            var b = alpha[Math.floor(Math.random() * alpha.length)];
            var c = alpha[Math.floor(Math.random() * alpha.length)];
            var d = alpha[Math.floor(Math.random() * alpha.length)];
        }
        var code = a + '' + b + '' + '' + c + '' + d;
        document.getElementById("mainCaptcha").value = code
    }

    function CheckValidCaptcha() {
        var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
        var string2 = removeSpaces(document.getElementById('txtInput').value);
        if (string1 == string2) {
            document.getElementById('success').innerHTML = "Form is validated Successfully";
            //alert("Form is validated Successfully");
            return true;
        } else {
            document.getElementById('error').innerHTML = "Please enter a valid captcha.";
            //alert("Please enter a valid captcha.");
            return false;
        }
    }

    function removeSpaces(string) {
        return string.split(' ').join('');
    }
</script>