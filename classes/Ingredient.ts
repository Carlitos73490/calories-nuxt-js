export default class Ingredient implements  IngredientModel{
    private _id : string;
    private _name: string;
    private _quantity: number;
    private _unit: string;

    constructor(name : string,quantity : number,unit : string) {
        this._id = crypto.randomUUID()
        this._name = name
        this._quantity = quantity
        this._unit = unit
    }


    get unit(): string {
        return this._unit;
    }

    set unit(value: string) {
        this._unit = value;
    }
    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }



}