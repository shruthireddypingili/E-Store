import { Routes } from "@angular/router"
import { AddProductComponent } from "./add-product/add-product.component";
import { BuynowCheckoutComponent } from "./buynow-checkout/buynow-checkout.component";
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ManageOrdersComponent } from "./manage-orders/manage-orders.component";
import { ManageProductsComponent } from "./manage-products/manage-products.component";
import { ManageUsersComponent } from "./manage-users/manage-users.component";
import { OrderDetailsComponent } from "./order-details/order-details.component";
import { OrdersComponent } from "./orders/orders.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductsComponent } from "./products/products.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./services/auth-guard.service";
import { UserProfileComponent } from "./user-profile/user-profile.component";

export const applicationRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'user-profile', component: UserProfileComponent},
    { path: 'login', component:LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'add-products', component: AddProductComponent,canActivate: [AuthGuard]},
    { path: 'manage-products', component: ManageProductsComponent,canActivate: [AuthGuard]},
    { path: 'edit-products/:id', component: EditProductComponent},
    { path: 'cart', component: CartComponent},
    { path: 'product-details/:id', component: ProductDetailsComponent},
    { path: 'checkout', component: CheckoutComponent},
    { path: 'orders', component: OrdersComponent},
    { path: 'order-details/:id', component: OrderDetailsComponent},
    { path: 'manage-orders', component: ManageOrdersComponent},
    { path: 'manage-users', component: ManageUsersComponent},
    { path: 'buynow-checkout/:id', component: BuynowCheckoutComponent},
    { path: 'edit-user/:id', component: EditUserComponent},
    

]