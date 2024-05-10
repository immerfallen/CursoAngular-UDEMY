import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter/filter-options.interface';
import { filter } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  statusList = [
    {
      value: true,
      viewValue: 'Ativo',
    },
    {
      value: false,
      viewValue: 'Inativo',
    },
  ];
filterOptions: IFilterOptions = {
  name: undefined,
  startDate: undefined,
  endDate: undefined,
  status: undefined
}

@Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>();

onFilterClick(){
  this.onFilterEmitt.emit(this.filterOptions);
}

}
