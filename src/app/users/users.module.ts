import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './sign-in.component';
import { RegisterComponent } from './register.component';
import { UserRepositoryService } from './user-repository.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [SharedModule, RouterModule, ReactiveFormsModule, FormsModule],
  declarations: [SignInComponent, RegisterComponent],
  exports: [],
  providers: [UserRepositoryService],
})
export class UsersModule {}
