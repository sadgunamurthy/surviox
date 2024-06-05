import { TestBed } from '@angular/core/testing';

// import * as jasmine from 'jasmine';
import { ProductService } from './product.service';
import { SharedService } from './shared.service';

// describe('ProductService', () => {
  
//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('ProductService' ,() =>{
   
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

    it("should multiply two numbers",()=>{
    const share= new SharedService();   
    const calc=new ProductService(share);
    const result=calc.multiply(3,5);
    expect(result).toBe(15);
});
it("add two numbers",()=>{
    const share= new SharedService(); 
    const sum=new ProductService(share);
    const result = sum.addition(2,4);
    expect(result).toBe(6)

  });

it("should multiply two numbers",()=>{
    // const share= new SharedService();   
    const share=jasmine.createSpyObj('SharedService',['mySharedFunction'])

    const calc=new ProductService(share);
    // spyOn(share,"mySharedFunction");
    const result=calc.multiply(3,5);
    expect(result).toBe(15);
    // expect(share.mySharedFunction).toHaveBeenCalled();
});
});

  



