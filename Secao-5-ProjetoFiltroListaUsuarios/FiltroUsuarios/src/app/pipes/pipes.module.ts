import { NgModule } from '@angular/core';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';

@NgModule({
  exports: [PhonePipe, AddressPipe],  
  declarations: [PhonePipe, AddressPipe],
})
export class PipesModule {}
