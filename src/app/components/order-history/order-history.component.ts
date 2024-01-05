import { Component, OnInit } from '@angular/core';
import { OrderHistory } from 'src/app/common/order-history';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})

export class OrderHistoryComponent implements OnInit {
  [x: string]: any;


  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;

  editEnabled: any = "";

  constructor(private orderHistoryService: OrderHistoryService) { }

  ngOnInit(): void {
    this.handleOrderHistory();
  }


  /*
  deleteOrder(orderTrackingNumber: any) {
    this.orderHistoryService.deleteOrder(orderTrackingNumber)
      .subscribe(OrderHistory => {
        this.orderHistoryList //turn into a return message
      })
  }
  */


  handleOrderHistory() {
    // read users email address from browswer storage
    const theEmail = JSON.parse(this.storage.getItem('userEmail')!);

    // retrieve data from the service
    this.orderHistoryService.getOrderHistory(theEmail).subscribe(
      data => {
        this.orderHistoryList = data._embedded.orders;

      }
    );
  }

  enableUpdate(event: any) {
    let elements: any = document.querySelectorAll(".update_Quantity")
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none"
    }

    let quantityField = event.target.parentElement.children[4]
    if (quantityField.children[1].style.display == "none") {
      quantityField.children[1].style.display = "block"
      quantityField.children[0].style.display = "block"
    }

  }

  updateQuantity(event: any) {

    let guid = event.target.parentElement.parentElement.children[2].innerText
    let Quantity = event.target.parentElement.children[0].value
    console.log(guid)
    console.log(Quantity)

    this.handleOrderUpdate(guid, Quantity)

  }

  handleOrderUpdate(guid: any, quantity: any) {
    const theEmail = JSON.parse(this.storage.getItem('userEmail')!);

    // bring the updated order history back
    this.orderHistoryService.updateOrderQuantity(theEmail, guid, quantity).subscribe(
      data => {
        this.orderHistoryList = data._embedded.orders;

      }
    );
  }

  handleOrderDelete(orderTrackingNumber: any) {
    const theEmail = JSON.parse(this.storage.getItem('userEmail')!);

    // bring the deleted order history back
    this.orderHistoryService.deleteOrder(theEmail, orderTrackingNumber).subscribe(
      data => {
        this.orderHistoryList = data._embedded.orders;

      }
    );
  }

}
