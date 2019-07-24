import { Component, Input } from '@angular/core'

@Component({
    moduleId: module.id, //Permite passar o caminho relativo dos templates, ou seja, busca o template na prorio diretorio do componente.
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})
export class FotoComponent{
    //declaração de propriedades na classe. 
    //Com o decorator Input as propriedades aceitam valores (somente leitura)
    @Input() titulo : string; 
    @Input() url : string;
    descricao : string;
    _id: string;
}