import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

   isActive: boolean = false;
  constructor() { }

  ngOnInit(): void {

    
  }

  showMenu() {
    this.isActive = this.isActive ? false : true;
}

}
