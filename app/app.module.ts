

import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser";
import { AppComponent } from "./app2.component";
import{ProductListComponent} from "./product/product-list.component"
import {FormsModule} from  "@angular/forms";
import {ProductService} from "./product/products.service";
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [BrowserModule, 
    FormsModule,
    HttpClientModule],
    declarations: [AppComponent, ProductListComponent],
    bootstrap: [AppComponent],
    providers: [ProductService]

    

})
export class AppModule{

}
