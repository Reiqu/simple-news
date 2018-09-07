import {Component, OnInit, ɵcmf} from '@angular/core';
import { NewsService } from '../news.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: any = [];
  cookieCategory;
  cookieCountry;
  cookie1;
  cookie2;

  constructor(private newsservice: NewsService, private cookieService: CookieService) {}

  showNews(country: string, category: string) {
    this.newsservice.getNews(country, category)
      .subscribe(data => {
        return this.news = Object.values(data)[2];
      });
  }

  selectCountry(country) {
    this.cookieService.delete('cookieCountry');
    this.cookieService.set('cookieCountry', country);
  }
  selectCategory(category) {
    this.cookieService.delete('cookieCategory');
    this.cookieService.set('cookieCategory', category);
  }
    ngOnInit() {
    this.cookie1 = this.cookieService.get('cookieCategory');
    this.cookie2 = this.cookieService.get('cookieCountry');

    if (this.cookieService.check('cookieCategory') && this.cookieService.check('cookieCountry') != null) {
      this.cookieCountry = this.cookieService.get('cookieCountry');
      this.cookieCategory = this.cookieService.get('cookieCategory');
    } else {
      this.cookieService.set('cookieCountry', 'de');
      this.cookieService.set('cookieCategory', 'business');
    }
      this.showNews(this.cookieCountry, this.cookieCategory);
  }
}
