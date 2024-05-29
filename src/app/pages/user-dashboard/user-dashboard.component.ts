import {Component, OnInit} from '@angular/core';
import {LightInfoComponent, LightInfoInput} from "../../components/light-info/light-info.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [LightInfoComponent, NgForOf],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent implements OnInit{

  accountInfoList: Array<LightInfoInput> = [];
  private accountBalance = 41560;
  private highestTransfer = 1100;
  private highestDeposit = 3250;

  ngOnInit(): void {
    this.initCompteInfo();
  }

  private initCompteInfo() {
    this.accountInfoList = [
      {
        title: 'Solde du compte',
        amount: this.accountBalance,
        infoStyle: 'bg-primary'
      },
      {
        title: 'Transfert le plus élevé',
        amount: this.highestTransfer,
        infoStyle: 'bg-warning'
      },
      {
        title: 'Dépôt le plus élevé',
        amount: this.highestDeposit,
        infoStyle: 'bg-success'
      }
    ];
  }
}
