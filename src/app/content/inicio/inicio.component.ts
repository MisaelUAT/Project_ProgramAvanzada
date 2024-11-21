import { Component } from '@angular/core';
import { CrudInicioService } from '../../services/crud-inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

form_inicio = {
  Correo: "",
  Contrasena:"",
  Nombre:"",
  Apellidos:"",
  Activo:false
};
coleccion!: string;
registros !: any;


  constructor(private crud: CrudInicioService){}

  ngOnInit(): void{
    this.coleccion = "Usuarios"
    this.crud.Read_Coleccion(this.coleccion).then((response: any)=>{
        this.registros = response;
        console.log(this.registros)
    })
  }

  Guardar_Datos(){
    this.coleccion = "Usuarios";
    this.crud.Create_Coleccion(this.coleccion,this.form_inicio).then((response: any)=>{
      if(response){
        alert("Se publico Correctamente")
      }
      else{
        alert("Error a la Hora de Guardar")
      }
    })
  }

}
