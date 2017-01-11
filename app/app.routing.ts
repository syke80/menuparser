import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent } from './components/indexPage.component';

const appRoutes: Routes = [
    {
        path: '',
        component: IndexPageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
