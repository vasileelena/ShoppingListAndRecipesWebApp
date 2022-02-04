import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Pasta', 1),
    new Ingredient('Tomatoes', 5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
