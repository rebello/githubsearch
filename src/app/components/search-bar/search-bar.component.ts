import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import {
  debounceTime,
  pluck,
  distinctUntilChanged,
  switchMap,
  catchError,
  filter,
  map,
} from "rxjs/operators";
import { empty, fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import {ElementRef, ViewChild} from '@angular/core';
import { ServicesService } from '../../service/services.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements AfterViewInit {
  public showSearch: boolean = true;
  @ViewChild('searchInput') searchInput!: ElementRef;
  public GITHUB_USERS_LIST = "https://api.github.com/search/users";
  public GITHUB_USER = "https://api.github.com/users/";
  public searchEle: any;
  public result;
  constructor(public ServicesService:ServicesService) { }

  ngAfterViewInit() {
    const input$ = fromEvent(this.searchInput.nativeElement, "input");
    this.ServicesService.searchList(input$);
  }

}
