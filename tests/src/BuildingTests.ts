import { BuildingTypeLogic } from '../../ui/src/services/BuildingTypeLogic';

const TypeTest = () => {
    const bt = new BuildingTypeLogic();
    console.log(bt.GetType(false, true, false))
}