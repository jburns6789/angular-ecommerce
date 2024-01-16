import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrderHistoryService } from './order-history.service';
import { OrderHistory } from '../common/order-history';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrderHistoryComponent } from '../components/order-history/order-history.component';

describe('OrderHistoryService', () => {
  let service: OrderHistoryService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports:[
      HttpClientModule, HttpClientTestingModule
      ]
    });
    service = TestBed.inject(OrderHistoryService);

    testingController = TestBed.inject(HttpTestingController);
  });

  it('should get customer', () => {
    
  });

  it('should updateOrderQuantity', () => {
    //pending();
    //expect(service).toBeTruthy();
  });



});
