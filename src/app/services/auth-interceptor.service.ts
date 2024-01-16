import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { Observable, from, lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request,next));
  }
  private async handleAccess(request: HttpRequest<any>, next: HttpHandler) : Promise<HttpEvent<any>> {
    

    // Only add an access token for secured endpoints

    const theEndpoint = environment.luv2shopApiUrl + '/orders';
    const securedEndpoints = [theEndpoint];

    if (securedEndpoints.some(url => request.urlWithParams.includes(url))) {

      // get access token
      const accessToken =  this.oktaAuth.getAccessToken();

      // clone the request and add new header with access token
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + accessToken
        }
      });

         
    }
    

    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origins' : '*' 
      }
    });

    //request.headers.set('Access-Control-Allow-Origin','*');
    

     

    //attemping cors
    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origins' : '*' 
      }
    });

    return await lastValueFrom(next.handle(request));
  }
}
