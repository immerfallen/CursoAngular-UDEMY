import { Component } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter/filter-options.interface';

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

onStartDateChange(date: Date){
  console.log(date.getMonth());
}

onFilterClick(filter:IFilterOptions){
  console.log(filter);
}

}
