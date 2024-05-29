import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {MyContactListComponent} from "./pages/my-contact-list/my-contact-list.component";
import {MyTransactionsComponent} from "./pages/my-transactions/my-transactions.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {UserDashboardComponent} from "./pages/user-dashboard/user-dashboard.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {authGuard} from "./service/auth.guard";
import {AProposComponent} from "./components/a-propos/a-propos.component";
import {NewTransactionComponent} from "./pages/new-transaction/new-transaction.component";
import {NewContactComponent} from "./pages/new-contact/new-contact.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: MainPageComponent, canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'matr', component: MyTransactionsComponent },
      { path: 'macl', component: MyContactListComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'new-t', component: NewTransactionComponent },
      { path: 'new-c', component: NewContactComponent },
      { path: 'bk', component: AProposComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ] },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];
