import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { applicationRoutes } from './app-routing.modules';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CartComponent } from './cart/cart.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { OrderService } from './services/order.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { MustMatchDirective } from './directives/must-match.directive';
import { EditUserComponent } from './edit-user/edit-user.component';
import { BuynowCheckoutComponent } from './buynow-checkout/buynow-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    AddProductComponent,
    ManageProductsComponent,
    EditProductComponent,
    CartComponent,
    OrdersComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    SearchPipePipe,
    ManageUsersComponent,
    OrderDetailsComponent,
    ManageOrdersComponent,
    MustMatchDirective,
    EditUserComponent,
    BuynowCheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, ProductService, AuthService, AuthGuard, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
