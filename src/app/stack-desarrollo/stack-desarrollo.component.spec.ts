import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackDesarrolloComponent } from './stack-desarrollo.component';

describe('StackDesarrolloComponent', () => {
  let component: StackDesarrolloComponent;
  let fixture: ComponentFixture<StackDesarrolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackDesarrolloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackDesarrolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
