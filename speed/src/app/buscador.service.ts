import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { Status } from './store/models/status';
import { Observable, of } from 'rxjs';
import { Criterio } from './store/models/Criterio';
import { Agency } from './store/models/agency';
import { MissionType } from './store/models/mission-type';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  public launches: any[];
  private key = 'launches';

  private urlStatus = 'assets/data/launchstatus.json';
  private urlAgencias = 'assets/data/agencies.json';
  private urlTipos = 'assets/data/missiontypes.json';
  private urlLanzamientos = 'assets/data/launches.json';

  criterios: Criterio[] = [
    { 'id': 1, 'name': 'Estado' },
    { 'id': 2, 'name': 'Agencias' },
    { 'id': 3, 'name': 'Tipo' }
  ];

  constructor(private http: HttpClient) {
   }

   getLaunches = (): Observable<any[]> =>
   this.http.get(this.urlLanzamientos).pipe(map((res: any) => res.launches));


   getStatus() {
    return this.http.get<Status>(this.urlStatus)
      .pipe( map( data => data['types'] ));
  }

  getAgencias(): Observable<any> {
    return this.http.get<Agency>(this.urlAgencias)
      .pipe( map( data => data['agencies'] ));
  }

  getTipos(): Observable<any> {
    return this.http.get<MissionType>(this.urlTipos)
    .pipe( map( data => data['types'] ));
  }

  getCriterios() {
    return this.criterios;
  }
}
