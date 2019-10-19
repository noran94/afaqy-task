import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLang;
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.currentLang = this.translate.getDefaultLang();
  }
  switchLang(lang){
    this.translate.setDefaultLang(lang);
    this.currentLang = lang;
    if (lang === 'ar') {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  }
}
