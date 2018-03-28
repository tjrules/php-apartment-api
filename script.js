$(document).ready(function() {
console.log('script loaded');

const handleData = (data) => {
  data.forEach(el => {
    console.log(el);
  })
}

  $.ajax({
    url: 'api.php',
    method: 'GET'
  }).then(data => {
  console.log(data);
  handleData(data);
  })

})
