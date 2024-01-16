import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { PRODUCT_SERVICE_DATA } from './mock';

describe('ProductService', () => {
  let service: ProductService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports:[
      HttpClientModule, HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ProductService);

    testingController = TestBed.inject(HttpTestingController);
  });

  it('should get products', () => {
    service.getProductCategories().subscribe(
      (data:any) => {
        expect(data).toBeTruthy()
    })
    //const mockReq = testingController.expectOne("https://localhost:8443/api/product-category")
    //mockReq.flush(Object.values(PRODUCT_SERVICE_DATA));
  });

  it('should updateOrderQuantity', () => {
    //pending();
    //expect(service).toBeTruthy();
  });

});
