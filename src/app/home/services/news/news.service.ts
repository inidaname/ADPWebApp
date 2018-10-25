import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../../config';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    constructor (private http: HttpClient) {}

    headLines() {
        const news = this.http.get(config.api.api + '/news/');
        return news;
    }
}
