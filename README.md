[tau.js](https://github.com/CristianTincu/tau.js)
===============================================================================

+ [§1. Synopsis](#1-synopsis)
+ [§2. Installation Instructions](#2-installation-instructions)
+ [§3. Build & Test Instructions](#3-build--test-instructions)
+ [§4. Quick API Reference](#4-quick-api-reference)
+ [§5. Support](#5-support)
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

…



§5. Support
-------------------------------------------------------------------------------

…



§6. Change Log
-------------------------------------------------------------------------------

…



§7. Credits
-------------------------------------------------------------------------------

+ **Cristian Tincu** (@CristianTincu on GitHub and Twitter)



§8. License
-------------------------------------------------------------------------------

I made tau.js as an exercise, and as an experiment. You’re free to use it in
your own exercises, experiments, or projects, whether they’re “closed” or
“open”, commercial or non-commercial, “good” or “evil”, subject to the terms of
the MIT License<sup>[3](#3)</sup>.



§9. Notes
-------------------------------------------------------------------------------

### 1

See [Tau on Wikipedia](http://en.wikipedia.org/wiki/Tau).

### 2

See [Moment.js](http://momentjs.com/) and [XDate](http://arshaw.com/xdate/).

### 3

See
[LICENSE.md](https://github.com/CristianTincu/tau.js/blob/master/LICENSE.md).



[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/b99133b870004818d05d096cf9010cbc "githalytics.com")](http://githalytics.com/CristianTincu/tau.js)
