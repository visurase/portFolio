import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyReactComponet from './reactComponants/myReactComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnChanges,AfterViewInit,OnDestroy{
  title = 'portFolio';
  rootId='rootId'
  persons:any;
  ngOnChanges(){
   //this.render();
  
  }

  ngOnInit(){
    this.persons =[{"name":"vacant", "email":"Ram@gmail.com"},  
    {"name":"vacant", "email":"bob32@gmail.com"} ,{"name":"vacant", "email":"Ram@gmail.com"},  
    {"name":"vacant", "email":"bob32@gmail.com"} ]
  }

  ngAfterViewInit(): void {
    //this.render();
  }
  ngOnDestroy(): void {
    
  }

  private render(){
    ReactDOM.render(React.createElement(MyReactComponet),document.getElementById(this.rootId))
  }



}
