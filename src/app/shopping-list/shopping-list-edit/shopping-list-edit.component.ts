import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingService} from "../shopping.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) ingredientNameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) ingredientAmountInput: ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    this.shoppingService.addIngredient(new Ingredient(
      this.ingredientNameInput.nativeElement.value,
      this.ingredientAmountInput.nativeElement.value)
    );
  }

}
