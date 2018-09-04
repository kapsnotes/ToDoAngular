import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  genders = ['Male', 'Female'];
  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'user': new FormGroup({
        'userName': new FormControl(
          null,
          [Validators.required, this.invalidUserName]
        ),
        'email': new FormControl(
          null,
          [Validators.required, Validators.email],
          this.invalidEmail
        ),
      }),
      'password': new FormControl(null),
      'gender': new FormControl('Male')
    });
  }

  onRegister() {
    console.log(this.registerForm);
  }

  invalidUserName(control: FormControl): { [s: string]: boolean } {
    const invalidUserNames = ['admin', 'super-admin'];

    if (invalidUserNames.indexOf(control.value) !== -1) {
      return {
        'invalidUserName': true
      };
    } else {
      return null;
    }
  }

  invalidEmail(control: FormControl): Observable<any> | Promise<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@user.com') {
          resolve({
            'emailAlreadyRegistered': true
          });
        } else {
          resolve(null);
        }
      }, 5000);
    });

    return promise;
  }

}
