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
      this.registros = this.db.collection(Coleccion).snapshotChanges().subscribe(response=>{
        const registro = response.map(doc=> ({
          id: doc.payload.doc.id,
          ...(doc.payload.doc.data() || {})
        }))
        resolve(registro)
      })
    })

    return data_read
  }

  Update(coleccion:string,registro:any){
    let data_update = new Promise ((resolve, reject)=>{
      this.db.collection(coleccion).doc(registro.id).set(registro).then((response=>{
        resolve(true)
      }))
      .catch((err)=>{
        reject(false)
      })
    })
    return data_update
  }
 
}
