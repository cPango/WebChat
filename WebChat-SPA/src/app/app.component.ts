import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WebChat-SPA';

  msgObj = {
    username: '',
    msgTxt: '',
    color: 'black'
  };
}
