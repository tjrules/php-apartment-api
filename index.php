<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>Hello from the Apartment app</h1>

  <?php
    // //initialize curl
    // $ch = curl_init();
    $url = 'http://rentcafe.com/rentcafeapi.aspx?requestType=apartmentavailability&APIToken=NDY5OTI%3d-XDY6KCjhwhg%3d&propertyCode=p0155985';

    $result = file_get_contents($url);
    var_dump($result, true);

    //
    // // disable ssl
    // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    //
    // // return response
    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //
    // //set url
    // curl_setopt($ch, CURLOPT_URL, $url);
    //
    // // execute
    // $result = curl_exec($ch);
    //
    // // close curl
    // curl_close($ch)
    // print_r($ch, true);
    // return transfer as a string
    // curl_setopt($ch, CURL_OPTRETURNTRANSFER, 1);

    // contains output string
    //

    //close curl to free up resources



   ?>
</body>
</html>
