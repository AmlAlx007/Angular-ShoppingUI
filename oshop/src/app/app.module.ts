import { GenerateCartIdService } from './service/generate-cart-id.service';
import { FormsModule } from '@angular/forms';
import { CategoryService } from './service/category.service';
import { AdminAuthGuard } from './service/admin-guard.service';
import { UserService } from './service/user.service';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './widget/nav-bar/nav-bar.component';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NoAccessComponent } from './no-access/no-access.component';
import { ProductFormComponent, ProductFormComponentDialog } from './admin/product-form/product-form.component';
import { ProductService } from './service/product.service';
import { PriceValidator } from './common/errors/price.error';
import { UrlValidator } from './common/errors/url.error';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductsFilterCategoryComponent } from './products/products-filter-category/products-filter-category.component';
import { ProductsCardComponent } from './products/products-card/products-card.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    NoAccessComponent,
    ProductFormComponent,
    PriceValidator,
    UrlValidator,
    ProductFormComponentDialog,
    ProductsFilterCategoryComponent,
    ProductsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthService, 
              AuthGuardService, 
              UserService, 
              AdminAuthGuard, 
              CategoryService,
              ProductService,
              GenerateCartIdService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
