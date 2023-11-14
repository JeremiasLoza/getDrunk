import { Component } from '@angular/core';

@Component({
  selector: 'get-drunk-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent {
  public ingredients: string[] = ['Vodka', 'Gin', 'Rum', 'Tequila']
}
