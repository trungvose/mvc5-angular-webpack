import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core'

export function main(appModule) {
    enableProdMode();
    return platformBrowserDynamic().bootstrapModule(appModule);
}

export function boostrap(appModule) {
    if (document.readyState === 'complete') {
        main(appModule);
    } else {
        document.addEventListener('DOMContentLoaded', main.bind(null, appModule));
    }
}