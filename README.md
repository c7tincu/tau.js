[tau.js](https://github.com/CristianTincu/tau.js)
===============================================================================

+ [§1. Synopsis](#1-synopsis)
+ [§2. Installation Instructions](#2-installation-instructions)
+ [§3. Build & Test Instructions](#3-build--test-instructions)
+ [§4. Quick API Reference](#4-quick-api-reference)
+ [§5. Support](#5-support3)
+ [§6. Change Log](#6-change-log)
+ [§7. Credits](#7-credits)
+ [§8. License](#8-license)
+ [§9. Notes](#9-notes)



§1. Synopsis
-------------------------------------------------------------------------------

Anyone who’s been working long enough with JavaScript’s `Date` object would
probably agree that it’s badly designed and buggy. I’d rather not dive into
the messy details, except where absolutely needed, in the
[§4. Quick API Reference](#4-quick-api-reference) section.

tau.js<sup>[1](#1)</sup> is a JavaScript date library, that I’ve built so that
I could scratch this itch.

It’s minimal: It solely supports UTC dates, for now, and the only formatting
option is the ISO 8601 extended format. tau.js is **not** a wrapper around the
native `Date`, and here’s the point where it diverges from other established
solutions<sup>[2](#2)</sup>. This means that the date mutation functions,
otherwise provided by `Date`, had to be re-written from scratch and thoroughly
tested. It also means the library is notably slower than alternatives, for now.



§2. Installation Instructions
-------------------------------------------------------------------------------

### In browsers:

Download
[`dist/tau.min.js`](https://raw.github.com/CristianTincu/tau.js/master/dist/tau.min.js).<br/>
**Or, with Bower:**
Fire up a terminal window, and type the following command:

```bash
bower install tau.js
```
Then:

```html
<script src="path/to/tau.js"></script>
```

### In Node.js:

Fire up a terminal window, and type the following command:

```bash
npm install tau.js
```
Then:

```javascript
var Tau = require("path/to/tau.js");
```



§3. Build & Test Instructions
-------------------------------------------------------------------------------

### In order to build:

Fire up a terminal window, and type the following commands:

```bash
git clone https://github.com/CristianTincu/tau.js.git
cd tau.js
npm install
npm run-script grunt
```

### In order to run the tests:

First, build the library (see above).

Then, if you want to run the tests server-side, with Node.js, fire up a
terminal window, and type the following command:

```bash
npm run-script test
```

If you want to run the tests client-side, open `test/test-runner.html` in
whatever browser you want to test against.



§4. Quick API Reference
-------------------------------------------------------------------------------

tau.js exposes the `Tau` pseudo-class to the environment on “load”, if the
environment is a browser, or on “require”, if the environment supports CommonJS
modules (e.g. Node.js).

+ `Tau()`

Unlike the native `Date`, tau.js provides one humble constructor.<br/>
Calling the constructor simply creates instances referencing the Unix epoch
(00:00:00 UTC on the 1<sup>st</sup> of January, 1970).

+ `Tau#setUtcYear()`
+ `Tau#setUtcMonth()`
+ `Tau#setUtcDate()`
+ `Tau#setUtcHours()`
+ `Tau#setUtcMinutes()`
+ `Tau#setUtcSeconds()`
+ `Tau#setUtcMilliseconds()`

These methods allow you to manipulate `Tau` instances, with respect to UTC.

Unlike native `Date`’s equivalent methods, they support “chaining”.<br/>
This apparently minor detail can compensate—to a certain degree—the
constructor’s intentional lack of flexibility:

```javascript
var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(3);
```

There’s one more important point, concerning these methods, that you should be
aware of, when working with tau.js:

```javascript
//  Create a reference to the 30th of January, 2013.
var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(30);
//  Would you do something like this with the native `Date`,
//  you’ll move the reference to the 2nd of March:
tau.setUtcMonth(1);
//  tau.js takes a different approach. It’s not “upwards lenient”.
//  It’ll move the reference to the 30th of February, which, of course,
//  is an invalid date. Keep on reading…
```



§5. Support<sup>[3](#3)</sup>
-------------------------------------------------------------------------------

I’ve tested tau.js on the following environments:

+ **Chrome “latest” (26.0.1410.63)**

+ **Chrome 4**

+ **Firefox “latest” (20.0.1)**

+ **Firefox 3.6**

+ **IE 10**

+ **IE 8**

+ **IE 7**

+ **IE 6**

+ **Safari “latest” (6.0.4)** on OS X

+ **Safari “latest” (5.1.7)** on Windows

+ **Mobile Safari on iOS 6**

+ **Opera “latest” (12.15)**

+ **Node.js “latest” (0.10.5)**



§6. Change Log
-------------------------------------------------------------------------------

+ **0.1.0 (2013-05-14)**

Initial development release of tau.js.



§7. Credits
-------------------------------------------------------------------------------

+ **Cristian Tincu** (@CristianTincu on GitHub and Twitter)



§8. License
-------------------------------------------------------------------------------

I made tau.js as an exercise, and as an experiment. You’re free to use it in
your own exercises, experiments, or projects, whether they’re “closed” or
“open”, commercial or non-commercial, “good” or “evil”, subject to the terms of
the MIT License<sup>[4](#4)</sup>.



§9. Notes
-------------------------------------------------------------------------------

### 1

See [Tau on Wikipedia](http://en.wikipedia.org/wiki/Tau).

### 2

See [Moment.js](http://momentjs.com/) and [XDate](http://arshaw.com/xdate/).

### 3

“Latest” means the current stable version of the respective environment, at the
time I’m writing this text.

### 4

See
[LICENSE.md](https://github.com/CristianTincu/tau.js/blob/master/LICENSE.md).



[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/b99133b870004818d05d096cf9010cbc "githalytics.com")](http://githalytics.com/CristianTincu/tau.js)
