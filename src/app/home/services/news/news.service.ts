import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { config } from '../../../../config';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { INews } from './news.interface';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    constructor (private http: HttpClient) {}

    headLines(): Observable<INews[]> {
        return this.http.get<INews[]>(`${config.api.rsstojson}?rss_url=${config.api.medium}`).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error
            errorMessage = `An error occored: ${err.error.message}`;
        } else {
            // backend return error
            errorMessage = `Server retuened code: ${err.status} and message ${err.message}`;
        }

        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
