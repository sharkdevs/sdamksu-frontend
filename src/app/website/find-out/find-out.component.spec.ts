import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOutComponent } from './find-out.component';

describe('FindOutComponent', () => {
  let component: FindOutComponent;
  let fixture: ComponentFixture<FindOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
