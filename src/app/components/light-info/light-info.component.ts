import {Component, Input} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {CommonModule} from "@angular/common";
import {NgClass} from "@angular/common";

export interface LightInfoInput {
  title?: string;
  amount?: number;
  infoStyle?: 'bg-primary' | 'bg-success' | 'bg-warning' | 'bg-danger';
}

@Component({
  selector: 'app-light-info',
  standalone: true,
  imports: [
    CurrencyPipe, CommonModule, NgClass
  ],
  templateUrl: './light-info.component.html',
  styleUrl: './light-info.component.scss'
})
export class LightInfoComponent {
  @Input() infoInput: LightInfoInput = {};

}
