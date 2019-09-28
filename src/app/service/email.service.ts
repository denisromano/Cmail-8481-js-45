import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { EmailInputDTO } from '../models/dto/EmailInputDTO';
import { EmailForm } from '../models/EmailForm';
import { TokenService } from './token.service';
import { EmailOutputDTO } from '../models/dto/EmailOutputDTO';
import { Observable } from 'rxjs';
import { Email } from '../models/Email';
import { map } from 'rxjs/operators';

@Injectable()
export class EmailService {
    
    private url = environment.api+'emails';
    private httpOptions = {
        headers: new HttpHeaders(
           // {'Authorization': localStorage.getItem('cmail-token')}
           {'Authorization': this.tokenService.obter()}
        )
    }

    constructor(private http: HttpClient, private tokenService: TokenService) {}

    enviar(email: EmailForm){

        const emailDTO: EmailInputDTO = {
            to: email.destinatario,
            subject: email.assunto,
            content: email.conteudo
        }

        return this.http.post<EmailOutputDTO>(this.url,emailDTO, this.httpOptions)
    }

    deletar(id){
        console.log('${id}');
        
        return this.
                    http.
                    delete(this.url+'/'+id,{headers: this.httpOptions.headers})               
    }

    listar(): Observable<Email[]> {
        return this.http.get<EmailOutputDTO[]>(this.url, this.httpOptions)
        .pipe(
            map(
                listaEmIngles => {
                    return listaEmIngles.map(
                        emailIngles => {
                            return new Email({
                                destinatario: emailIngles.to,
                                assunto: emailIngles.subject,
                                conteudo: emailIngles.content,
                                dataDeEnvio: emailIngles.created_at,
                                id: emailIngles.id
                            });
                        }
                    )
                }
            )
        )
    }
}