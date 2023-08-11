import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductCategoryComponent } from './all-product-category.component';

describe('AllProductCategoryComponent', () => {
  let component: AllProductCategoryComponent;
  let fixture: ComponentFixture<AllProductCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
