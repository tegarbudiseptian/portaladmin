import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
 
@Component({
    // moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
    }
}