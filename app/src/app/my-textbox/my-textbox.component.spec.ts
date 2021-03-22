import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTextboxComponent } from './my-textbox.component';

describe('MyTextboxComponent', () => {
  let component: MyTextboxComponent;
  let fixture: ComponentFixture<MyTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
