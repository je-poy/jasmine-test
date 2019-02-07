var app = require("../src/SkNsUtil.js");

describe("SKMTI Utility script", function() {
  describe("testing utility isEmpty function", function(){
    it("checking empty string", function() {
      var emptyString = "";
      expect(app.SK.util.isEmpty(emptyString)).toBeTruthy();
    });

    it("checking empty Array", function() {
      var emptyArray = [];
      expect(app.SK.util.isEmpty(emptyArray)).toBeTruthy();
    });

    it("checking null value", function() {
      nullValue = null
      expect(app.SK.util.isEmpty(nullValue)).toBeTruthy();
    });

    it("checking null value", function() {
      nullValue = null
      expect(app.SK.util.isEmpty(nullValue)).toBeTruthy();
    });

    it("checking undefined value", function() {
      undefinedValue = undefined;
      expect(app.SK.util.isEmpty(undefinedValue)).toBeTruthy();
    });

    it("checking not empty values", function() {
      expect(app.SK.util.isEmpty("This is not a empty string")).toBeFalsy();
      expect(app.SK.util.isEmpty(0)).toBeFalsy();
    });
  });

  describe("testing utility toNumber function", function() {
    it("coverting string number into integer", function() {
      expect(app.SK.util.toNumber("2")).toBe(2);
    });
  });
});
