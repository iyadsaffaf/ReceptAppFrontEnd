import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReceptComponent } from './new-recept.component';

describe('NewReceptComponent', () => {
  let component: NewReceptComponent;
  let fixture: ComponentFixture<NewReceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
