import { DebugHelper} from "./debugHelper";

export class WchHelper{

  private baseTenantURL:string;
  private debug:boolean
  private contentEndpoint : string;
  private authoringContentEndpoint:string;
  private loginEndpoint:string;

  constructor(url, debug){
    this.baseTenantURL = url;
    this.debug=(debug?debug:false);
    this.contentEndpoint =          '/delivery/v1/content';
    this.authoringContentEndpoint = '/authoring/v1/content';
    this.loginEndpoint =            '/login/v1/basicauth';

    //console.log("here you go >>> " + this.baseTenantURL);
  }

  getContentById(contentId:string, endPoint:string){
    let wch=this;
    let debugHelper = new DebugHelper();

    let p = new Promise((resolve, reject) =>{
      let req = new XMLHttpRequest();
      req.onload = resolve;
      req.withCredentials = false;
      req.onerror = function (err){reject("Network error");};
      req.open("GET", wch.baseTenantURL+endPoint+'/'+contentId);
      req.send();
    });
    
    return p.then(function(evt:Event){ return <XMLHttpRequest>evt.target}).
    then(function(req:XMLHttpRequest){return req.responseText}).
    then(res => debugHelper.debugLog(wch,res)).    
    then(function(resData:string) {
      return JSON.parse(resData);    
    });
  }

  getDeliveryContentById(contentId){
    return this.getContentById(contentId, this.contentEndpoint);
  }

 

 


}
