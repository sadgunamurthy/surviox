import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicallComponent } from './apicall.component';

xdescribe('ApicallComponent', () => {
  let component: ApicallComponent;
  let fixture: ComponentFixture<ApicallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApicallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApicallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
