import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-project';

  constructor(private route: Router) {

  }

  popup(): void {
    window.alert("welcome to home page");
    //window.location.href = "https://stackoverflow.com/questions/34338440/how-to-redirect-to-an-external-url-in-angular2";
  }
}
