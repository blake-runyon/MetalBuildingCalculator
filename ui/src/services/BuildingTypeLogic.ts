export class BuildingTypeLogic {
    GetType(front: boolean, back: boolean, side: boolean) {

        

        if(front === false && back === false && side === false) {
            return "Carport"
        } else if((front || back) && side === false) {
            return "Barn"
        } else if(side && (front || back)) {
            return "Enclosed Garage"
        } else {
            return "Carport"
        }

        return "Error: Unknown type"
    }
}
