<?php

$url = 'http://rentcafe.com/rentcafeapi.aspx?requestType=apartmentavailability&APIToken=NDY5OTI%3d-XDY6KCjhwhg%3d&propertyCode=p0155985';
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: script.js, index.php');
$result = file_get_contents($url);
echo json_encode($result);
// var_dump(json_encode($result, true));
// print_r(result)
// var_dump(json_decode($result, true));

 ?>
