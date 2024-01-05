import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  updateOrderQuantity(theEmail: string, orderTrackingNumber: any, quantity: any) {
    const orderUpdateUrl = `${this.orderUrl}/updateOrder?orderId=${orderTrackingNumber}&email=${theEmail}&quantity=${quantity}`;

    return this.httpClient.get<GetResponseOrderHistory>(orderUpdateUrl);
  }

  deleteOrder(theEmail: string, orderTrackingNumber: any) {
    const orderDeleteUrl = `${this.orderUrl}/deleteOrder?orderId=${orderTrackingNumber}&email=${theEmail}`;

    return this.httpClient.get<GetResponseOrderHistory>(orderDeleteUrl);
  }

}

interface GetResponseOrderHistory {
  _embedded: {
    orders: OrderHistory[];
  }

}

