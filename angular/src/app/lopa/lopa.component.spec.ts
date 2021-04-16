import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LOPAComponent } from './lopa.component';

describe('LOPAComponent', () => {
  let component: LOPAComponent;
  let fixture: ComponentFixture<LOPAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LOPAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LOPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
