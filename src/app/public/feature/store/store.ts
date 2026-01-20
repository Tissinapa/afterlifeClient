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


// Destination is enum in bacakend, does this need to be changed?. Kysympähän vaan tulevaisuutta varten itseltäni!?
/* interface Destination {
  name: String;
  viewValue: String;
} */

enum DestinationEnum{
  HEAVEN = "HEAVEN",
  HELL = "HELL"
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

  selectedDestination?: DestinationEnum;
  selectedSeat?: number;

  destinations = [
    { name: DestinationEnum.HEAVEN, viewValue: 'Heaven' },
    { name: DestinationEnum.HELL, viewValue: 'Hell' },
  ];

  seats = Array.from({ length: 30 }, (_, i) => i + 1); // [1..30]

}

