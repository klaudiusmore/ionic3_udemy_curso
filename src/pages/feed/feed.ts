import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Claudio Santos",
    data: "November 5, 1955",
    descdricao: "Nunca foi tão intuitivo criar aplicativos em ionic 3, uma estrutura incrivel.",
    qntd_likes: 0,
    qntd_coments: 0,
    time_coments: "11h ago"
  }

  public nome_usuario: string = "Marco Feliciano";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(): void {
    alert(2 + 10);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros();
  }

}
