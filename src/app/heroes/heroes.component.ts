import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?:Hero;
  heroes: Hero[] = [];

  getHeroes(): void{
    this.heroService.getHeroes()//Observable<Hero[]>を返す
      .subscribe(heroes => this.heroes = heroes); //Observable.subscribe()　：出力された配列をコールバックに渡し、コンポーネントの heroes プロパティを設定します。
  }

  constructor(private heroService:HeroService, //HeroService をinjectionする場所として認識される
    private messageService:MessageService) {
  }

  ngOnInit(){
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroComponent: Selected hero id=${hero.id}`)
  }

}
