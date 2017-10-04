import { Component, OnInit } from '@angular/core';
import {InjectableData} from '../../services/injectableData'
@Component({
  selector: 'app-inject-consumer',
  templateUrl: './inject-consumer.component.html',
  styleUrls: ['./inject-consumer.component.css'],
  providers: [InjectableData]
})
export class InjectConsumerComponent implements OnInit {

  output:string;

  constructor(private data: InjectableData) { 
    let a=this;
    a.output= data.getData();
    //console.log(a.output);
  }

  ngOnInit() {
  }

}
