import { Control, ControlGroup } from "@angular/common";

interface ValidationResult {
    [key: string]: boolean;
}

export class Formvalidator {

    public static checkFirstCharacterValidator(control: Control): ValidationResult {
        var valid = /^\d/.test(control.value);
        if (valid) {
            return {checkFirstCharacterValidator: true};
        }
        return null;
    }


     static checkEmail(control: Control): ValidationResult {
       var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (control.value != "" && ( !filter.test(control.value))) {
            return { "checkEmail": true };
        }

        return null;
    }
    
}