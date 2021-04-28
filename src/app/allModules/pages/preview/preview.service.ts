import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Common, email } from 'app/models/project';
// import { Q_Projects } from 'app/models/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  constructor(private http: HttpClient) { }
  errorHandler(httpErrorResponse: HttpErrorResponse): Observable<string> {
    return throwError(httpErrorResponse.error || httpErrorResponse.message || 'Something Went Wrong');
  }
  private baseUrl = 'http://localhost:55997/';
  postdatatoQ_Project(doc: any): Observable<any> {
    console.log("doc", doc);

    // return this.http.post<any>(this.baseUrl + "api/Create/AddQ_Project", doc);
    return this.http.post<any>(this.baseUrl + "api/Create/AddQ_Project", doc, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    })

    
  }
  PostEmailData(comm:any): Observable<any | Common>{
    var email1={
      EmailID:comm.email1,
      EmailIDD:comm.email2
    }
    // return this.http.post<any>(`http://localhost:55997/api/Email/SendEmail`,abc)
    return this.http.post<any>(this.baseUrl + "api/Email/sendmail1",email1,{
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    })
    .pipe(catchError(this.errorHandler));
    
  }

  GetRoleWithEmail(): Observable<any | string>{
    return this.http.get<any>(`http://localhost:7010/authenticationapi/Master/GetRoleWithEmail`)
    
  }
}
