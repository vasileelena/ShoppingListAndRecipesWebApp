import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingService} from "../../shopping-list/shopping.service";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe : Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  addToShoppingList(){
    this.recipeService.addRecipeIngredientsToList(this.recipe.ingredients);
  }
}
