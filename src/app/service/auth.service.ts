import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080';
  private tokenUrl = this.apiUrl + '/oauth2/token';
  private authorizationUrl = this.apiUrl + '/oauth2/authorize';

  constructor(
    private http: HttpClient
  ) { }

  login() {
    const state = 'abc';
    const responseType = 'code';
    const clientId = 'bookpedia-web';
    const redirectUri = encodeURIComponent('http://localhost:4200/authorized');
    const scope = 'READ WRITE';
    const codeChallengeMethod = 'S256';
    const codeChallenge = 'ungWv48Bz-pBQUDeXa4iI7ADYaOWF3qctBD_YfIAFa0';

    const params = [
      'response_type=' + responseType,
      'client_id=' + clientId,
      'state=' + state,
      'redirect_uri=' + redirectUri,
      'scope=' + scope,
      'code_challenge_method=' + codeChallengeMethod,
      'code_challenge=' + codeChallenge
    ]

    window.location.href = this.authorizationUrl + '?' + params.join('&');
  }

  obterNovoAccessTokenComCode(code: string, state: string): Promise<any> {
    if (state !== 'abc') {
      return Promise.reject(null);
    }

    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic Ym9va3BlZGlhLXdlYjpzZW5oYTEyMw==')

    const body = new HttpParams()
      .append('grant_type', 'authorization_code')
      .append('code_verifier', 'abc')
      .append('code', code)
      .append('redirect_uri', 'http://localhost:4200/authorized')

    return this.http.post(this.tokenUrl, body, { headers })
      .toPromise()
      .then((response: any) => {
        this.armazenarAcessToken(response['access_token']);
        return Promise.resolve(null);
      })
      .catch((response: any) => {
        console.error('Erro ao gerar o token com o code.', response);
        return Promise.resolve();
      });
  }

  private armazenarAcessToken(token: string) {
    localStorage.setItem('access_token', token);
  }

}
