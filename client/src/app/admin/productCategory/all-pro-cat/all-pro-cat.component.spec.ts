import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProCatComponent } from './all-pro-cat.component';

describe('AllProCatComponent', () => {
  let component: AllProCatComponent;
  let fixture: ComponentFixture<AllProCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
