import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersDeleteComponent } from './suppliers-delete.component';

describe('SuppliersDeleteComponent', () => {
  let component: SuppliersDeleteComponent;
  let fixture: ComponentFixture<SuppliersDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliersDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
