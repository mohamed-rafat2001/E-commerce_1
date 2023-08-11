import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBlogCatComponent } from './all-blog-cat.component';

describe('AllBlogCatComponent', () => {
  let component: AllBlogCatComponent;
  let fixture: ComponentFixture<AllBlogCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBlogCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBlogCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
