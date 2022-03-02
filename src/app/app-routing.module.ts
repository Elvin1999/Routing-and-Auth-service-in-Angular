import { LoginComponent } from './login/login.component';
import { ProductComponent } from './products/product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: ':id', component: ProductComponent },
      { path: ':id/edit', component: EditProductComponent },
    ],
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':name', component: UsersComponent }],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}