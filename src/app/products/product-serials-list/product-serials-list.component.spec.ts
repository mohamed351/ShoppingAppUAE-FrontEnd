import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSerialsListComponent } from './product-serials-list.component';

describe('ProductSerialsListComponent', () => {
  let component: ProductSerialsListComponent;
  let fixture: ComponentFixture<ProductSerialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSerialsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSerialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
