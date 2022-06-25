import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicesService } from '../../service/services.service';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private ServicesService: ServicesService,
    private localStorageService: LocalStorageService
  ) {}
  public name;
  public profileDetails;
  public historyObj = [];
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.name = params['username'];
    });

    if(this.name ) {
      this.ServicesService.searchUser(this.name).subscribe((res) => {
        this.profileDetails = res;
        this.localStorageService.saveData(this.profileDetails.login,  JSON.stringify(res) );
      });
    } else {
      for (var key in this.localStorageService.getAllData()) {
        if(JSON.parse(this.localStorageService.getData(key))) {
          this.historyObj.push(JSON.parse(this.localStorageService.getData(key)));
        }
      //Do something with key, access value by local[key]
      }
    }
  }
  clear(event) {
    this.localStorageService.clearData();
    this.historyObj = []  
  }

  nav(event, val) {
    window.open(val, "_blank");
  }
}
