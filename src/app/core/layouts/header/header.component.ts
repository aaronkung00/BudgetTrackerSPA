import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/shared/models/income';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  income : Income;

  constructor() { }

  ngOnInit(): void {
  }

}
