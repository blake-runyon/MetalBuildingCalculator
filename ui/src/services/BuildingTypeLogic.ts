export class BuildingTypeLogic {
    GetType(front: boolean, back: boolean, side: boolean) {
        if((front || back) && !side) {
            return "Barn"
        } else if(side && (front || back)) {
            return "Enclosed Garage"
        }

        return "Error: Unknown type"
    }
}