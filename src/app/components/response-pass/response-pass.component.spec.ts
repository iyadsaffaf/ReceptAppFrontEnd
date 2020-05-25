import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsePassComponent } from './response-pass.component';

describe('ResponsePassComponent', () => {
  let component: ResponsePassComponent;
  let fixture: ComponentFixture<ResponsePassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsePassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
