import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserInputDTO } from '../models/dto/UserInputDTO';
import { Injectable } from '@angular/core';

@Injectable()
export class CadastroService {

    private url = environment.api+'users/';

    constructor(private http: HttpClient) {}

    cadastrar (cadastroData) {
        const userInputDTO = new UserInputDTO(cadastroData);

        return this.http
            .post(this.url, userInputDTO)
    }

}