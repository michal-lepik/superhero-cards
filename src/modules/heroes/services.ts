import { map } from 'rxjs/operators';
import camelCaseKeys from 'camelcase-keys';

import { HttpService } from 'common/services/httpService';
import { Hero } from './models/Hero';

export class HeroesService {
    constructor(private readonly httpService: HttpService) {}

    getHero(id: number) {
        return this.httpService
            .GET<Hero>(`/${id}`)
            .pipe(map(heroData => camelCaseKeys(heroData, { deep: true })));
    }
}
