import { Component, Input } from '@angular/core';

@Component({
  selector: 'get-drunk-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.css']
})
export class IngredientCardComponent {
  @Input()
  public ingredient: string | null = '';

  @Input()
  public size: string | null = null;

  get ingredientImg(): string {
    if(this.ingredient !== null){
      if(this.size !== null){
        return `https://www.thecocktaildb.com/images/ingredients/${this.ingredient}-${this.size}.png`
      } else {
        return `https://www.thecocktaildb.com/images/ingredients/${this.ingredient}.png`
      }
    }
    return '';
  }
}
