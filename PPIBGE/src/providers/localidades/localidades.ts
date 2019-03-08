import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the LocalidadesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalidadesProvider {

  constructor(
    public http: HttpClient,
    public loadingCtrl: LoadingController) {
  }

  listaMunicipiosPorEstado(filter: string): Observable<any> {
    this.presentLoading();
    debugger;
    var url =  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+filter+"/municipios";// Md5.hashStr(timestamp + '788109501550b61f31921c8668c3be88cc89ea321b6da468e61a1137f99e8e59af9d7404');
    return this.http.get(url);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }
}
