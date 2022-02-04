import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() addIngredientEvent = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', {static: true}) ingredientNameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountNameInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(){
    this.addIngredientEvent.emit({
      name: this.ingredientNameInput.nativeElement.value,
      amount: parseInt(this.amountNameInput.nativeElement.value)});
  }

}
