import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
    {
        path: 'cadastro',
        loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule)
    }
    ,{
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    }
    ,{
        path: '',
        loadChildren: () => import('./modules/caixa-de-entrada/caixa-de-entrada.module').then(m => m.CaixaDeEntradaModule)
        ,canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
    ,{
        path: '**'
        ,redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [AuthGuard]
})

export class AppRoutingModule{}