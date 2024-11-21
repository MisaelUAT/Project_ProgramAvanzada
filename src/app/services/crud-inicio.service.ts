import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudInicioService {

  constructor(private db: AngularFirestore) { }

  URL!: any;
  registros: any;

  Create_Coleccion(Coleccion: string, Form: any){
    let data_create = new Promise((resolve,reject) =>{
        this.db.collection(Coleccion).add(Form).then((response)=>{
          let id= response.id;
          resolve(id)
        }).catch((err)=>{
          reject(false)})
    })
    return data_create
  }

  Read_Coleccion(Coleccion: string){
    let data_read = new Promise((resolve)=>{
      this.registros=[];
      this.registros = this.db.collection(Coleccion).valueChanges().subscribe(response=>{
        resolve(response)
      })
    })

    return data_read
  }
}
