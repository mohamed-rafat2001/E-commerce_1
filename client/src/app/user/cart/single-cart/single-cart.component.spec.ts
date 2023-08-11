import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCartComponent } from './single-cart.component';

describe('SingleCartComponent', () => {
  let component: SingleCartComponent;
  let fixture: ComponentFixture<SingleCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
