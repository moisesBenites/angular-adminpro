import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboarComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountsettingsComponent
    ], exports: [
        DashboarComponent,
        ProgressComponent,
        Graficas1Component
    ], imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule {}
