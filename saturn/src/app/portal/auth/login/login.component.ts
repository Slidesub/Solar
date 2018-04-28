import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMsg: string;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      phone: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  submitForm() {
    this.loginService.login(this.loginForm.value).subscribe(
      resp => {
        if (resp.status === 200 && resp.msg === 'success') {
          localStorage.setItem('token', resp.data.token);
          sessionStorage.setItem('token', resp.data.token);
          this.router.navigateByUrl('/guidance');
        } else {
          this.errorMsg = resp.msg;
        }
      }, error => {
        this.errorMsg = error;
      });
    }
}
