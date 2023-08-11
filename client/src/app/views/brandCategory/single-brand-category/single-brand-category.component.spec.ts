import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBrandCategoryComponent } from './single-brand-category.component';

describe('SingleBrandCategoryComponent', () => {
  let component: SingleBrandCategoryComponent;
  let fixture: ComponentFixture<SingleBrandCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBrandCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBrandCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
