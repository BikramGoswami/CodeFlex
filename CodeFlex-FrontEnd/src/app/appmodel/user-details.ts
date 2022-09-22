import { Report } from "./report";

export class UserDetails {

    user_id:number;
    full_name:String;
    email:String;
    password:String;
    mobile:Number;
    city:String;
    state:String;
    date_of_birth:String;
    qualification:String;
    year_of_completion:Number;
    

    score:Report["marks"];
  
}
