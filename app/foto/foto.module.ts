import { NgModule } from '@angular/core'
import { FotoComponent } from './foto.component'
import { FiltroPorTitulo } from './foto.pipes';
import { FotoService } from './foto.service';

@NgModule({
    declarations: [ FotoComponent, FiltroPorTitulo ], //declaração de quais componentes pertence ao modulo
    exports: [ FotoComponent, FiltroPorTitulo ], //definição de qual componente deseja exportar para outros modulos
    providers: [ FotoService ] //Definição dos itens que estarão disponiveis para injeção de dependência.
})
export class FotoModule { }