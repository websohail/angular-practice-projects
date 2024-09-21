import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoagainComponent } from './todoagain.component';

describe('TodoagainComponent', () => {
  let component: TodoagainComponent;
  let fixture: ComponentFixture<TodoagainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoagainComponent]
    });
    fixture = TestBed.createComponent(TodoagainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
