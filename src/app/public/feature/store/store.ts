import { Component,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ChangeDetectionStrategy} from '@angular/core';
import { PriceService, PriceResponse } from '../price/price';



// Destination is enum in bacakend, does this need to be changed?. Kysympähän vaan tulevaisuutta varten itseltäni!?
/* interface Destination {
  name: String;
  viewValue: String;
} */

enum DestinationEnum{
  HEAVEN = "HEAVEN",
  HELL = "HELL"
}

enum SeatClassEnum {
  A = 'A',
  B = 'B',
  C = 'C'
}

@Component({
  selector: 'app-store',
  imports: [
    RouterOutlet,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  templateUrl: './store.html',
  styleUrl: './store.css',
  
})
export class Store {
  minDate = new Date();
  departureDate?: Date;
  price?: number;
  currency?: string;
  isLoadingPrice = false;

  selectedDestination?: 'HEAVEN' | 'HELL';
  selectedSeatClass?: 'A' | 'B' | 'C';
  selectedSeat?: number;

  destinations = [
    { name: DestinationEnum.HEAVEN, viewValue: 'Heaven' },
    { name: DestinationEnum.HELL, viewValue: 'Hell' },
  ];

  constructor(private priceService: PriceService) {}
  fetchPriceIfReady() {
    if (!this.selectedDestination || !this.selectedSeatClass || !this.departureDate) {
      this.price = undefined;
      this.currency = undefined;
      return;
    }

    const request = {
      realmType: this.selectedDestination,
      seatClass: this.selectedSeatClass,
      departureDate: this.departureDate.toISOString().split('T')[0]
    };

    this.isLoadingPrice = true;

    this.priceService.calculatePrice(request).subscribe({
      next: (res) => {
        this.price = res.price;
        this.currency = res.currency;
        this.isLoadingPrice = false;
        console.log('Price fetched:', res); // ← helpful
      },
      error: (err) => {
        console.error('Price fetch failed:', err);           // ← this will show real error!
        if (err.status === 0) {
          console.error('Likely CORS or network issue');
        }
        this.price = undefined;
        this.currency = undefined;
        this.isLoadingPrice = false;
      }
    });
  }

  seats = Array.from({ length: 30 }, (_, i) => i + 1); // [1..30]


  
}

