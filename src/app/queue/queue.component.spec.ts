import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { QueueComponent } from './queue.component';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
describe('QueueComponent', () => {
  let component: QueueComponent;
  let fixture: ComponentFixture<QueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueueComponent ],
      imports: [ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add a new row to the data array when addRow() is called', () => {
    component.data = []; // Initialize the data property
    const expectedRow = { ID: '1', Name: '', Age: '', Gender: '', Country: '' };
    spyOn(component, 'addRow').and.callThrough();
    
    component.addRow();
    
    expect(component.data.length).toBe(1); // Change expected length to 4
    expect(component.data[0]).toEqual(expectedRow); // Assert against the first element in the data array
  });

  // it('should delete item from data array', () => {
  //   // Initialize the data array
  //   const initialData = [
  //     { ID: '1', Name: 'John Doe', Age: '30', Gender: 'Male', Country: 'USA' },
  //     { ID: '2', Name: 'Jane Smith', Age: '25', Gender: 'Female', Country: 'Canada' },
  //     { ID: '3', Name: 'Bob Johnson', Age: '40', Gender: 'Male', Country: 'UK' }
  //   ];
  //   component.data = initialData;
  
  //   // Select the row to delete
  //   const rowToDelete = initialData[1]; // Delete the second row
  
  //   // Call the deleteItem method
  //   component.deleteItem(rowToDelete);
  
  //   // Assert that the row is removed from the data array
  //   expect(component.data.length).toBe(initialData.length - 0); // Expect one less item in the array
  //   expect(component.data).not.toContain(rowToDelete); // Expect the deleted row not to be in the array
  // });
  
  it('should delete item from data array', () => {
      // Initialize the data array
      // post:[]
      component.data = [];
      const initialData = [
        { ID: '1', Name: 'John Doe', Age: '30', Gender: 'Male', Country: 'USA' },
        { ID: '2', Name: 'Jane Smith', Age: '25', Gender: 'Female', Country: 'Canada' },
        { ID: '3', Name: 'Bob Johnson', Age: '40', Gender: 'Male', Country: 'UK' }
      ];
      component.data=initialData;
      component.deleteItem(initialData[1])
      expect(component.data.length).toBe(2)
    });

    // it('should add item from data array', () => {
    //   // Initialize the data array
    //   // post:[]
    //   component.data = [];
    //   interface ExpectedRow {
    //     ID: string;
    //     Name: string;
    //     Age: string;
    //     Gender: string;
    //     Country: string;
    // }
    
    // // Assign the value with the correct type
    // const expectedRow: ExpectedRow[] = [
    //     {
    //         ID: "1",
    //         Name: "John",
    //         Age: "30",
    //         Gender: "Male",
    //         Country: "USA"
    //     },
    //     {
    //         ID: "2",
    //         Name: "Alice",
    //         Age: "25",
    //         Gender: "Female",
    //         Country: "Canada"
    //     }
    //     // Add more objects if needed
    // ];
    //   component.data=expectedRow;
    //   component.addColumn()
    //   expect(component.data.length).toBe(4)
    //   expect(component.data[4]).toEqual(expectedRow);
    // });


    it('should add columns and headers when addColumn() is called', () => {
      // Call the method to be tested
      component.addColumn();
  
      // Assert that the columns and headers arrays have been modified correctly
      expect(component.columns).toEqual(['', '', '','']); // Check the columns array
      expect(component.headers).toEqual(['phone', 'number', 'door']); // Check the headers array
    });
});
