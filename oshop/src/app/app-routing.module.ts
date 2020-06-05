import { NoAccessComponent } from './no-access/no-access.component';
import { AdminAuthGuard } from './service/admin-guard.service';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AuthGuardService } from './service/auth-guard.service';
import { CheckOutComponent } from './check-out/check-out.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path:'',component:HomeComponent },
  { path:'shoppingCart',component:ShoppingCartComponent },
  { path:'my/orders',component:MyOrdersComponent, canActivate:[AuthGuardService] },
  { path:'checkout',component:CheckOutComponent, canActivate: [AuthGuardService]},
  { path:'order-success',component:OrderSuccessComponent, canActivate: [AuthGuardService] },
  { path:'admin/orders',component:AdminOrdersComponent, canActivate:[AuthGuardService,AdminAuthGuard]},
  { path:'admin/products',component:AdminProductsComponent, canActivate:[AuthGuardService, AdminAuthGuard] },
  { path:'login',component:LoginComponent},
  { path:'no-access',component:NoAccessComponent},
  { path:'**',component:NoAccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
