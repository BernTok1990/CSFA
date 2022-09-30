// Implement the methods in PizzaService for Task 3
// Add appropriate parameter and return type 

import { Injectable } from "@angular/core";
import { firstValueFrom, lastValueFrom } from "rxjs";
import { orderDetails, Orders } from "./models";
import { HttpClient, HttpHeaders, ɵHttpInterceptingHandler } from "@angular/common/http";


@Injectable()
export class PizzaService {

  constructor(private http: HttpClient) { }

  // POST /api/order
  // Add any required parameters or return type
  /* add any required parameters */
  createOrder(newOrder: Orders) { 

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

      return lastValueFrom(
        this.http.post<Orders>('/api/order', headers)
      )
    }

  // GET /api/order/<email>/all
  // Add any required parameters or return type
  getOrders(email: string): Promise<orderDetails> { 
    return firstValueFrom(
      this.http.get<orderDetails>('/api/order/${email}')
    )
  }

}
