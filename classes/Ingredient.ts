import * as crypto from 'crypto';
export default class Ingredient implements IngredientModel{

    id : string;
    name: string;
    description : string;
    unit: string;
    nutrition : {[key: string]: number}

    constructor(name : string,quantity : number,description : string,unit : string, nutrition : {[key: string]: number}) {
        this.id = crypto.randomUUID()
        this.name = name
        this.unit = unit
        this.description = description
        this.nutrition = nutrition
    }

}