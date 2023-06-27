import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Nachricht } from './nachricht';

@Injectable({
  providedIn: 'root'
})
export class BdserviceService {

  public database!: SQLiteObject;

  nachrichtTabla: string = "CREATE TABLE IF NOT EXISTS nachricht( notcIdent INTEGER PRIMARY KEY autoincrement, notcTitulo VARCHAR(2048) NOT NULL, notcCategoria VARCHAR(2) NOT NULL, notcContenido TEXT NOT NULL);";

  nachrichtInsercion: string = "INSERT or IGNORE INTO noticia( notcIdent, notcTitulo, notcCategoria, notcContenido) VALUES('1','A','Noticia 1','Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');";

  nachrichtLista = new BehaviorSubject([]);

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private alertController: AlertController, private toastController: ToastController, private sqlite: SQLite, private plataform: Platform) {
    this.crearBD();
   }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      icon: 'globe'
    });

    await toast.present();
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msj,
      buttons: ['OK']
    });

    await alert.present();
  }
  
  dbState() {
    return this.isDBReady.asObservable();
  }

  nachrichtenFetch(): Observable<Nachricht[]>{
    return this.nachrichtLista.asObservable();
  }

  crearBD() {
    this.plataform.ready().then(()=>{
      this.sqlite.create({
        name: 'bdnachrichten.db',
        location: 'default'
      }).then((db: SQLiteObject)=>{
        this.tablaErstellen();
      }).catch(e=>{
        this.presentToast("Database creación error: " + e);
      })
    })
  }

  async tablaErstellen() {
    try{

      await this.database.executeSql(this.nachrichtTabla,[]);

      await this.database.executeSql(this.nachrichtInsercion,[]);

      this.nachrichtBusqueda();
      this.isDBReady.next(true);

    }catch(e){
      this.presentToast("Tablas creación error: " + e);
    }
  }

  nachrichtBusqueda() {

    return this.database.executeSql("SELECT * FROM Nachricht",[]).then(res => {
      let items: Nachricht[] = [];

      if (res.rows.lenght > 0) {
        for (var i = 0; i < res.rows.lenght; i++) {
          items.push({
            notcIdent: res.rows.item(i).notcIdent,
            notcCategoria: res.rows.item(i).notcCategoria,
            notcTitulo: res.rows.item(i).notcTitulo,
            notcContenido: res.rows.item(i).notcContenido
          });
        }
      }
      this.nachrichtLista.next(items as any);
    });
  }

  nachrichtInserción(notcTitulo: any, notcCategoria: any, notcContenido: any){
    let data = [notcTitulo,notcCategoria,notcContenido];
    return this.database.executeSql('INSERT INTO noticia( notcTitulo, notcCategoria, notcContenido) VALUES ( ?, ?, ?)',data).then(res=>{ this.nachrichtBusqueda(); });
  }


  nachrichtModificacion(notcTitulo: any, notcCategoria: any, notcContenido: any, notcIdent: any){
    let data = [ notcTitulo, notcCategoria, notcContenido, notcIdent];
    return this.database.executeSql('UPDATE Nachricht SET notcTitulo = ?, notcCategoria = ?, notcContenido = ? WHERE notcIdent = ?', data).then(data2=>{ this.nachrichtBusqueda(); })
  }

  nachrichtEliminacion(notcIdent: any ) {
    return this.database.executeSql('DELETE FROM Nachricht WHERE notcIdent = ?',[notcIdent]).then(a=>{ this.nachrichtBusqueda(); });
  }

}
