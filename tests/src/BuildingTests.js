"use strict";
exports.__esModule = true;
var BuildingTypeLogic_1 = require("../../ui/src/services/BuildingTypeLogic");
var TypeTest = function () {
    var bt = new BuildingTypeLogic_1.BuildingTypeLogic();
    console.log(bt.GetType(false, true, false));
};

TypeTest()
