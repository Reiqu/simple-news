import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GermanyComponent } from './germany/germany.component';
import {UkComponent} from './uk/uk.component';
import {UsaComponent} from './usa/usa.component';
import {InfoComponent} from './info/info.component';
import {AccountComponent} from './account/account.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/germany', pathMatch: 'full'},
  { path: 'germany', component: GermanyComponent},
  { path: 'uk', component: UkComponent},
  { path: 'usa', component: UsaComponent},
  { path: 'info', component: InfoComponent},
  { path: 'account', component: AccountComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
