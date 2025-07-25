import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importe o Router
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.login();
  }

}
