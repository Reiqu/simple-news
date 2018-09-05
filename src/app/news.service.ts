import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {apikey} from '../environments/apikey';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }
  getNews(country: string, category: string) {
    return this.http.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: apikey.apiKey,
        country: country,
        category: category
      }
    });
  }
}
