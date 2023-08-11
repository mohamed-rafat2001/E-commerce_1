import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinUpComponent } from './auth/sin-up/sin-up.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AboutComponent } from './views/about/about.component';
import { AllproductsComponent } from './views/products/allproducts/allproducts.component';
import { UpdateProfileComponent } from './user/update-profile/update-profile.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { GetComponent } from './user/wishList/get/get.component';
import { AuthGardeService } from './services/authGarde/auth-garde.service';
import { AdminComponent } from './admin/admin.component';
import { AllAdminsComponent } from './admin/all-admins/all-admins.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { AddProductComponent } from './admin/productCtrl/add-product/add-product.component';
import { AllProductListComponent } from './admin/productCtrl/all-product-list/all-product-list.component';
import { UpdateProductComponent } from './admin/productCtrl/update-product/update-product.component';
import { SingleproductComponent } from './views/products/singleproduct/singleproduct.component';
import { SingleCartComponent } from './user/cart/single-cart/single-cart.component';
import { AddOrderComponent } from './user/order/add-order/add-order.component';
import { SingleOrderComponent } from './user/order/single-order/single-order.component';
import { AddBlogComponent } from './admin/blog/add-blog/add-blog.component';
import { BlogsComponent } from './admin/blog/blogs/blogs.component';
import { UpdateBlogComponent } from './admin/blog/update-blog/update-blog.component';
import { AllBlogComponent } from './views/blog/all-blog/all-blog.component';
import { SingleBlogComponent } from './views/blog/single-blog/single-blog.component';
import { SingleProductCategoryComponent } from './views/productCategory/single-product-category/single-product-category.component';
import { AllProductCategoryComponent } from './views/productCategory/all-product-category/all-product-category.component';
import { AddProductCategoryComponent } from './admin/productCategory/add-product-category/add-product-category.component';
import { AllProCatComponent } from './admin/productCategory/all-pro-cat/all-pro-cat.component';
import { AddBrandCategoryComponent } from './admin/brandCategory/add-brand-category/add-brand-category.component';
import { AllBrandCatComponent } from './admin/brandCategory/all-brand-cat/all-brand-cat.component';
import { SingleBrandCategoryComponent } from './views/brandCategory/single-brand-category/single-brand-category.component';
import { AllBrandCategoryComponent } from './views/brandCategory/all-brand-category/all-brand-category.component';
import { AddBlogCategoryComponent } from './admin/blogCategory/add-blog-category/add-blog-category.component';
import { SingleBlogCategoryComponent } from './views/blogCategory/single-blog-category/single-blog-category.component';
import { AllBlogCatComponent } from './admin/blogCategory/all-blog-cat/all-blog-cat.component';
import { AllBlogCategoryComponent } from './views/blogCategory/all-blog-category/all-blog-category.component';

const routes: Routes = [
  //admin
  { path: 'admin', component: AdminComponent, canActivate: [AuthGardeService] },
  { path: 'admin/allAdmins', component: AllAdminsComponent, canActivate: [AuthGardeService] },
  { path: 'admin/allUsers', component: AllUsersComponent, canActivate: [AuthGardeService] },
  { path: 'admin/addProduct', component: AddProductComponent, canActivate: [AuthGardeService] },
  { path: 'admin/productList', component: AllProductListComponent, canActivate: [AuthGardeService] },
  { path: 'admin/updateProduct/:id', component: UpdateProductComponent, canActivate: [AuthGardeService] },
  { path: 'singleProduct/:id', component: SingleproductComponent, canActivate: [AuthGardeService] },
  { path: 'admin/addBlog', component: AddBlogComponent, canActivate: [AuthGardeService] },
  { path: 'blogs', component: BlogsComponent, canActivate: [AuthGardeService] },
  { path: 'admin/updateBlog/:id', component: UpdateBlogComponent, canActivate: [AuthGardeService] },
  { path: 'admin/allProCats', component: AllProCatComponent, canActivate: [AuthGardeService] },
  { path: 'admin/addProCat', component: AddProductCategoryComponent, canActivate: [AuthGardeService] },
  { path: 'admin/addBrandCat', component: AddBrandCategoryComponent, canActivate: [AuthGardeService] },
  { path: 'admin/allBrandCat', component: AllBrandCatComponent, canActivate: [AuthGardeService] },
  { path: 'admin/addBlogCat', component: AddBlogCategoryComponent, canActivate: [AuthGardeService] },
  { path: 'admin/allBlogCat', component: AllBlogCatComponent, canActivate: [AuthGardeService] },



  //nav-bar links
  { path: '', component: AllproductsComponent },
  { path: 'singUp', component: SinUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGardeService] },
  { path: 'about', component: AboutComponent },
  { path: 'views/blogs', component: AllBlogComponent },
  { path: 'productCats', component: AllProductCategoryComponent },
  { path: 'Brands', component: AllBrandCategoryComponent },
  { path: 'BlogCat', component: AllBlogCategoryComponent },


  //profile
  { path: 'updateProfile', component: UpdateProfileComponent, canActivate: [AuthGardeService] },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'resetPassword', component: ResetPasswordComponent, canActivate: [AuthGardeService] },
  //wishList
  { path: 'wishList', component: GetComponent, canActivate: [AuthGardeService] },
  //cart
  { path: 'cart', component: SingleCartComponent, canActivate: [AuthGardeService] },
  // order
  { path: 'addOrder', component: AddOrderComponent, canActivate: [AuthGardeService] },
  { path: 'singleOrder', component: SingleOrderComponent, canActivate: [AuthGardeService] },
  //single bolg
  { path: 'singleBlog/:id', component: SingleBlogComponent },
  // category product
  { path: 'singleProductCat/:cat', component: SingleProductCategoryComponent },
  // brand category
  { path: 'singleBrandCat/:cat', component: SingleBrandCategoryComponent },
  // blog category
  { path: 'singleBlogCat/:cat', component: SingleBlogCategoryComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
