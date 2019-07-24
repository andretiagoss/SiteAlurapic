"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic'); //utilizado para carregar o primeiro módulo da aplicação.
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule); //Definindo o AppModule para inicializar a aplicação
//# sourceMappingURL=main.js.map