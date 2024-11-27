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
proceso_agregar!: boolean;
proceso_editar!: boolean;
registro !: any;


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

  Agregar_Datos(){
    this.proceso_agregar = true;
    this.proceso_editar = false;
    this.form_inicio = {
      Correo: "",
      Contrasena:"",
      Nombre:"", 
      Apellidos:"",
      Activo:false
    }
  }

  Editar_Informacion(registro:any){
    this.proceso_agregar = false
    this.proceso_editar = true
    this.form_inicio = registro
    this.registro = registro
  }

  Actualizar_Datos(){
    this.crud.Update(this.coleccion,this.registro).then((response:any)=>{
      if(response){
        alert("¡El registro se actualizo correctamente!")
        location.reload()
      }
      else{
        alert("Hubo error.")
      }
    })
  }

  Eliminar_Datos(Registro: any){
    if(confirm("Deseas Eliminar este Usuario?")){
      this.crud.Delete_Coleccion(this.coleccion,Registro).then((response:any)=>{
        if(response){
          alert("¡El registro se elimino correctamente!")
        }
        else{
          alert("Hubo error.")
        }
        console.log(response)
        location.reload()
      })
    }

  }

}
