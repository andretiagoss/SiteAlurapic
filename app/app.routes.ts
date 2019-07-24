import { RouterModule, Routes} from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

const appRoutes : Routes = [
    //Configuração das rotas (redicionamentos dos componentes)
    {path: '', component: ListagemComponent },
    {path: 'cadastro', component: CadastroComponent}, //inclusão de fotos
    {path: 'cadastro/:id', component: CadastroComponent}, //alteração de fotos
    {path: '**', component: ListagemComponent}
];

//Compila e exporta as rotas.
export const routing = RouterModule.forRoot(appRoutes);