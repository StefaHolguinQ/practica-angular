import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyEditionComponent } from './sticky-edition.component';

describe('StickyEditionComponent', () => {
  let component: StickyEditionComponent;
  let fixture: ComponentFixture<StickyEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
