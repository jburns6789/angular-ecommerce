import { TestBed } from '@angular/core/testing';

import { OrderHistoryService } from './order-history.service';
import { OrderHistory } from '../common/order-history';
import { HttpClient } from '@angular/common/http';
import { OrderHistoryComponent } from '../components/order-history/order-history.component';

// describe('OrderHistoryService', () => {
//   let service: OrderHistoryService;
//   beforeEach(() => {
//     //service = new OrderHistoryService();
//   });

  
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [OrderHistoryComponent, {provide:OrderHistoryService}]});
    //service = TestBed.inject(OrderHistoryService);


  });
  
  const comp = new OrderHistoryComponent(OrderHistoryService);
  comp=TestBed.inject(OrderHistoryComponent)

  it('should deleteOrder', () => {
    const deleteMethod = new delete(new OrderHistory)
    //expect(service).toBeTruthy();

    expect(result).toBeTruthy
  });

  it('should updateOrderQuantity', () => {
    pending();
    //expect(service).toBeTruthy();
  });

  

});
