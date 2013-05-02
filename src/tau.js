(
  function (context) {
    "use strict";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var api;
var VERSION = "0.0.1";
var ctorImpl;
var getUtcIsoStringImpl;
var int;
var pad;
var getMaxUtcDateImpl;
var getUtcYearImpl;
var setUtcYearImpl;
var getUtcMonthImpl;
var setUtcMonthImpl;
var getUtcDateImpl;
var setUtcDateImpl;
var getUtcHoursImpl;
var setUtcHoursImpl;
var getUtcMinutesImpl;
var setUtcMinutesImpl;
var getUtcSecondsImpl;
var setUtcSecondsImpl;
var getUtcMillisecondsImpl;
var setUtcMillisecondsImpl;
var isValidImpl;
var P_OBJECT = Object.prototype;
var prevTau;

ctorImpl =
  function () {
    this[0] = "1970-01-01T00:00:000Z";
  };

getUtcIsoStringImpl =
  function () {
    return this[0];
  };

int =
  function (value) {
    var result;

    result = value;
    if (P_OBJECT.toString.call(result) !== "[object Number]") {
      result = Number(result);
    }
    result !== result && (result = 0);
    result = Math.floor(result);
    return result;
  };

pad =
  function (n, l) {
    var result;

    l || (l = 2);
    result = "" + n;
    while (result.length !== l) {
      result = "0" + result;
    }
    return result;
  };

getMaxUtcDateImpl =
  function (year, month) {
    /* January, March, May, July, August, October, or December. */
    if (
      month === 0 || month === 2 || month === 4 ||
      month === 6 || month === 7 || month === 9 ||
      month === 11
    ) {
      return 31;
    }
    /* April, June, September, or November. */
    else if (
      month === 3 || month === 5 || month === 8 ||
      month === 10
    ) {
      return 30;
    }
    /* February, leap year. */
    else if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) {
      return 29;
    }
    /* February, common year. */
    else {
      return 28;
    }
  };

getUtcYearImpl =
  function () {
    return + this[0].slice(0, 4);
  };

setUtcYearImpl =
  function (year) {
    year = int(year);
    /* Inferior overflow. */
    while (year < 0) {
      year += 10000;
    }
    /* Superior overflow. */
    while (year > 9999) {
      year -= 10000;
    }
    this[0] = pad(year, 4) + this[0].slice(4);
    return this;
  };

getUtcMonthImpl =
  function () {
    return + this[0].slice(5, 7) - 1;
  };

setUtcMonthImpl =
  function (month) {
    var delta;
    var year;

    month = int(month);
    delta = 0;
    /* Inferior overflow. */
    while (month < 0)  {
      -- delta;
      month += 12;
    }
    /* Superior overflow. */
    while (month > 11) {
      ++ delta;
      month -= 12;
    }
    year = this.getUtcYear() + delta;
    delta && this.setUtcYear(year);
    this[0] = this[0].slice(0, 5) + pad(month + 1) + this[0].slice(7);
    return this;
  };

getUtcDateImpl =
  function () {
    return + this[0].slice(8, 10);
  };

setUtcDateImpl =
  function (date) {
    var maxDate;

    date = int(date);
    /* Inferior overflow. */
    while (date < 1) {
      this.setUtcMonth(this.getUtcMonth() - 1);
      date += api.getMaxUtcDate(this.getUtcYear(), this.getUtcMonth());
    }
    /* Superior overflow. */
    maxDate = api.getMaxUtcDate(this.getUtcYear(), this.getUtcMonth());
    while (date > maxDate) {
      date -= maxDate;
      this.setUtcMonth(this.getUtcMonth() + 1);
      maxDate = api.getMaxUtcDate(this.getUtcYear(), this.getUtcMonth());
    }
    this[0] = this[0].slice(0, 8) + pad(date) + this[0].slice(10);
    return this;
  };

getUtcHoursImpl =
  function () {
    return + this[0].slice(11, 13);
  };

setUtcHoursImpl =
  function (hours) {
    var delta = Math.floor(hours / 24);
    var date = this.getUtcDate() + delta;

    this[0] = this[0].slice(0, 11) + pad(hours % 24) + this[0].slice(13);
    delta && this.setUtcDate(date);
    return this;
  };

getUtcMinutesImpl =
  function () {
    return + this[0].slice(14, 16);
  };

setUtcMinutesImpl =
  function (minutes) {
    var delta = Math.floor(minutes / 60);
    var hours = this.getUtcHours() + delta;

    this[0] = this[0].slice(0, 14) + pad(minutes % 24) + this[0].slice(16);
    delta && this.setUtcHours(hours);
    return this;
  };

getUtcSecondsImpl =
  function () {
    return + this[0].slice(17, 19);
  };

setUtcSecondsImpl =
  function (seconds) {
    var delta = Math.floor(seconds / 60);
    var minutes = this.getUtcMinutes() + delta;

    this[0] = this[0].slice(0, 17) + pad(seconds % 24) + this[0].slice(19);
    delta && this.setUtcMinutes(minutes);
    return this;
  };

getUtcMillisecondsImpl =
  function () {
    return + this[0].slice(20, 23);
  };

setUtcMillisecondsImpl =
  function (milliseconds) {
    var delta = Math.floor(milliseconds / 1000);
    var seconds = this.getUtcSeconds() + delta;

    this[0] =
      this[0].slice(0, 20) + pad(milliseconds % 1000, 3) + this[0].slice(23);
    delta && this.setUtcSeconds(seconds);
    return this;
  };

isValidImpl =
  function () {
    if (
      P_OBJECT.toString.call(this[0]) !== "[object String]" ||
      ! this[0].match(/(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{3})Z/) ||
      this[0].length !== 21
    ) {
      return false;
    }
    if (
      this.getUtcMonth() > 11 ||
      this.getUtcDate() >
        api.getMaxUtcDate(this.getUtcYear(), this.getUtcMonth()) ||
      this.getUtcHours() > 23 ||
      this.getUtcMinutes() > 59 ||
      this.getUtcSeconds() > 59
    ) {
      return false;
    }
    return true;
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

api = ctorImpl;

api.prototype.getUtcIsoString = getUtcIsoStringImpl;

api.getMaxUtcDate = getMaxUtcDateImpl;

api.prototype.getUtcYear = getUtcYearImpl;
api.prototype.setUtcYear = setUtcYearImpl;
api.prototype.getUtcMonth = getUtcMonthImpl;
api.prototype.setUtcMonth = setUtcMonthImpl;
api.prototype.getUtcDate = getUtcDateImpl;
api.prototype.setUtcDate = setUtcDateImpl;
api.prototype.getUtcHours = getUtcHoursImpl;
api.prototype.setUtcHours = setUtcHoursImpl;
api.prototype.getUtcMinutes = getUtcMinutesImpl;
api.prototype.setUtcMinutes = setUtcMinutesImpl;
api.prototype.getUtcSeconds = getUtcSecondsImpl;
api.prototype.setUtcSeconds = setUtcSecondsImpl;
api.prototype.getUtcMilliseconds = getUtcMillisecondsImpl;
api.prototype.setUtcMilliseconds = setUtcMillisecondsImpl;
api.prototype.isValid = isValidImpl;

api.VERSION = VERSION;

/* Probably CommonJS. */
if (typeof exports !== "undefined") {
  /* Probably Node.js. */
  if (typeof module !== "undefined" && module.exports) {
    exports = module.exports = api;
  }
  exports["Tau"] = api;
}
/* Probably a browser. */
else {
  prevTau = context["Tau"];
  context["Tau"] = api;
  api.noConflict =
    function () {
      context["Tau"] = prevTau;
      return api;
    };
}



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  }
)(this);
