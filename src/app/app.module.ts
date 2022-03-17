import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from "./shopping-list/shopping-list-edit/shopping-list-edit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownDirective} from "./shared/dropdown.directive";
import {ShoppingService} from "./shopping-list/shopping.service";
import {AppRoutingModule} from "./app-routing.module";
import { StartComponent } from './recipes/start/start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {RecipeService} from "./recipes/recipe.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    StartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
