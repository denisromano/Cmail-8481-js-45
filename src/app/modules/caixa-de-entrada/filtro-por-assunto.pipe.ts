import { PipeTransform, Pipe } from '@angular/core';
import { Email } from 'src/app/models/Email';

@Pipe({
    name: 'filtroPorAssunto'
})
export class FiltroPorAssunto implements PipeTransform{

    transform(listaEmails: Email[], termoFiltro: string){
        console.log(listaEmails);
        console.log(termoFiltro);
        
        
        return 
            listaEmails.filter(
                email => 
                    email.assunto.toLowerCase()
                        .includes(termoFiltro.toLowerCase()))
    }
}