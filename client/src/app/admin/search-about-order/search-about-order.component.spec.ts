import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAboutOrderComponent } from './search-about-order.component';

describe('SearchAboutOrderComponent', () => {
  let component: SearchAboutOrderComponent;
  let fixture: ComponentFixture<SearchAboutOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAboutOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAboutOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
