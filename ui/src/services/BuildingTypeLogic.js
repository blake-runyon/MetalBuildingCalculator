"use strict";
exports.__esModule = true;
exports.BuildingTypeLogic = void 0;
var BuildingTypeLogic = /** @class */ (function () {
    function BuildingTypeLogic() {
    }
    BuildingTypeLogic.prototype.GetType = function (front, back, side) {
        if ((front || back) && !side) {
            return "Barn";
        }
        else if (side && (front || back)) {
            return "Enclosed Garage";
        }
        return "Error: Unknown type";
    };
    return BuildingTypeLogic;
}());
exports.BuildingTypeLogic = BuildingTypeLogic;
