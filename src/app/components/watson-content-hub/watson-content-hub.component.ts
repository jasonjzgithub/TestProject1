import { Component, OnInit } from '@angular/core';
import {WchHelper} from '../../services/wchHelper'

@Component({
  selector: 'app-watson-content-hub',
  templateUrl: './watson-content-hub.component.html',
  styleUrls: ['./watson-content-hub.component.css']
})


export class WatsonContentHubComponent implements OnInit {
  
  title:string;
  summary: string;
  body: string;
  content:JSON;

  constructor() { 
    let baseTenantAPIURL = "https://my9.digitalexperience.ibm.com/api/830a9600-5a80-432e-aed4-352ee16bff76";
    let contentId="c5772053-ee20-465a-86e6-c2530caf8fbf";

    let wchHelper = new WchHelper(baseTenantAPIURL, false);
    //let login = wchHelper.login("abc", "password").then(JSON.parse);
    let a=this;
    wchHelper.getDeliveryContentById(contentId)    
      .then(function(data) {
        a.title=data.elements.title.value;        
        a.summary=data.elements.summary.value;
        a.body=data.elements.body.value;
        a.content=data;
        /*
        console.log("name in json: " + data.elements.title.value); 
        console.log("summary in json: " + data.elements.summary.value); 
        console.log("body in json: " + data.elements.body.value); 
        */
    })      
      .catch(err =>{alert("error happened");});  
  }

  ngOnInit() {
  }

}



