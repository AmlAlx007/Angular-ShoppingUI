import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable()
export class CategoryService {
  
  constructor(private db:AngularFireDatabase) { }

  getCategory():AngularFireList<string>{
    return this.db.list('/category',query=> query.orderByChild('name'));
  }
}
