import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonChoosefilesComponent } from './button-choosefiles.component';

describe('ButtonChoosefilesComponent', () => {
  let component: ButtonChoosefilesComponent;
  let fixture: ComponentFixture<ButtonChoosefilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonChoosefilesComponent]
    });
    fixture = TestBed.createComponent(ButtonChoosefilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
