import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInput } from '../models/LoginInput';
import { LoginInputDTO } from '../models/dto/LoginInputDTO';
import { map } from 'rxjs/operators';
import { LoginOutput } from '../models/dto/LoginOutput';

@Injectable()
export class LoginService {

    private url = environment.api+'login/';

    constructor(private http: HttpClient) {}

    autenticar (loginData: LoginInput) {
        const loginDTO: LoginInputDTO = {
            email: loginData.email,
            password: loginData.senha
        }

        return this.http
            .post(this.url, loginData)
            .pipe(
                map((resposta: LoginOutput) => {
                    localStorage.setItem('cmail-token', resposta.token)
                    return {
                        avatarUrl: resposta.avatarUrl,
                        email: resposta.email,
                        name: resposta.name
                    }
                })
            )
    }
}