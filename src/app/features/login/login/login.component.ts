import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private router: Router,
    private loginService: LoginService,
  ) {
  }

  login() {
    console.log(this.form.value);
    this.loginService.login(this.form.value.name, this.form.value.email)
      .subscribe(user => {
        //     this.userContext.user = user;
        this.router.navigate(['d']);
      });
  }

  ngOnInit() {
  }

}
