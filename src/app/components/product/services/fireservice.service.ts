import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  constructor(private firestorage:AngularFirestore) { }

  create_product(product) {
    return this.firestorage.collection('Products').add(product);
  }

  get_Allregister()
  {
    return this.firestorage.collection('Products').snapshotChanges();
  }
 
  update_product(id:string,product:Product)
  {
  return this.firestorage.doc('Products/' + id).update(product);
  }

  delete_product(id:string)
  {
    return this.firestorage.doc('Products/' + id).delete();
  }

}
