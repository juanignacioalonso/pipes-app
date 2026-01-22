import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nSelectPipe } from '@angular/common';


const client1 = {
  name: 'Juan Alonso',
  gender:'male',
  age: 38,
  address: 'Argentina, Cordoba',
}

const client2 = {
  name: 'Mariela Rivas',
  gender:'female',
  age: 34,
  address: 'Argentina, Cordoba',
}


@Component({
  selector: 'app-uncommon-page',
  imports: [Card,I18nSelectPipe],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {

// i18nSelect
client = signal(client1);

invitationMap ={
  male: 'invitarlo',
  female: 'invitarla',
}

changeClient(){
  if (this.client()=== client1){
    this.client.set(client2)
    return;
  }

  this.client.set(client1);
}

}
