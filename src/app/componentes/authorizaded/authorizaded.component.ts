import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-authorizaded',
  templateUrl: './authorizaded.component.html',
  styleUrls: ['./authorizaded.component.css']
})
export class AuthorizadedComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.code) {
        this.authService.obterNovoAccessTokenComCode(params.code, params.state)
          .then(() => {
            this.router.navigate(['/perfil'])
          })
          .catch(() => console.log('erro'))
      } else {
        this.router.navigate(['/']);
      }
    })

  }

}
