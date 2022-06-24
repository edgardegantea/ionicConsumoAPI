import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { PostServiceProvider } from "../../providers/post-service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arrayPosts: any;

  constructor(
    public navCtrl: NavController,
    public postService: PostServiceProvider
  ) {
  }

  ionViewDidLoad() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().then(
      data => {
        this.arrayPosts = data;
      }
    );
  }

}
