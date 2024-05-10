import { NgModule } from '@angular/core';
import { PhonePipe } from './phone.pipe';

@NgModule({
  exports: [PhonePipe],  
  declarations: [PhonePipe],
})
export class PipesModule {}
