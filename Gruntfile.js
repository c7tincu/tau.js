module.exports =
  function (grunt) {
    "use strict";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ·.· ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* Load the tasks. */
grunt.loadNpmTasks("grunt-contrib-uglify");

/* Configure the tasks. */
grunt.initConfig(
  {
    "uglify" :
      {
        "build" :
          {
            /* Generate source maps, and uglify code. */
            "options" :
              {
                "sourceMap" : "dist/tau.map.js",
                "sourceMappingURL" : "tau.map.js",
                "sourceMapRoot" : ".."
              },
            "src" : [ "dist/tau.js" ],
            "dest" : "dist/tau.min.js"
          }
      }
  }
);

/* Copy `tau.js` to `dist`. */
grunt.registerTask(
  "copy",
  function () {
    grunt.file.copy("src/tau.js", "dist/tau.js");
  }
);

/* Configure the default task. */
grunt.registerTask("default", [ "copy", "uglify" ]);



/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ .·. ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

  };
