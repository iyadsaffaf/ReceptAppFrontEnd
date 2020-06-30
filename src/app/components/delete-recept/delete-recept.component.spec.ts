import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReceptComponent } from './delete-recept.component';

describe('DeleteReceptComponent', () => {
  let component: DeleteReceptComponent;
  let fixture: ComponentFixture<DeleteReceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteReceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
