import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinUpComponent } from './sin-up.component';

describe('SinUpComponent', () => {
  let component: SinUpComponent;
  let fixture: ComponentFixture<SinUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
