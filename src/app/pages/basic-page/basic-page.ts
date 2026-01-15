import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe
  ],
  templateUrl: './basic-page.html',
})
export default class BasicPage {

  nameLower = signal('juan')
  nameUpper = signal('JUAN')
  fullName = signal('JuAn iGnAcIo')
}
