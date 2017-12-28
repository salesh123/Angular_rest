
import {Component} from "@angular/core"
import { IProduct } from "./product";
import {ProductService} from "./products.service";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    moduleId:module.id
})
export class ProductListComponent{
constructor(private _productService: ProductService){
    //this.selectedProduct = _productService.getProducts();
    //this.products = _productService.getProducts();
  }

products: IProduct[];
    showImage: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;
    selectedProduct:any[];
    errorMessage : any;
    toggleImage(): void{
this.showImage =! this.showImage
    }

    _listFilter: String = "cert";
    get listFilter(): String {
        return this._listFilter;
    }

   


set listFilter(value:String){
    this._listFilter=value;
    this.performFilter(this._listFilter);
    this.selectedProduct = this.performFilter(this._listFilter);
    console.log(value);
}

performFilter(filterBy: String): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: any) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }	

ngOnInit(): void {
this._productService.getProducts()
.subscribe(products => this.products= products,
error => this.errorMessage= <any>error);
} 



}
