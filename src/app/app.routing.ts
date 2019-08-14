import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { DataOneComponent } from './web/tes/data-one/data-one.component';
import { AddDataOneComponent } from './web/tes/data-one/add-data-one/add-data-one.component';
import { UpdateDataOneComponent } from './web/tes/data-one/update-data-one/update-data-one.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'data-1', component: DataOneComponent },
    { path: 'add-data-1', component: AddDataOneComponent},
    { path: 'update-data-1', component: UpdateDataOneComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);