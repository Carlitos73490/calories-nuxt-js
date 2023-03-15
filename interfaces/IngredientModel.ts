interface IngredientModel {
    id : string;
    name: string;
    description : string
    unit: string;
    nutrition : {[key: string]: number};
}