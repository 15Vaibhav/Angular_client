import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
items: Observable<any[]>;




  constructor(clientData:AngularFireDatabase) {
    this.items= clientData.list('/clients').valueChanges()
}
getData(){
  console.log('service run...')
  return this.items;
}
}
