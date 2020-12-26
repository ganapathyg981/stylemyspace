import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  navlinks=[{name:'Home'},{name:'Gallery'},{name:'Modular kitchen'},{name:'Wardrobe'},{name:'Freelance'},{name:'Other services'},{name:'About us'}]

}
