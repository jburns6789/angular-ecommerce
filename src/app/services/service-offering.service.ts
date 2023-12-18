import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceOffering } from '../common/service-offering';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceOfferingService {

  private baseUrl = environment.luv2shopApiUrl + '/service-offerings'; 
  
  constructor(private httpClient: HttpClient) { }

  getServiceList(): Observable<ServiceOffering[]> {

    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.serviceOfferings)
    );

  }

}

interface GetResponse {
  _embedded: {
    serviceOfferings: ServiceOffering[];

  }

}
