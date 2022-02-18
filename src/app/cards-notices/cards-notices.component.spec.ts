import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsNoticesComponent } from './cards-notices.component';

describe('CardsNoticesComponent', () => {
  let component: CardsNoticesComponent;
  let fixture: ComponentFixture<CardsNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsNoticesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
