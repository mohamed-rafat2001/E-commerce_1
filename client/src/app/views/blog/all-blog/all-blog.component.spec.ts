import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBlogComponent } from './all-blog.component';

describe('AllBlogComponent', () => {
  let component: AllBlogComponent;
  let fixture: ComponentFixture<AllBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
