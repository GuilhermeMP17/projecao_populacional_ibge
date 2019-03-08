import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalidadesProvider } from '../../providers/localidades/localidades';
import { CommonFunctionsProvider } from '../../providers/common-functions/common-functions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public City: any;
  public searchTerm:any;

  constructor(
    public navCtrl: NavController,
    public common:  CommonFunctionsProvider,
    public localidadesProvider: LocalidadesProvider) {

  }

  searchCity(queryString) {

    let localidadessObservable: Observable<[any]>;

    localidadessObservable = this.localidadesProvider.listaMunicipiosPorEstado(queryString);//this.common.encodeQueryData(this.searchTerm));

    this.City =[];

    localidadessObservable.subscribe(

      data => {
        this.City = data;
        }
      );
  }


}
