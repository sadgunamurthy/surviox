import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupComponent } from './popup.component';

xdescribe('PopupComponent', () => {
  let component: PopupComponent;
  let fixture: ComponentFixture<PopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click', () => {
    spyOn(component,'openPopup').and.callThrough();
    component.openPopup();
    expect(component.openPopup).toBeTruthy();
  });

  it('should click', () => {
    spyOn(component,'closePopup').and.callThrough();
    component.closePopup();
    expect(component.closePopup).toBeTruthy();
  });
});
