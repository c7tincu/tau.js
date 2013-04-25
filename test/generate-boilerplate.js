#!/usr/bin/env node
"use strict";

var fs = require("fs");

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

var boilerplate;
var years;
var months;
var days;
var i;
var j;
var k;
var li;
var lj;
var lk;
var pad;

pad =
  function (n) {
    return (n > 9 ? "" : "0") + n;
  };



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

years = [ 2000, 2013, 2016, 2100 ];
months =
  [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
days = [ 0, 1, 28, 29, 30, 31, 32 ];

/* Fucking ugly boilerplate generator code is fucking ugly. */
boilerplate = "";
for (i = 0, li = years.length; i < li; ++ i) {
  boilerplate +=
    "  describe(\"" + years[i] + ":\", function () {\n" +
    "\n";
  for (j = 0, lj = months.length; j < lj; ++ j) {
    boilerplate +=
      "    describe(\"" + months[j] + ":\", function () {\n" +
      "\n";
    for (k = 0, lk = days.length; k < lk; ++ k) {
      boilerplate +=
        "      describe(\"" + days[k] + ":\", function () {\n" +
        "        /* Year → Month → Date. */\n" +
        "        describe(\"`var tau = new Tau().setUtcYear(" + years[i] +
          ").setUtcMonth(" + j + ").setUtcDate(" + days[k] +
          ");`:\", function () {\n" +
        "          var tau = new Tau().setUtcYear(" + years[i] +
          ").setUtcMonth(" + j + ").setUtcDate(" + days[k] + ");\n" +
        "          it(\"… should result in `tau.getUtcIsoString()` being" +
          " equal to `\\\"" + years[i] + "-" + pad(j + 1) + "-" +
          pad(days[k]) + "T00:00:000Z\\\"`.\", function () {\n" +
        "            assert.strictEqual(tau.getUtcIsoString(), \"" + years[i] +
          "-" + pad(j + 1) + "-" + pad(days[k]) + "T00:00:000Z\");\n" +
        "          });\n" +
        "          it(\"… should result in `tau.isValid()` being `true`.\", " +
          "function () {\n" +
        "            assert.strictEqual(tau.isValid(), true);\n" +
        "          });\n" +
        "        });\n" +
        "        /* Date → Month → Year. */\n" +
        "        describe(\"`var tau = new Tau().setUtcDate(" + days[k] +
          ").setUtcMonth(" + j + ").setUtcYear(" + years[i] +
          ");`:\", function () {\n" +
        "          var tau = new Tau().setUtcDate(" + days[k] +
          ").setUtcMonth(" + j + ").setUtcYear(" + years[i] + ");\n" +
        "          it(\"… should result in `tau.getUtcIsoString()` being" +
          " equal to `\\\"" + years[i] + "-" + pad(j + 1) + "-" +
          pad(days[k]) + "T00:00:000Z\\\"`.\", function () {\n" +
        "            assert.strictEqual(tau.getUtcIsoString(), \"" + years[i] +
          "-" + pad(j + 1) + "-" + pad(days[k]) + "T00:00:000Z\");\n" +
        "          });\n" +
        "          it(\"… should result in `tau.isValid()` being `true`.\", " +
          "function () {\n" +
        "            assert.strictEqual(tau.isValid(), true);\n" +
        "          });\n" +
        "        });\n";
      boilerplate +=
        "      });\n" +
        "\n";
    }
    boilerplate +=
      "    });\n" +
      "\n";
  }
  boilerplate +=
    "  });\n" +
    "\n";
}

fs.writeFile("boilerplate.js", boilerplate);



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
