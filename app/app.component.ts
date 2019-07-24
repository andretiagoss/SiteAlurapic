import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id, //Permite passar o caminho relativo dos templates, ou seja, busca o template no prorio diretorio do componente.
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    
}