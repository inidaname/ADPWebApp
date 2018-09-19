import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../config';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    constructor (private http: HttpClient) {}

    headLines() {
        return this.http.get(config.api.rsstojson + '?rss_url=' + config.api.medium);
    }
}
