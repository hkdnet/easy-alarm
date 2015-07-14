module.exports = alarmToDate;
function alarmToDate(obj) {
  var d = new Date();
  if(obj.date) {
    var arr = obj.date.split("-");
    obj.year = arr[0] - 0;
    obj.month = arr[1] - 0;
    obj.day = arr[2] - 0;
  }
  var date = new Date(
    obj.year || d.getFullYear(),
    obj.month - 1 || d.getMonth(),
    obj.day || d.getDay(),
    obj.hours || d.getHours() ,
    obj.minutes || 0
  );
  return date
};