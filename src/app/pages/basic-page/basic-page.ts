import { AvailableLocale, LocaleService } from './../../services/locale.service';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
  ],
  templateUrl: './basic-page.html',
})
export default class BasicPage {

  LocaleService = inject(LocaleService);
  currentlocale = signal(inject(LOCALE_ID));

  nameLower = signal('juan')
  nameUpper = signal('JUAN')
  fullName = signal('JuAn iGnAcIo')


  customDate = signal(new Date())

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date())
    },1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  })

  changueLocale(locale:AvailableLocale){
    console.log('Changing locale to:', locale);
    this.LocaleService.changeLocale(locale);
  }
}
