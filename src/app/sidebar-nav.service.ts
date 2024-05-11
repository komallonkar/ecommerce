import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarNavService {
 private _sidebarOpen = new BehaviorSubject<boolean>(true);
  constructor() { }
  toggle(){
    this._sidebarOpen.next(!this._sidebarOpen.value);   

  }
  get sidebarOpen() : Observable<boolean>{
    return this._sidebarOpen.asObservable();
  }
}
