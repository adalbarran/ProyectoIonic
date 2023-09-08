import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearproductoPageRoutingModule } from './crearproducto-routing.module';

import { CrearproductoPage } from './crearproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearproductoPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [CrearproductoPage]
})
export class CrearproductoPageModule {}
