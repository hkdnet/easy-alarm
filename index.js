var CronJob = require('cron').CronJob;
var notifier = require('node-notifier');
var converter = require('./public/scripts/alarmToDate.js');

var obj = require('./alarms.json');

obj.alarms.forEach(function (obj) {
  var limit = converter(obj);
  var func = function () {
    notifier.notify({
      'title': obj.title || "",
      'message': obj.msg || ""
    });
  };
  var job = new CronJob(limit, func, null, true);
});
