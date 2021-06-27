function checkSpam(str) {
  return str.toLowerCase().includes('1xbet') || str.toLowerCase().includes('xxx');
}

alert(checkSpam('1XbeT now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam('innocent rabbit'));

