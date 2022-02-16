import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsSidebarComponent } from './cards-sidebar.component';

describe('CardsSidebarComponent', () => {
  let component: CardsSidebarComponent;
  let fixture: ComponentFixture<CardsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
