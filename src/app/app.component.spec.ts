import { TestBed,ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProductService } from './product.service';
// import { RouterTestingModule }
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let productService: ProductService;
  let productServiceSpy: jasmine.SpyObj<ProductService>;
  // const mockResponse = {
  //   products: [
  //     { id: 1, title: 'iPhone 9', description: 'An apple mobile which is nothing like apple', price: 549, discountPercentage: 12.96, rating: 4.69, stock: 94, brand: 'Apple', category: 'smartphones', thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg', images: ['https://cdn.dummyjson.com/product-images/1/1.jpg', 'https://cdn.dummyjson.com/product-images/1/2.jpg', 'https://cdn.dummyjson.com/product-images/1/3.jpg', 'https://cdn.dummyjson.com/product-images/1/4.jpg', 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'] },
  //     // Add more mock product objects as needed
  //   ],
  //   total: 100,
  //   skip: 0,
  //   limit: 30
  // };
  beforeEach(async () => {
    // productServiceSpy = jasmine.createSpyObj('ProductService', ['getProducts']);
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [ProductService]
    }).compileComponents();
  });

  beforeEach(() =>{
    const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      // productService = TestBed.inject(ProductService);
      fixture.detectChanges();
  })
});

  // it('should call getproducts() method from service', () => {
  //   productServiceSpy.getproducts.and.returnValue(of(mockResponse));

  //   component.getproductsDa();

  //   expect(productServiceSpy.getproducts).toHaveBeenCalled();
  //   // Add further expectations as needed
  // });
  

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'myapp'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('myapp');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('myapp app is running!');
  // });
// });
