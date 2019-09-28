import { Component } from "@angular/core";
import { PageDataService } from 'src/app/service/page.service';
import { HeaderDataService } from 'src/app/service/header.service';


@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css',
                './header-search.css']
})
export class HeaderComponent{

    tituloDaPagina = 'CMail';

    constructor(private pageService: PageDataService,
                private headerService: HeaderDataService){

        this.pageService.titulo
            .subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);

    }

    isMenuOpen = false;

    toogleMenu(){
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu(){
        this.isMenuOpen = false;
    }

    handleBuscaChanges({target}){
        this.headerService.atualizarTermoDeFiltro(target.value)
    }
}
