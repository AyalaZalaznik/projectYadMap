import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeftData } from './shared/ileft';
import { righteData } from './shared/itab1';
import { tab2 } from './shared/itab2';
import { tab3 } from './shared/itab3';


@Injectable({
  providedIn: 'root'
})

export class AppService {
  url: string = 'http://localhost:49365/api/My/'
  constructor(private http: HttpClient) { }

  getLeftData(): Observable<LeftData> {
    return this.http.get<LeftData>("http://localhost:49365/api/My/GetData")
  }
  getRighteTab1(): Observable<righteData> {
    return this.http.get<righteData>("http://localhost:49365/api/My/GetDataRighte")
  }
  getRighteTab2(): Observable<tab2> {
    return this.http.get<tab2>("http://localhost:49365/api/My/GetTab2Data")
  }
  getRighteTab3(): Observable<tab3> {
    return this.http.get<tab3>("http://localhost:49365/api/My/GetTab3Data")
  }


}