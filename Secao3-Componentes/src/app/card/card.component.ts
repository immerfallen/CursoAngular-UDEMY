import { Component, Input } from '@angular/core';

interface IPlano{
  infos: IInfos;
}
interface IInfos {
  tipo: string;
  preco: number
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input('planTypeAlias') planType: string = '';
  @Input({required: true}) planPrice: number = 0;

  buttonClicked(valueEmitted: boolean){
    console.log('evento do filho no pai', valueEmitted)
  }
 }

