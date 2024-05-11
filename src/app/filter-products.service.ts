import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterProductsService {
  private selectedCategorySubject = new BehaviorSubject<string>('All');
  selectedService$:Observable<string> = this.selectedCategorySubject.asObservable();
  constructor() { }
  updateCategory(category: string) {
    this.selectedCategorySubject.next(category);
  }
}
