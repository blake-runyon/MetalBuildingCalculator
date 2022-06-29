import { Addon } from "./Addons";
import { Size } from "./Sizes"

export interface Dealer {
    name: string,
    addons: Addon[],
    sizes: Size[]
}