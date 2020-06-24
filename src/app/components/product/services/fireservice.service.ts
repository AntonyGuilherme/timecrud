import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(private firestorage:AngularFirestore) { }

  create_product(product) {
    return this.firestorage.collection('Product').add(product);
  }
 

}
