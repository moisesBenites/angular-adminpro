import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';



const pagesRoutes: Routes = [
    {
        path : '', 
        component: PagesComponent,
        children: [
            {path : 'dashboard', component: DashboarComponent},
            {path : 'progress', component: ProgressComponent},
            {path : 'graficas1', component: Graficas1Component},
            {path : 'account-settings', component: AccountsettingsComponent},
            {path : '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)