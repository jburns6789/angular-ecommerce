import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderHistory } from '../common/order-history';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private orderUrl = environment.luv2shopApiUrl + '/orders';

  constructor(private httpClient: HttpClient) { }

  getOrderHistory(theEmail: string): Observable<GetResponseOrderHistory> {

    // need to buidl URL based on the customer email
    const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmailOrderByDateCreatedDesc?email=${theEmail}`;

    return this.httpClient.get<GetResponseOrderHistory>(orderHistoryUrl);
  }

  updateOrderQuantity(theEmail: string, orderTrackingNumber: any, quantity: number) {


    const orderUpdateUrl = `${this.orderUrl}/updateOrder/${orderTrackingNumber}?quantity=${quantity}`;
    console.log(orderUpdateUrl, quantity);

    return this.httpClient.put(orderUpdateUrl, {});
  }

  deleteOrder(orderTrackingNumber: any) {

    console.log("delete order method");
    const orderDeleteUrl = `${this.orderUrl}/deleteOrder/${orderTrackingNumber}`;
    console.log(orderDeleteUrl);
    return this.httpClient.delete(orderDeleteUrl);


  }

}

interface GetResponseOrderHistory {
  _embedded: {
    orders: OrderHistory[];
  }

}
