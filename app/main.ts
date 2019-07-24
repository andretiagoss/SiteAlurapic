import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //utilizado para carregar o primeiro módulo da aplicação.
import { AppModule} from './app.module'; 
const platform  = platformBrowserDynamic();
platform.bootstrapModule(AppModule); //Definindo o AppModule para inicializar a aplicação