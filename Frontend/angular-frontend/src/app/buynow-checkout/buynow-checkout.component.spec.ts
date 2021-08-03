import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynowCheckoutComponent } from './buynow-checkout.component';

describe('BuynowCheckoutComponent', () => {
  let component: BuynowCheckoutComponent;
  let fixture: ComponentFixture<BuynowCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuynowCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuynowCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
