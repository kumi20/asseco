import { Component, OnInit } from '@angular/core';
import { AppServices } from '../app-services.service';
import { EventService } from '../event.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  shopingCount: number = 0;

  constructor(private appServices: AppServices, private event: EventService, private _route: Router) {
    this.appServices.shopCounter.subscribe(()=>{
      this.shopingCount ++;
    })
  }

  ngOnInit() {
  }

  logout(){    
    this.appServices.deleteAuth('Authorization/Logout').subscribe(response=>{
      localStorage.removeItem('wapro-erp-token');
      this._route.navigateByUrl("/")

    },
    error => {
      this.event.showNotification('error', error)
    })
  }

}
