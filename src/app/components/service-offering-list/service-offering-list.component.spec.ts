import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOfferingListComponent } from './service-offering-list.component';

describe('ServiceOfferingListComponent', () => {
  let component: ServiceOfferingListComponent;
  let fixture: ComponentFixture<ServiceOfferingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOfferingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceOfferingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
