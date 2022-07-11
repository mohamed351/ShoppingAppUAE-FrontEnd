import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersEditComponent } from './suppliers-edit.component';

describe('SuppliersEditComponent', () => {
  let component: SuppliersEditComponent;
  let fixture: ComponentFixture<SuppliersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
