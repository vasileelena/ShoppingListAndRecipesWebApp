import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingService} from "../shopping-list/shopping.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService{

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spagetti Carbonarra',
      'Easy and fast recipe for spagetti carbonarra',
      'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-articleLarge-v2.jpg',
      [
        new Ingredient('Spagetti', 200),
        new Ingredient('Cream', 100),
        new Ingredient('Bacon', 30)
      ]),
    new Recipe(
      'Burger',
      'Make your own delicious home made burger!',
      'https://emeraldfood.ro/wp-content/uploads/2019/10/burger-emerald-food1000.jpg',
      [
        new Ingredient('Patty', 1),
        new Ingredient('Buns', 1),
        new Ingredient('Fires', 200)
      ])
  ];

  constructor(private shoppingService: ShoppingService) {
  }

  getRecipes() {
    return this.recipes.slice(); // returning a copy of the recipes array
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipeIngredientsToList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    console.log(newRecipe)
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
