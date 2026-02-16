import { Component } from '@angular/core';
import { CountryCode } from '../../models/country-code';
import country_json from '../../../assets/currency_code.json';


@Component({
  selector: 'conversion-form',
  imports: [],
  templateUrl: './conversion-form.html',
  styleUrl: './conversion-form.css',
})
export class ConversionForm {
  dropdown_icon : string = '/icons/dropdown_icon.svg';
  selected_country_from : string = '--From--';
  selected_country_to : string = '--to--';
  drop_down_status : string = "false";
  code_list_status : string = "code-list-inactive";
  country_code_items: CountryCode[] = country_json as CountryCode[];
  
  selectCurrency(event : Event): void {
    event.preventDefault();
  if (this.code_list_status === "code-list-inactive") {
    this.code_list_status = "code-list-active";
  } else {
    this.code_list_status = "code-list-inactive";
  }
}


  
}
