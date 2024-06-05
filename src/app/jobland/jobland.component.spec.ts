import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoblandComponent } from './jobland.component';

xdescribe('JoblandComponent', () => {
  let component: JoblandComponent;
  let fixture: ComponentFixture<JoblandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoblandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoblandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
