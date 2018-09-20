import {Component, OnInit, ɵcmf} from '@angular/core';
import { NewsService } from '../news.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './germany.component.html',
  styleUrls: ['./germany.component.css']
})
export class GermanyComponent implements OnInit {
  news: any = [];
  cookieCategory;
  cookie1;

  constructor(private newsservice: NewsService, private cookieService: CookieService) {}

  showNews(country: string, category: string) {
    this.newsservice.getNews(country, category)
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
      this.showNews('de', this.cookieCategory);
  }
}
