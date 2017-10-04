
export class DebugHelper{

 constructor(){}

 debugLog(wch, val){
    if(wch.debug)
      console.log("Debug >>>> "+ val);
      return val;
  }


}