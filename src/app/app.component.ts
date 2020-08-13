import { Component } from '@angular/core';

@Component({
  selector:  'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']

})
export class AppComponent {
 
constructor(){
  this.options={
    title :{text :'Sales Charts'},
    chart : { zoomType :'x'},
    series :[{
      name:'January',
      data:[29.9 ,71.5,106.4,129.2,50],
      
    },
  {
    name:'December',
    data:[30,54,146,120.5,200],
  }]
  };
}
options:Object;
}
