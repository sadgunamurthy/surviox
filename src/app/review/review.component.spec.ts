import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewComponent } from './review.component';
import { throwError } from 'rxjs';
xdescribe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle event with target', () => {
    const mockEvent = { target: { value: 'red' } };
    component.onColorChange(mockEvent);
    expect(component.selectedColor).toBe('red');
  });

  it('should handle event without target', () => {
    const mockEvent = {};
    spyOn(console, 'error'); // Spy on console.error to check if it's called
    component.onColorChange(mockEvent);
    expect(console.error).toHaveBeenCalledWith('Event or event.target is undefined.');
  });
});