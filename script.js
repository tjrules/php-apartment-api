$(document).ready(() => {

const handleData = data => {
  data.foreach(el => {
    let newDiv = $('<div>Hi</div>');
    newDiv.text(`
    <ul>
      <li>${el.apartmentName}</li>
      <li>${el.numBeds}</li>
      <li>${el.numBaths}</li>
      <li>${el.floorPlan}</li>
      <li>${el.apartmentName}</li>
      <li>${el.maxRent}</li>
      <li>${el.minRent}</li>
      <li>${el.Link}</li>
    </ul>`
  );
    $('#root').append(newDiv);
  })

}

  $.ajax({
    url: 'api.php',
    method: 'GET',
    dataType: 'JSON',
  })
  .then(data => {
    // data.map(el=>{
    $.each(data, function(d,i){
      let $tr = $('<tr>').append(
        $('<td>').text(i.ApartmentName),
        $('<td>').text(i.Beds),
        $('<td>').text(i.Baths),
        $('<td>').text(i.FloorplanName),
        $('<td>').text(i.MinimumRent),
        $('<td>').text(i.MaximumRent),
        $(`<a href=${i.ApplyOnlineURL} target='_blank'>`).text('Apply Now!'),
      )
      $('#table').append($tr)
    });
      // let aptName = $(el.ApartmentName);
      // let beds = $(el.Beds);
      // let baths = $(el.Baths);
      // let floor = $(el.FloorplanName);
      // let max = $(el.MaximumRent);
      // let min = $(el.MinimumRent);
      // let link = $(el.ApplyOnlineURL);

      // let rows = $('<tr>' + '<td>' + aptName + '</td>'  );



      // let apartment = $('<div><ul></ul></div>');


      // newDiv.text(
      //   <li>${el.ApartmentName}</li>
      //   <li>${el.Beds}</li>
      //   <li>${el.Baths}</li>
      //   <li>${el.FloorplanName}</li>
      //   <li>${el.MaximumRent}</li>
      //   <li>${el.MinimumRent}</li>
      //   <li>${el.ApplyOnlineURL}</li>
      // )
      //   $('#root').append(apartment);

  }).catch(err=>{
      console.log('error',err);
    });

});
