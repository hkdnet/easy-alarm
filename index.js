var CronJob = require('cron').CronJob;
var notifier = require('node-notifier');
var converter = require('./src/alarmToDate.js');

var obj = require('./alarms.json');

obj.alarms.map(function(obj) {
  obj.limit = converter(obj);
  return obj;
}).sort(function(o1, o2) {
  return o1.limit - o2.limit;
}).forEach(function (obj) {
  var limit = obj.limit;
  limit.setSeconds(obj.id % 60);
  var func = function () {
    notifier.notify({
      'title': obj.title || "",
      'message': obj.msg || ""
    });
  };
  var job = new CronJob(limit, func, null, true);
});
