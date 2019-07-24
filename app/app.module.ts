import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map'; //ao somente carregar esse modulo, ele modifica a definição de um Observable adicionando o map nele.
import { PainelModule} from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BotaoModule } from './botao/botao.module';
import { ModalModule } from './modal/modal.module'; 

@NgModule({
    imports: [ //importação das dependencias do modulo
        BrowserModule, //Modulo importado para renderizar no browser a view de inicialização definida no metadado Bootstrap. 
        FotoModule, //com a importação do modulo FotoModule, será possivel utilizar o FotoComponent exportado pelo FotoModule.
        HttpModule, //Modulo importado pois contem o provider do Http injetado no construtor da classe AppComponent.
        PainelModule,
        routing,
        FormsModule, //o FormsModule permite utilizar a diretiva NgModule para fazer two-wey data binding de atributos da pagina.
        ReactiveFormsModule, // o ReactiveFormsModule permite efetuar validações de componentes no lado do modelo.
        BotaoModule,
        ModalModule
    ],
    declarations:[ //declaração de quais componentes pertence ao modulo.
        AppComponent, 
        CadastroComponent, 
        ListagemComponent 
    ],
    bootstrap: [ //definição de qual componentente será inicializado (boot) na aplicação.
        AppComponent 
    ]
})
export class AppModule{}