import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSerialsComponent } from './product-serials.component';

describe('ProductSerialsComponent', () => {
  let component: ProductSerialsComponent;
  let fixture: ComponentFixture<ProductSerialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSerialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSerialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
