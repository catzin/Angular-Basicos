import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent{

  heroes : string[] = ['Spiderman','Iron man','Thor','The sheet'];
  borrado: string = '';

  borrarHeroe(){
   this.borrado = this.heroes.shift()||'';

 
  }


}
