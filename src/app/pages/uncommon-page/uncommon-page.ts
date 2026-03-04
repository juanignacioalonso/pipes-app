import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval,map,tap } from 'rxjs';

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
  imports: [Card,I18nSelectPipe,I18nPluralPipe,SlicePipe,JsonPipe,UpperCasePipe,KeyValuePipe,TitleCasePipe,AsyncPipe],
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

//18n Plural

clientsMap = signal({
  '=0': 'no tenemos ningun cliente esperando.',
  '=1': 'hay un cliente esperando.',
  '=2': 'hay dos clientes esperando.',
  'other': 'hay # clientes esperando.'
});

clients = signal(['Maria','Pedro','Juan','Ana','Luis','Lucia','Carlos','Julieta', 'Julian', 'Sofia']);

deleteClient(){
  this.clients.update( prev => prev.slice(1) );
}


//KeyValue Pipe

profile = signal({
  name: 'Juan',
  age: 38,
  address: 'Argentina, Cordoba',
});

//Async Pipe
promiseValue: Promise<string> = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve('Tenemos data de promesa');
    console.log('Promesa finalizada');
  }, 3500);

});

myObservableTimer = interval(2000).pipe(
  map(value => value + 1),
  tap(value => console.log('Tap: ', value))
)


}
