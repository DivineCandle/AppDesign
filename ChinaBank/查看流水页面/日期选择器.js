function showDatePicker() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  document.getElementById('date').max = today;
  document.getElementById('datePicker').style.display = 'block';
}

function setDate() {
  var date = new Date(document.getElementById('date').value);
  //console.log(document.getElementById('date').value);
  // console.log(typeof (document.getElementById('date').value));
  if (document.getElementById('date').value !== '') {
    document.getElementById('year').value = date.getFullYear();
    document.getElementById('month').value = date.getMonth() + 1;
    document.getElementById('day').value = date.getDate();
  }
  // document.getElementById('datePicker').style.display = 'none';
}

function showDatePicker1() {
  var today1 = new Date();
  var dd1 = String(today1.getDate()).padStart(2, '0');
  var mm1 = String(today1.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy1 = today1.getFullYear();

  today1 = yyyy1 + '-' + mm1 + '-' + dd1;
  document.getElementById('date1').max = today1;
  document.getElementById('datePicker1').style.display = 'block';
}

function setDate1() {
  var date1 = new Date(document.getElementById('date1').value);
  if (document.getElementById('date1').value !== '') {
    document.getElementById('year1').value = date1.getFullYear();
    document.getElementById('month1').value = date1.getMonth() + 1;
    document.getElementById('day1').value = date1.getDate();
  }
  // document.getElementById('datePicker1').style.display = 'none';
}