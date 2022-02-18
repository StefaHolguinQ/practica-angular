import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreReadComponent } from './more-read.component';

describe('MoreReadComponent', () => {
  let component: MoreReadComponent;
  let fixture: ComponentFixture<MoreReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
