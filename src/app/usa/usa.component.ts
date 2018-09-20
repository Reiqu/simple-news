import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent implements OnInit {
  news: any = [];
  cookieCategory;
  cookie1;

  constructor(private newsservice: NewsService, private cookieService: CookieService) {}

  showNews(category: string) {
    this.newsservice.getNews('us', category)
      .subscribe(data => {
        return this.news = Object.values(data)[2];
      });
  }
  selectCategory(category) {
    this.cookieService.delete('cookieCategory');
    this.cookieService.set('cookieCategory', category);
  }
  ngOnInit() {
    this.cookie1 = this.cookieService.get('cookieCategory');

    if (this.cookieService.check('cookieCategory')) {
      this.cookieCategory = this.cookieService.get('cookieCategory');
    } else {
      this.cookieService.set('cookieCategory', 'business');
    }
    this.showNews(this.cookieCategory);
  }
}
