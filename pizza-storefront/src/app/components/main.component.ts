import { Component, OnInit, Output } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Orders } from '../models';

const SIZES: string[] = [
  "Personal - 6 inches",
  "Regular - 9 inches",
  "Large - 12 inches",
  "Extra Large - 15 inches"
]

const PizzaToppings: string[] = [
    'chicken', 'seafood', 'beef', 'vegetables',
    'cheese', 'arugula', 'pineapple'
]

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output()
  onNewOrder = new Subject<Orders>()

  pizzaSize = SIZES[0]

  form!: FormGroup
  // lineItems!: FormArray
  
  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.createOrder()
  }

  updateSize(size: string) {
    this.pizzaSize = SIZES[parseInt(size)]
  }

  private createOrder(){
    // this.lineItems = this.fb.array([])
    return this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      size: this.fb.control<number>(6),
      base: this.fb.control('', [Validators.required]),
      sauce: this.fb.control('', [Validators.required]),
      topping: this.fb.control<string>(''),
      // lineitems: this.lineItems,
      comments: this.fb.control<string>('')

    })
  }

  placeOrder(){
    const order: Orders = this.form.value as Orders
    this.form = this.createOrder()
    console.info('>>>> order: ', order)
    this.onNewOrder.next(order)
    
  }


}
