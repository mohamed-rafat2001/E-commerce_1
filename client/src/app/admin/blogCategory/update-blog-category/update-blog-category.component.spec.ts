import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBlogCategoryComponent } from './update-blog-category.component';

describe('UpdateBlogCategoryComponent', () => {
  let component: UpdateBlogCategoryComponent;
  let fixture: ComponentFixture<UpdateBlogCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBlogCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBlogCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
