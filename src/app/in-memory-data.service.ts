import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Darkvaider' },
      { id: 13, name: 'Binbag' },
      { id: 14, name: 'Tablesat' },
      { id: 15, name: 'Blucap' },
      { id: 16, name: 'Pillfort' },
      { id: 17, name: 'Green Pun' },
      { id: 18, name: 'Christina' },
      { id: 19, name: 'Lapeon' },
      { id: 20, name: 'Magnetiina' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}