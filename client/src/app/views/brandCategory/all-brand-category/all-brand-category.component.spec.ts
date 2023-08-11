import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBrandCategoryComponent } from './all-brand-category.component';

describe('AllBrandCategoryComponent', () => {
  let component: AllBrandCategoryComponent;
  let fixture: ComponentFixture<AllBrandCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBrandCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBrandCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
