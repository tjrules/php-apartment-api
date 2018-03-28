<?php

$url = 'http://rentcafe.com/rentcafeapi.aspx?requestType=apartmentavailability&APIToken=NDY5OTI%3d-XDY6KCjhwhg%3d&propertyCode=p0155985';

$result = file_get_contents($url);
var_dump(json_decode($result, true));

 ?>
