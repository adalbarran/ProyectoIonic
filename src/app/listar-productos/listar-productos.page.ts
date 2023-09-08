import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Productos {
  nombre: string,
  precio : number,
  desc :string
}
@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.page.html',
  styleUrls: ['./listar-productos.page.scss'],
})
export class ListarProductosPage implements OnInit {
  productos : Productos[] = [
    {
      nombre: 'Juan',
      precio: 65000,
      desc: 'Made in china'
    },
    {
      nombre: 'Pedro',
      precio: 120000,
      desc: 'Made in china'
    }
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }


}
