import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAboutUserComponent } from './search-about-user.component';

describe('SearchAboutUserComponent', () => {
  let component: SearchAboutUserComponent;
  let fixture: ComponentFixture<SearchAboutUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAboutUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAboutUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
