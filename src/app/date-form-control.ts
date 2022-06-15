import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl {
    override setValue(value: string, options: any) {
        if (value.match(/[^0-9|\/]/gi)) {
            super.setValue(this.value, {...options, emitModelToViewChange: true});
            return;
        }
        console.log(value);
        super.setValue(value, options);
    }
}
