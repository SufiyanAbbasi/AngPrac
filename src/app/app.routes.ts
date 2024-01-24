import { Routes } from '@angular/router';
import { DirectivepracComponent } from './directiveprac/directiveprac.component';
import { ItemListComponent } from './item-list/item-list.component';
import { EmpadminComponent } from './empadmin/empadmin.component';

export const routes: Routes = [
    { path: 'directprac', component: DirectivepracComponent },
    { path: 'appitem', component: ItemListComponent },
    { path: 'empadmin', component: EmpadminComponent }
];
