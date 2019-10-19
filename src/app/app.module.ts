import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { TranslateModule, MissingTranslationHandler, TranslateLoader } from '@ngx-translate/core';
import { CustomMissingTranslationHandler } from './services/custom-missing-translation-handler.service';
import { CustomTranslateLoaderService } from './services/custom-translate-loader.service';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler
      },
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoaderService
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
