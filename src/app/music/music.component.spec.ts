import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicComponent } from './music.component';

xdescribe('MusicComponent', () => {
  let component: MusicComponent;
  let fixture: ComponentFixture<MusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click', () => {
    spyOn(component,'onclick').and.callThrough();
    component.onclick();
    expect(component.onclick).toBeTruthy();
  });

  it('should click', () => {
    spyOn(component,'disableButton').and.callThrough();
    component.disableButton();
    expect(component.disableButton).toBeTruthy();
  });
});
