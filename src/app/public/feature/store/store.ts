import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


// Destination is enum, does this need to be changed?. Kysympähän vaan tulevaisuutta varten itseltäni?
interface Destination {
  name: String;
  viewValue: String;
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
    MatSelectModule
  ],
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store {
  minDate = new Date();
  departureDate?: Date;

  destinations: Destination[] = [
    {name: 'heaven', viewValue: 'Heaven'},
    {name: 'hell', viewValue: 'Hell'},
  ];
}

