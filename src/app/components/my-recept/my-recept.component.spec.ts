import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReceptComponent } from './my-recept.component';

describe('MyReceptComponent', () => {
  let component: MyReceptComponent;
  let fixture: ComponentFixture<MyReceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
