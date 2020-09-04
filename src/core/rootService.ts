import { apiUrl } from 'config/apiUrl';
import { HttpService } from 'common/services/httpService';
import { HeroesService } from 'modules/heroes/services';

export const httpService = new HttpService(apiUrl);
export const heroesService = new HeroesService(httpService);
