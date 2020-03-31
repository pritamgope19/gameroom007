import {Injectable} from "@angular/core";
import {HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler){
    console.log("Auth intercept provider");
    return next.handle(request);
  }
}