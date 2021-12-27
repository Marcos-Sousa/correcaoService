

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })

export class CidadeService {
  // public url = 'https://localhost:44355/api/';

  constructor(private http: HttpClient) { }

  buscarTodas(): Observable<any[]> {
    const url = `https://localhost:44355/api/cidade/buscarTodas`;
    return this.http.get<any[]>(url);
  }
}
