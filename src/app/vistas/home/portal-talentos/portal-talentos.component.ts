import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-portal-talentos',
  templateUrl: './portal-talentos.component.html',
  styleUrls: ['./portal-talentos.component.css']
})
export class PortalTalentosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irPortalTalentos(){
    this.router.navigate(["/portal-empleo"]);
  }

}
