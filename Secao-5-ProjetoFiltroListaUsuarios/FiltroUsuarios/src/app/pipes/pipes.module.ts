import { NgModule } from '@angular/core';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';

@NgModule({
  exports: [PhonePipe, AddressPipe, StatusPipe],  
  declarations: [PhonePipe, AddressPipe, StatusPipe],
})
export class PipesModule {}
