import { AuthService } from './../auth.service';
import { AuthGuard } from './../auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminProductsComponent,
    AdminCategoriesComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
  providers: [AuthGuard, AuthService],
})
export class AdminModule {}
