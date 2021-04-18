import { Class } from "./class";
import { User } from "./user";

export interface Student {
    id:string ;
    firstName:string ;
    lastName:string ;
    dateBirth:string;
    sexe:String;
    level:Class;
    user:User;


}
