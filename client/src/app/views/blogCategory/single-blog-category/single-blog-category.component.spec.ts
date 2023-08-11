import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBlogCategoryComponent } from './single-blog-category.component';

describe('SingleBlogCategoryComponent', () => {
  let component: SingleBlogCategoryComponent;
  let fixture: ComponentFixture<SingleBlogCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBlogCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBlogCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
