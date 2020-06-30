import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeReceptComponent } from './edite-recept.component';

describe('EditeReceptComponent', () => {
  let component: EditeReceptComponent;
  let fixture: ComponentFixture<EditeReceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeReceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
