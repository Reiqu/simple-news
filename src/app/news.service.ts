import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {apikey} from '../environments/apikey';
import {catchError, retry} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
  constructor(private http: HttpClient) {
  }
  getNews(country: string, category: string) {
    return this.http.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: apikey.apiKey,
        country: country,
        category: category
      }
    }).pipe(
      retry(3),
      catchError(NewsService.handleError)
    );
  }
}
