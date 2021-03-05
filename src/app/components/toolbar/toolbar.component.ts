import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  searchText:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  search(){
    console.log("search" ,this.searchText );
    if(this.searchText){
      this.router.navigate(['/search',],{queryParams:{searchText: this.searchText}})
    }
  }

}
