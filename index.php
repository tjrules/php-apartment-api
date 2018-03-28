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
    //initialize curl
    $data = curl_init();

    //set url
    curl_setopt($data, CURLOPT_URL, "http://rentcafe.com/rentcafeapi.aspx?requestType=apartmentavailability&APIToken=NDY5OTI%3d-XDY6KCjhwhg%3d&propertyCode=p0155985");
    print_r($data, true);
    // return transfer as a string
    // curl_setopt($data, CURL_OPTRETURNTRANSFER, 1);

    // contains output string
    // $output = curl_exec($data);

    //close curl to free up resources
    curl_close($data)


   ?>
</body>
</html>
