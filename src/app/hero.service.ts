import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES} from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);//of(HEROES) は ひとつの値、すなわちモックヒーローの配列を出力する Observable<Hero[]> を返します
    this.messageService.add('HeroService: fetched heroes')
    return heroes;//出力された配列をコールバックに渡し、コンポーネントの heroes プロパティを設定します。
  }

  constructor(private messageService:MessageService) { }
}
