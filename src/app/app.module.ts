import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  }    from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backends';
 
import { routing }        from './app.routing';
 
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AlertService, AuthenticationService, UserService, AgentService } from './_services/index';
import { AppConfig } from './app.config';
import { AppComponent }  from './app.component';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AlertComponent } from './_directives/alert.component';
import { HeaderComponent } from './web/header/header.component';
import { FeatherIconsModule } from './core/modules/feather-icons/feather-icons.module';
import { NavigationBarComponent } from './web/navigation-bar/navigation-bar.component';
import { DataOneComponent } from './web/tes/data-one/data-one.component';
import { AddDataOneComponent } from './web/tes/data-one/add-data-one/add-data-one.component';
import { UpdateDataOneComponent } from './web/tes/data-one/update-data-one/update-data-one.component';

// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        HttpModule,
        FeatherIconsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AlertComponent,
        HeaderComponent,
        NavigationBarComponent,
        DataOneComponent,
        AddDataOneComponent,
        UpdateDataOneComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        AgentService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        { 
            provide: HTTP_INTERCEPTORS, 
            useClass: ErrorInterceptor, 
            multi: true },
        AppConfig,
        AlertService
        // providers used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}