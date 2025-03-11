import { getJsonData } from "./common";

export function getStocks() { 
    return getJsonData('/stocks');
}