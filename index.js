setInterval(() => {
  var standard_time = new Date();
  var htime = standard_time.getHours();
  var mtime = standard_time.getMinutes();
  var stime = standard_time.getSeconds();
  var hrotate = 30 * htime + mtime / 2;
  var mrotate = 6 * mtime;
  var srotate = 6 * stime;

  hours.style.transform = `rotate(${hrotate}deg)`;
  min.style.transform = `rotate(${mrotate}deg)`;
  sec.style.transform = `rotate(${srotate}deg)`;
}, 1000);
