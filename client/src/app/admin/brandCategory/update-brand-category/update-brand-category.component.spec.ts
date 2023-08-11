import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBrandCategoryComponent } from './update-brand-category.component';

describe('UpdateBrandCategoryComponent', () => {
  let component: UpdateBrandCategoryComponent;
  let fixture: ComponentFixture<UpdateBrandCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBrandCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBrandCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
