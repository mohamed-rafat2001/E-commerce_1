import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { SinUpComponent } from './auth/sin-up/sin-up.component';
import { LoginComponent } from './auth/login/login.component';
import { UpdateProfileComponent } from './user/update-profile/update-profile.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { DeleteAcountComponent } from './user/delete-acount/delete-acount.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './views/about/about.component';
import { AuthService } from './services/auth/auth.service';
import { AdminService } from './services/admin/admin.service';
import { CartService } from './services/cart/cart.service';
import { OrderService } from './services/order/order.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { AllAdminsComponent } from './admin/all-admins/all-admins.component';
import { SingleUserComponent } from './admin/single-user/single-user.component';
import { AllOrdersComponent } from './admin/all-orders/all-orders.component';
import { SearchAboutOrderComponent } from './admin/search-about-order/search-about-order.component';
import { SearchAboutUserComponent } from './admin/search-about-user/search-about-user.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import { AddOrderComponent } from './user/order/add-order/add-order.component';
import { GetComponent } from './user/wishList/get/get.component'
import { SingleCartComponent } from './user/cart/single-cart/single-cart.component';
import { SingleOrderComponent } from './user/order/single-order/single-order.component';
import { UpdateBlogComponent } from './admin/blog/update-blog/update-blog.component';
import { AddBlogComponent } from './admin/blog/add-blog/add-blog.component';
import { UpdateBlogCategoryComponent } from './admin/blogCategory/update-blog-category/update-blog-category.component';
import { AddBlogCategoryComponent } from './admin/blogCategory/add-blog-category/add-blog-category.component';
import { AddProductCategoryComponent } from './admin/productCategory/add-product-category/add-product-category.component';
import { UpdateProductCategoryComponent } from './admin/productCategory/update-product-category/update-product-category.component';
import { SingleBlogCategoryComponent } from './views/blogCategory/single-blog-category/single-blog-category.component';
import { AllproductsComponent } from './views/products/allproducts/allproducts.component';
import { SingleproductComponent } from './views/products/singleproduct/singleproduct.component';
import { AllProductCategoryComponent } from './views/productCategory/all-product-category/all-product-category.component';
import { SingleProductCategoryComponent } from './views/productCategory/single-product-category/single-product-category.component';
import { AllBrandCategoryComponent } from './views/brandCategory/all-brand-category/all-brand-category.component';
import { SingleBrandCategoryComponent } from './views/brandCategory/single-brand-category/single-brand-category.component';
import { AllBlogComponent } from './views/blog/all-blog/all-blog.component';
import { SingleBlogComponent } from './views/blog/single-blog/single-blog.component';
import { AddProductComponent } from './admin/productCtrl/add-product/add-product.component';
import { UpdateProductComponent } from './admin/productCtrl/update-product/update-product.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AllProductListComponent } from './admin/productCtrl/all-product-list/all-product-list.component';
import { BlogsComponent } from './admin/blog/blogs/blogs.component';
import { AllProCatComponent } from './admin/productCategory/all-pro-cat/all-pro-cat.component';
import { AddBrandCategoryComponent } from './admin/brandCategory/add-brand-category/add-brand-category.component';
import { AllBrandCatComponent } from './admin/brandCategory/all-brand-cat/all-brand-cat.component';
import { AllBlogCatComponent } from './admin/blogCategory/all-blog-cat/all-blog-cat.component';
import { AllBlogCategoryComponent } from './views/blogCategory/all-blog-category/all-blog-category.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SinUpComponent,
    LoginComponent,
    UpdateProfileComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DeleteAcountComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    AllUsersComponent,
    AllAdminsComponent,
    SingleUserComponent,
    AllOrdersComponent,
    SearchAboutOrderComponent,
    SingleOrderComponent,
    SearchAboutUserComponent,
    AdminLoginComponent,
    SingleCartComponent,
    AddOrderComponent,
    GetComponent,
    UpdateBlogComponent,
    AddBlogComponent,
    UpdateBlogCategoryComponent,
    AddBlogCategoryComponent,
    AddProductCategoryComponent,
    UpdateProductCategoryComponent,
    SingleBlogCategoryComponent,
    AllproductsComponent,
    SingleproductComponent,
    AllProductCategoryComponent,
    SingleProductCategoryComponent,
    AllBrandCategoryComponent,
    SingleBrandCategoryComponent,
    AllBlogComponent,
    SingleBlogComponent,
    AddProductComponent,
    UpdateProductComponent,
    AllProductListComponent,
    BlogsComponent,
    AllProCatComponent,
    AddBrandCategoryComponent,
    AllBrandCatComponent,
    AllBlogCatComponent,
    AllBlogCategoryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AdminService,
    CartService,
    OrderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
