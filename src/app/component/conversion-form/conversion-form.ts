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
  country_code_items: CountryCode[] = country_json as CountryCode[];
  ngOnInit() : void{
    for(var item of this.country_code_items){
      console.log(`{item.country} : {item.currency_code}`);
    }
    
  }
}
