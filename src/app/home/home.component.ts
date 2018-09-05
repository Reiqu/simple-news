import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: any = [];
  constructor(private newsservice: NewsService) {
  }
  showNews(country: string, category: string) {
    this.newsservice.getNews(country, category)
      .subscribe(data => {
        return this.news = Object.values(data)[2];
      });
  }

    ngOnInit() {
    this.showNews('de', 'business');
  }
}
