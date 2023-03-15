export default class Analyse implements AnalyseModel{
    ingredients: number;
    recipeId: string;
    sum: any;

    constructor(recipeId : string,ingredients : IngredientQuantityAssociationModel[] ) {
        this.ingredients = 0
        this.recipeId = recipeId
        this.sum = new Object()

        for (const ingredient of ingredients) {
            this.ingredients += 1 * ingredient.quantity

            for (const [key , value]  of  Object.entries(ingredient.nutrition)) {
                if(this.sum[key] === undefined){
                    this.sum[key] = value * ingredient.quantity
                } else{
                    this.sum[key] += value * ingredient.quantity
                }
            }
        }

    }


}