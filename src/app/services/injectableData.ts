import {Injectable} from '@angular/core';

@Injectable()
export class InjectableData{

 constructor(){}

 getData(){
    
      return "this data is from a injected service class InjectableData";
  }


}