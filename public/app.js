'use strict';

// ajax call to signin route
$('#signinForm').on('submit', function(e) {
  e.preventDefault();
  let username = $('input#username').val();
  let password = $('input#password').val();
  $.ajax({
    type: 'POST',
    url: '/signin',
    dataType: 'json',
    headers: {
      'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    },
    data: {username, password},
    success: function (data){
      Cookies.set('token', data.token);
    }
  });
});

// ajax call to secret area
$('#admin').on('submit', function(e) {
  e.preventDefault();
  $.ajax({
    type: 'GET',
    url: '/admin-area',
    headers: {
      'Authorization': 'Bearer ' + Cookies.get('token')
    },
    success: function (data){
      window.location.assign(data);
    },
    error: function(){
      alert('Only administrators are allowed here');
    }
  });
});
