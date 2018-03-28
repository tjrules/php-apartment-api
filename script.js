$(document).ready(function() {
console.log('script loaded');

const handleData = (data) => {
// for (i=0; i<=data.length; i++){
  data.foreach(el => {
    let newDiv = $('<div></div>');
    newDiv.text(el);
    $('#root').append(newDiv);
  })
  // });
}

  $.ajax({
    url: 'api.php',
    method: 'GET',
    dataType: 'JSON',
    success: function(data){
      $.each(data, function(d,i) {
        console.log(d);
        // let newDiv = $('<div></div>');
        // newDiv.text(el);
        // $('#root').append(newDiv);
      })
    }
  });

// ).then(data => {
//
//     console.log('this is data', data)
//   // handleData(data);
// // $.each(data), function(d,i){
// // console.log(d)
//   // let newDiv = $('<div></div>');
//   // newDiv.text(d);
//   // $('#root').append(newDiv);
// // }
//   // console.log('inside ajax data');
//
// }).catch(err => {
//   console.log('arrrghhhh', err);
// });

});
