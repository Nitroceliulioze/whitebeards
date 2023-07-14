import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './sign-in.component';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [SharedModule, RouterModule, ReactiveFormsModule, FormsModule, UsersRoutingModule],
  declarations: [SignInComponent, RegisterComponent],
  exports: [],
  providers: [],
})
export class UsersModule {}
