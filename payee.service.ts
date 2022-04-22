import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payee } from './payee/Payee';

@Injectable({
  providedIn: 'root'
})
export class PayeeService {

  constructor(private myhttp:HttpClient) { }
  fetchall():Observable<Payee[]>
  {return this.myhttp.get<Payee[]>("http://localhost:8080/payees/");
  
  }


}
