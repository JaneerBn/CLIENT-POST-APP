import { Component, inject, input } from '@angular/core';
import { User } from '../../../../users/interfaces/user.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../users/services/user.service';

@Component({
  selector: 'user-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  user = input.required<User>();
  router = inject(Router);
  fb = inject(FormBuilder);

  UserService = inject(UserService);

  // userForm = this.fb.group({
  //   first_name: ['', Validators.required],
  //   last_name: ['', Validators.required],
  //   email: ['', Validators.required, Validators.email],
  //   telephone: ['', Validators.required],
  //   rol_id: ['', Validators.required],
  //   avatar: ['', Validators.required],
  // });

    userForm = this.fb.group({
    first_name: [''],
    last_name: [''],
    email: [''],
    telephone: [''],
    rol_id: [''],
    avatar: [''],
  });

  ngOnInit() {
    this.userForm.reset(this.user() as any);
  }

  onSubmit(){
    console.log({user :this.userForm.value})
  }

}
