import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductCategoryComponent } from './single-product-category.component';

describe('SingleProductCategoryComponent', () => {
  let component: SingleProductCategoryComponent;
  let fixture: ComponentFixture<SingleProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProductCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
