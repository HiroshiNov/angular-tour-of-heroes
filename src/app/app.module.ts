import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ //コンポーネントを生成すると自動で宣言が追加
    AppComponent,
    HeroesComponent
  ],
  imports: [ //アプリケーションに必要な外部モジュールのリスト
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
