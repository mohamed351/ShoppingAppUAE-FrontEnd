import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelInvoiceComponent } from './cancel-invoice.component';

describe('CancelInvoiceComponent', () => {
  let component: CancelInvoiceComponent;
  let fixture: ComponentFixture<CancelInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
