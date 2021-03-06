  describe("2000:", function () {

    describe("January:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(0).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-01-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-01-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("February:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(1).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-02-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-02-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("March:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(2).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-03-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-03-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("April:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(3).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-04-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-04-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("May:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(4).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-05-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-05-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("June:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(5).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-06-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-06-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("July:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(6).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-07-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-07-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("August:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(7).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-08-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-08-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("September:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(8).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-09-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-09-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("October:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(9).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-10-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-10-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("November:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(10).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-11-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-11-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("December:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2000).setUtcMonth(11).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2000);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2000);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2000-12-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2000-12-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

  });

  describe("2013:", function () {

    describe("January:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(0).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-01-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-01-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("February:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(1).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-02-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-02-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("March:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(2).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-03-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-03-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("April:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(3).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-04-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-04-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("May:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(4).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-05-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-05-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("June:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(5).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-06-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-06-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("July:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(6).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-07-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-07-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("August:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(7).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-08-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-08-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("September:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(8).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-09-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-09-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("October:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(9).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-10-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-10-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("November:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(10).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-11-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-11-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("December:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2013).setUtcMonth(11).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2013);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2013);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2013-12-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2013-12-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

  });

  describe("2016:", function () {

    describe("January:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(0).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-01-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-01-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("February:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(1).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-02-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-02-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("March:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(2).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-03-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-03-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("April:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(3).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-04-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-04-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("May:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(4).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-05-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-05-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("June:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(5).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-06-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-06-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("July:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(6).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-07-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-07-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("August:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(7).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-08-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-08-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("September:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(8).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-09-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-09-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("October:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(9).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-10-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-10-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("November:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(10).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-11-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-11-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("December:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2016).setUtcMonth(11).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2016);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2016);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2016-12-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2016-12-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

  });

  describe("2100:", function () {

    describe("January:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(0).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(0).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(0).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(0).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(0).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(0).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(0).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(0).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-01-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-01-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("February:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(1).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(1).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(1).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(1).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(1).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(1).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(1).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(1).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-02-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-02-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("March:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(2).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(2).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(2).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(2).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(2).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(2).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(2).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(2).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-03-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-03-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("April:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(3).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(3).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(3).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(3).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(3).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(3).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(3).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(3).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-04-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-04-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("May:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(4).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(4).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(4).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(4).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(4).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(4).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(4).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(4).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-05-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-05-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("June:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(5).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(5).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(5).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(5).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(5).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(5).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(5).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(5).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-06-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-06-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("July:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(6).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(6).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(6).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(6).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(6).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(6).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(6).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(6).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-07-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-07-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("August:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(7).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(7).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(7).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(7).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(7).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(7).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(7).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(7).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-08-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-08-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("September:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(8).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(8).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(8).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(8).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(8).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(8).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(8).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(8).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-09-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-09-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("October:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(9).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(9).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(9).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(9).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(9).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(9).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(9).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(9).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-10-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-10-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("November:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(10).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(10).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(10).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(10).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(10).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(10).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(10).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(10).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-11-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-11-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

    describe("December:", function () {

      describe("0:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(0);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(0);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(0).setUtcMonth(11).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-00T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-00T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("1:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(1);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(1);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(1).setUtcMonth(11).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-01T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-01T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("28:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(28);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(28);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(28).setUtcMonth(11).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-28T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-28T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("29:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(29);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(29);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(29).setUtcMonth(11).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-29T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-29T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("30:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(30);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(30);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(30).setUtcMonth(11).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-30T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-30T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("31:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(31);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(31);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(31).setUtcMonth(11).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-31T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-31T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

      describe("32:", function () {
        /* Year → Month → Date. */
        describe("`var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(32);`:", function () {
          var tau = new Tau().setUtcYear(2100).setUtcMonth(11).setUtcDate(32);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
        /* Date → Month → Year. */
        describe("`var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2100);`:", function () {
          var tau = new Tau().setUtcDate(32).setUtcMonth(11).setUtcYear(2100);
          it("… should result in `tau.getUtcIsoString()` being equal to `\"2100-12-32T00:00:00.000Z\"`.", function () {
            assert.strictEqual(tau.getUtcIsoString(), "2100-12-32T00:00:00.000Z");
          });
          it("… should result in `tau.isValid()` being `true`.", function () {
            assert.strictEqual(tau.isValid(), true);
          });
        });
      });

    });

  });

