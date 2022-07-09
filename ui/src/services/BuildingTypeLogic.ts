// import axios
import axios from 'axios';
export class BuildingTypeLogic {
    GetType(front: boolean, back: boolean, side: boolean, garageDoor: boolean, leanTo: boolean) {
        return axios.post('http://localhost:8080/building/', { front, back, side, garageDoor, leanTo }).then(d => d.data);
    }
}
