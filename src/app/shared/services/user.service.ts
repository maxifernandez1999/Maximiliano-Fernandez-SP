import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersRef: AngularFirestoreCollection;
  constructor(private firestore: AngularFirestore) {
    this.usersRef = firestore.collection('users');;
  }
  public addUser(user:User):Promise<any>{
    return this.usersRef.add({...user});
  }
  public getUsers():Observable<User[]>{
    return this.usersRef.valueChanges() as Observable<User[]>;
  }
}
