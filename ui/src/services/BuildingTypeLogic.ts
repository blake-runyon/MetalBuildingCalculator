export class BuildingTypeLogic {
    GetType(front: boolean, back: boolean, side: boolean, garageDoor: boolean, leanTo: boolean) {
        if(leanTo) {
            return "Barn"
        } else if(garageDoor && side) {
            return "Enclosed Carport"
        } else if (!side && !front && !back) {
            return "Carport"
        } else if ((side && front && back) && !garageDoor) {
            return "Workshop"
        } else {
            return "Unknown"
        }
    }
}
