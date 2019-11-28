import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionalResourceComponent } from './devotional-resource.component';

describe('DevotionalResourceComponent', () => {
  let component: DevotionalResourceComponent;
  let fixture: ComponentFixture<DevotionalResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevotionalResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevotionalResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
