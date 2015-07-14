var $ = require('jquery');
var converter = require('./alarmToDate.js');
var padding = require('../../src/padding.js');

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

  var d = new Date();
  $('[name=date]').val(function() {

    var ret = d.getFullYear() + '-';
    ret += padding(d.getMonth(), '0', 2) + '-';
    ret += padding(d.getDay(), '0', 2);
    return ret;
  });
  $('[name=hours]').val(d.getHours());
  $('[name=minutes]').val(d.getMinutes());
});
