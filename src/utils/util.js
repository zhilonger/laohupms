/*
  全局工具方法
  每个编写的工具方法必须要写好说明，最好有例子
  通过import {} from 'util.js'有选择导入
  当前拥有的方法有：
  1.根据时间及格式获取时间的字符串（formatDate）
  2.转化时间（transDate）=> x天前
*/
/* 1.根据时间及格式获取时间的字符串
 * @param {int} iDate 时间
 * @param {string} sFormat 格式，默认：yyyy-MM-dd HH:mm:ss
 * @return {string} 格式化后的日期字符串
 * @example formatDate(new Date(),'yyyy-MM-dd HH:mm:ss SSS');// 2017-6-6 11:11:11
 */
export const formatDate = (iDate, sFormat = "yyyy-MM-dd HH:mm:ss") => {
  if (!iDate) {
    return;
  }
  let dDate = new Date(iDate);
  let year = dDate.getFullYear(); // 年
  let month = dDate.getMonth() + 1; // 月
  if (month < 10) {
    month = "0" + month;
  }
  let date = dDate.getDate(); // 日
  if (date < 10) {
    date = "0" + date;
  }
  let hour = dDate.getHours(); // 时
  if (hour < 10) {
    hour = "0" + hour;
  }
  let minute = dDate.getMinutes(); // 分
  if (minute < 10) {
    minute = "0" + minute;
  }
  let second = dDate.getSeconds(); // 秒
  if (second < 10) {
    second = "0" + second;
  }
  let millisecond = dDate.getMilliseconds(); // 毫秒
  if (sFormat.indexOf("yyyy") >= 0) {
    sFormat = sFormat.replace("yyyy", year + "");
  }
  if (sFormat.indexOf("MM") >= 0) {
    sFormat = sFormat.replace("MM", month + "");
  }
  if (sFormat.indexOf("dd") >= 0) {
    sFormat = sFormat.replace("dd", date + "");
  }
  if (sFormat.indexOf("HH") >= 0) {
    sFormat = sFormat.replace("HH", hour + "");
  }
  if (sFormat.indexOf("mm") >= 0) {
    sFormat = sFormat.replace("mm", minute + "");
  }
  if (sFormat.indexOf("ss") >= 0) {
    sFormat = sFormat.replace("ss", second + "");
  }
  if (sFormat.indexOf("SSS") >= 0) {
    sFormat = sFormat.replace("SSS", millisecond + "");
  }
  return sFormat;
};

/* 2.转化时间
 * @param {String} str (yyyy-MM-dd HH:mm:ss SSS)
 * @return {String} 转化后的时间
 * @example transDate("2019-1-10");// 2天前
 */
export const transDate = str => {
  if (!str) return "";
  let date = new Date(str);
  // 现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  let time = new Date().getTime() - date.getTime();
  if (time < 0) {
    return "";
  } else if (time / 1000 < 30) {
    return "刚刚";
  } else if (time / 1000 < 60) {
    return parseInt(time / 1000) + "秒前";
  } else if (time / 60000 < 60) {
    return parseInt(time / 60000) + "分钟前";
  } else if (time / 3600000 < 24) {
    return parseInt(time / 3600000) + "小时前";
  } else if (time / 86400000 < 31) {
    return parseInt(time / 86400000) + "天前";
  } else if (time / 2592000000 < 12) {
    return parseInt(time / 2592000000) + "月前";
  } else {
    return parseInt(time / 31536000000) + "年前";
  }
};