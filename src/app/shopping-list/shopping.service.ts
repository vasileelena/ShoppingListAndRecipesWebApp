import {Ingredient} from "../shared/ingredient.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class ShoppingService{

  private ingredients: Ingredient[] = [
    new Ingredient('Pasta', 1),
    new Ingredient('Tomatoes', 5)
  ];

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); //transform the array into a list of single ingredients so we can
    // push them (push can take multiple params but not arrays
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
