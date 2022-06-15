import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl {
    override setValue(value: string, options: any) {
        console.log(value);
    }
}
