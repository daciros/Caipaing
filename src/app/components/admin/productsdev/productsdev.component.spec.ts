import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsdevComponent } from './productsdev.component';

describe('ProductsdevComponent', () => {
  let component: ProductsdevComponent;
  let fixture: ComponentFixture<ProductsdevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsdevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
