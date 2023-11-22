export interface IngredientResponse {
  drinks: IngredientDrink[];
}

export interface IngredientDrink{
  strDrink:      string;
  strDrinkThumb: string;
  idDrink:       string;
}
