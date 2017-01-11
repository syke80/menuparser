import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { IndexPageComponent } from './components/indexPage.component';
import { MenuService } from './services/menu.service';

@NgModule({
  imports: [
      NgbModule.forRoot(),
      BrowserModule,
      HttpModule,
      routing,
      FormsModule
  ],
  declarations: [
      AppComponent,
      IndexPageComponent
  ],
  providers: [
      MenuService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
