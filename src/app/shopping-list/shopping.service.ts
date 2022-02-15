import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class ShoppingService{

  private ingredients: Ingredient[] = [
    new Ingredient('Pasta', 1),
    new Ingredient('Tomatoes', 5)
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); //transform the array into a list of single ingredients so we can
    // push them (push can take multiple params but not arrays
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
