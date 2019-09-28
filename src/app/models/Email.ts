import { EmailOutputDTO } from './dto/EmailOutputDTO';


export class Email {

    assunto = "";
    conteudo = "";
    dataEnvio = "";
    destinatario = "";
    id = "";
    remetente = "";

    constructor({destinatario, assunto, conteudo, dataDeEnvio, id}:
        {destinatario:string, assunto:string, conteudo:string, dataDeEnvio:string, id:string}){
            this.destinatario = destinatario;
            this.assunto = assunto;
            this.conteudo = conteudo;
            this.dataEnvio = dataDeEnvio;
            this.id = id;
        }

    // constructor(emailEmIngles: EmailOutputDTO){
    //     this.assunto = emailEmIngles.subject;
    //     this.conteudo = emailEmIngles.content;
    //     this.dataEnvio = emailEmIngles.created_at;
    //     this.destinatario = emailEmIngles.from;
    //     this.id = emailEmIngles.id;
    //     this.remetente = emailEmIngles.to;
    // }    
}