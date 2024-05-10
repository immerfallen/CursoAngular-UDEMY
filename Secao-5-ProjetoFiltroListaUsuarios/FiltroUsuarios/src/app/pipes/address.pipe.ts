import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const INVALID_ADDRESS = 
    !address || 
    !address.cidade || 
    !address.estado || 
    address.numero == null || address.numero === undefined 
    !address.rua;

    if(INVALID_ADDRESS)
      return 'Endereço inválido.'

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
  }

}
