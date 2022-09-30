import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { orderDetails } from '../models';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  email!: string
  orderId!: orderDetails


  constructor(private activatedRoute: ActivatedRoute, private pizzaSvc: PizzaService ) { }

  ngOnInit(): void {
    this.orderId = {
      orderId: '',
      email: ''
    }

    this.email = this.activatedRoute.snapshot.params['orderId']
    this.pizzaSvc.getOrders(this.email)
      .then(result => {
        console.info('>>>> email: ', result)
        this.orderId = result
      })
      .catch(error => {
        console.error('>>>>> error: ', error)
      })

  }

}
