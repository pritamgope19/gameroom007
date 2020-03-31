import { Injectable } from '@angular/core';

/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {
  authToken: any = {
    "Client ID":"dcd8a34a376f92cf691598f6356dc691b891b3406bb4.api.hackerearth.com",
    "Client Secret": "4537e0503f01b49422077901dd5d9963667b7c25"
  }
  getAuthorizationToken() {
    // return 'some-auth-token';
    return this.authToken;
  }
}
