import { Component, OnInit, Input} from '@angular/core';//＠Inputデコレータを使うためにInput追記
import { Hero } from '../hero'; 

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero; //外部のHeroesComponentで<app-hero-detail [hero]="selectedHero">と記載する。このよう外部からheroオブジェクトを受け取る場合はプロパティに@Inputデコレータが必要
  constructor() { }

  ngOnInit(): void {
  }

}
