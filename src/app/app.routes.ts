import { Routes } from '@angular/router';
import { MenuComponent} from "./components/menu/menu.component";
import {LoginComponent} from "./pages/login/login.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {MyContactListComponent} from "./pages/my-contact-list/my-contact-list.component";
import {MyTransactionsComponent} from "./pages/my-transactions/my-transactions.component";
import {ProfileComponent} from "./pages/profile/profile.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'menu', component: MenuComponent },
  { path: 'mldc', component: MyContactListComponent},
  { path: 'mts', component: MyTransactionsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent}


];
