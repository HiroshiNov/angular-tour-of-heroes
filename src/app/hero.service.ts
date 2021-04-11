import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES} from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);//of(HEROES) は ひとつの値、すなわちモックヒーローの配列を出力する Observable<Hero[]> を返します
    return heroes;//出力された配列をコールバックに渡し、コンポーネントの heroes プロパティを設定します。
  }

  constructor() { }
}
