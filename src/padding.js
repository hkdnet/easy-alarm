module.exports = padding;
function padding(val, pad, len, isLeft) {
  val = val.toString();
  var strLen = val.length;
  var ret = "";
  var i = 0;
  var limit = len - strLen;
  for(i = 0; i < limit; i++) {
    ret += pad.toString();
  }
  return ret + val;
}
