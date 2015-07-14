var $ = require('jquery');
var converter = require('./alarmToDate.js');

$(function() {
  $.ajax( {
    type: "GET",
    url: '/alarms/',
    dataType: "JSON"
  }, 'JSON').done(function(arr) {
    var $list = $('#alarm-list');
    var today = new Date();
    $list.append(function() {
      var $lis = $.map(arr, function(e) {
        var target = converter(e);
        if(target > today) {
          var text = e.date + " " + e.hours + ":" + e.minutes + " [" + e.title + "] " + e.msg;
          return $('<li>').text(text);
        } else {
          $.ajax({
            type: "DELETE",
            url: "/alarms/" + e.id
          });
        }
      });
      return $lis;
    });
  });
});
