import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent} from "./components/menu/menu.component";
import { LoginComponent} from "./pages/login/login.component";
import { PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {MyContactListComponent} from "./pages/my-contact-list/my-contact-list.component";
import {MyTransactionsComponent} from "./pages/my-transactions/my-transactions.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {UserDashboardComponent} from "./pages/user-dashboard/user-dashboard.component";
import {LightInfoComponent} from "./components/light-info/light-info.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {AProposComponent} from "./components/a-propos/a-propos.component";
import {NewTransactionComponent} from "./pages/new-transaction/new-transaction.component";
import {NewContactComponent} from "./pages/new-contact/new-contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, LoginComponent, PageNotFoundComponent, MyContactListComponent,
  MyTransactionsComponent, ProfileComponent, UserDashboardComponent, LightInfoComponent,
  MainPageComponent, AProposComponent, NewTransactionComponent, NewContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-bank';
}
