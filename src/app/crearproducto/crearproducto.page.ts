import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.page.html',
  styleUrls: ['./crearproducto.page.scss'],
})
export class CrearproductoPage implements OnInit {

  formularioCrearProducto:FormGroup;


  constructor(private fb:FormBuilder) { 
    this.formularioCrearProducto = this.fb.group(
      {
        nombre: [''],
        precio: [],
        desc: ['']

      }
    )
  }

  ngOnInit() {
  }
  grabarProducto() {

    
    const Producto = {
      nombre: this.formularioCrearProducto.get('Nombre')?.value,
      precio: this.formularioCrearProducto.get('Precio')?.value,
      desc: this.formularioCrearProducto.get('Descripcion')?.value
      
    }
    if(Producto.precio >= 100000){
      console.log('Precio elevado')
      return
    }
    
    console.log(Producto)
  }
}
