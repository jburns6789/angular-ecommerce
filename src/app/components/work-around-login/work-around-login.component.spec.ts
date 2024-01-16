import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAroundLoginComponent } from './work-around-login.component';

describe('WorkAroundLoginComponent', () => {
  let component: WorkAroundLoginComponent;
  let fixture: ComponentFixture<WorkAroundLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAroundLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkAroundLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
