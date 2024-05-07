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


  @Input({alias: 'planTypeAlias', transform: (value: string)=> value.toUpperCase()}) planType: string = '';
  /*
  private _planType: string = '';

  @Input('planTypeAlias') 
  set planType(value: string){
    this._planType = value.toUpperCase();
  };
  get planType(): string{
    return this._planType;
  }
  */

  @Input({required: true}) planPrice: number = 0;

  

  buttonClicked(valueEmitted: boolean){
    console.log('evento do filho no pai', valueEmitted)
  }
  handlePlanType(value: string){
this.planType = value
  }
 }

