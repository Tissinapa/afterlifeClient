import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PriceRequest {
  realmType: 'HEAVEN' | 'HELL';
  seatClass: 'A' | 'B' | 'C';
  departureDate: string; // ISO date string
}
export interface PriceResponse {
  price: number;
  currency: string;
}

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  private apiUrl = 'http://localhost:8080/api/prices'

  constructor(private http: HttpClient) { }
  calculatePrice(request: PriceRequest): Observable<PriceResponse> {
    return this.http.post<PriceResponse>(this.apiUrl, request);
  }
  
}
