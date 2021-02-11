import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],

    //que es lo que quiero hacer visible
    exports:[

        ListadoComponent

    ],
    //modulos
    imports:[
         CommonModule
    ]
})

export class HeroesModule{}