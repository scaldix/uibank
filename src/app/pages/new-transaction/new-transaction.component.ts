import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transaction',
  standalone: true,
  imports: [],
  templateUrl: './new-transaction.component.html',
  styleUrl: './new-transaction.component.scss'
})
export class NewTransactionComponent {
  amount: number = 41560;

}
