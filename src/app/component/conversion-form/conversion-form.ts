import { Component } from '@angular/core';
import { CountryCode } from '../../models/country-code';
import country_json from '../../../assets/currency_code.json';
import { CommonModule } from '@angular/common';

@Component({ selector: 'conversion-form', 
  imports: [CommonModule], 
  templateUrl: './conversion-form.html', 
  styleUrl: './conversion-form.css', 
})
export class ConversionForm {

  dropdown_icon: string = '/icons/dropdown_icon.svg';

  selected_country_from: string = '--From--';
  selected_country_to: string = '--To--';

  isFromOpen: boolean = false;
  isToOpen: boolean = false;

  country_code_items: CountryCode[] = country_json as CountryCode[];

  selectCurrencyFrom(event: Event): void {
    event.preventDefault();
    this.isFromOpen = !this.isFromOpen;
    this.isToOpen = false; 
  }

  selectCurrencyTo(event: Event): void {
    event.preventDefault();
    this.isToOpen = !this.isToOpen;
    this.isFromOpen = false; 
  }

  chooseFrom(code: string): void {
    this.selected_country_from = code;
    this.isFromOpen = false;
  }

  chooseTo(code: string): void {
    this.selected_country_to = code;
    this.isToOpen = false;
  }
}