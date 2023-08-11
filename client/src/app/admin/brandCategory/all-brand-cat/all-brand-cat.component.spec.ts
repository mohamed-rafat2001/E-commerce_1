import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBrandCatComponent } from './all-brand-cat.component';

describe('AllBrandCatComponent', () => {
  let component: AllBrandCatComponent;
  let fixture: ComponentFixture<AllBrandCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBrandCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBrandCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
