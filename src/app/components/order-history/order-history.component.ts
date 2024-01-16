import { Component, OnInit } from '@angular/core';
import { OrderHistory } from 'src/app/common/order-history';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;
  updatedQuantity: string = "";

  editEnabled: boolean = false;

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

    this.editEnabled = true;
    /** 
    let elements: any = document.querySelectorAll(".update_Quantity")
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none"
    }

    let quantityField = event.target.parentElement.children[4]
    if (quantityField.children[1].style.display == "none") {
      quantityField.children[1].style.display = "block"
      quantityField.children[0].style.display = "block"
    }**/

  }

  onQuantityChange(event:any){
    this.updatedQuantity = event.target.value;
  }

  updateQuantity(guid: string) {

    //let guid = event.target.parentElement.parentElement.children[2].innerText
    let Quantity = Number(this.updatedQuantity) ?? 0;
    console.log(guid)
    console.log(Quantity)

    this.handleOrderUpdate(guid, Quantity)

  }

  handleOrderUpdate(guid: any, quantity: any) {
    const theEmail = JSON.parse(this.storage.getItem('userEmail')!);

    // bring the updated order history back
    this.orderHistoryService.updateOrderQuantity(theEmail, guid, quantity).subscribe(response => {
      console.log('Update order response', response);

      this.editEnabled = false;
      this.updatedQuantity = "";

      this.orderHistoryList = this.orderHistoryList.map(obj => obj.orderTrackingNumber  === guid ? {...obj, totalQuantity: quantity}: obj);

    });
  }

  handleOrderDelete(orderTrackingNumber: string) {
    // bring the deleted order history back
    this.orderHistoryService.deleteOrder(orderTrackingNumber).subscribe(response => {
      console.log('Delete order response', response);

      this.orderHistoryList = this.orderHistoryList.filter(obj => obj.orderTrackingNumber  !== orderTrackingNumber);

    });
  }

}
