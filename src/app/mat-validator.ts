import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";
import { StudentService } from "./service-student/student.service";
@Injectable()
export class MatValidator {

    constructor(private service:StudentService){}
   ValidateMat() : ValidatorFn{
        return (control: AbstractControl): {[key: string]: any} | null => {
       var mat=control.value;
       if (control.valueChanges && control.value.length>0){
        this.service.verify(mat).subscribe(result =>{
          var x= result;
          if (x==false) {
            control.setErrors({ InvalidMat: true });
            return { InvalidMAt: true };
          }
           })
       }
    
        
        return null;
      }
    }
  
      
}
