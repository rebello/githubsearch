import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../service/services.service';

@Component({
  selector: 'app-profile-items',
  templateUrl: './profile-items.component.html',
  styleUrls: ['./profile-items.component.scss'],
})
export class ProfileItemsComponent implements OnInit {
  public userList;
  constructor(public ServicesService: ServicesService) {}

  ngOnInit() {
    this.ServicesService.userData$.subscribe((user: any) => {
      if (user) {
        this.userList = user.data.items;
      }
    });
  }
}
