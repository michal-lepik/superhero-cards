import { from, Observable } from 'rxjs';

import { HttpError } from '../models/HttpError';
import { HttpMethod } from '../models/HttpModels';

export class HttpService {
    constructor(private readonly apiUrl: string) {}

    GET<T>(path: string) {
        return this.makeRequest<T>(path, HttpMethod.GET);
    }

    makeRequest<T>(path: string, method: HttpMethod): Observable<T> {
        const url = `https://cors-anywhere.herokuapp.com/${this.apiUrl}${path}`;

        const headers = {
            'content-type': 'application/json',
        };

        const params = {
            method,
            headers,
        };

        return from(
            fetch(url, params).then(async res => {
                if (res.ok && res.status === 200) {
                    return res.json();
                }

                throw new HttpError(res.statusText, res.status);
            }),
        );
    }
}
