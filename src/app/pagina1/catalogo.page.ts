import { Component, OnInit } from '@angular/core';
// import { Interface } from 'readline';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  

  public Catalogo = [ 
    {id:'Producto 1',precio:'Valor $26.000', img:"https://cellystop.ca/wp-content/uploads/2020/10/Blue-1.jpg.webp",desc: 'Descripcion de Producto 1'},
    {id:'Producto 2',precio:'Valor $61.000', img:"https://mlstaticquic-a.akamaihd.net/monitor-gamer-led-acer-27-pulgadas-144hz-fullhd-diginet-D_NQ_NP_748578-MLU31836272666_082019-F.jpg",desc: 'Descripcion de Producto 2'},
    {id:'Producto 3',precio:'Valor $14.500', img:"https://www.penguin.com.bd/wp-content/uploads/2020/07/JBL-Tune-550BT-Wireless-On-Ear-Headphones.jpg",desc: 'Descripcion de Producto 3'},
    {id:'Producto 4',precio:'Valor $99.990', img:"https://th.bing.com/th/id/R.c9b2f4b382443b36048598d2ff822273?rik=4L%2bG5pFpZeBEDQ&pid=ImgRaw&r=0",desc: 'Descripcion de Producto 4'},

  ]



  constructor() { }

  ngOnInit() {






  }

  



}
