import { ValidatorFn, AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import * as momentNs from 'moment';
const moment = momentNs;

export function justOneName(control: AbstractControl): {[key: string]: any} | null {
    const fullname = control.value.split(' ');
    let result = null;
    if (fullname.length <= 1) {
        result = {'fullname': fullname};
    } else {
      const theSecondName = fullname[1].split('');
      if (theSecondName.length < 1) {

        result = {'fullname': fullname};
      }
    }
    return result;
}

export function minimumAge(age: number): ValidatorFn {
    return (fg: FormGroup): ValidationErrors => {
      let result: ValidationErrors = null;
      if (fg.value) {
        // carefull, moment months range is from 0 to 11
        const value = fg.value;
        const date = moment(value).startOf('day');
        if (date.isValid()) {
          // https://momentjs.com/docs/#/displaying/difference/
          const now = moment().startOf('day');
          const yearsDiff = date.diff(now, 'years');
          if (yearsDiff > -age) {
            result = {
              'minimumAge': {
                'requiredAge': age,
                'actualAge': yearsDiff
              }
            };
          }
        }
      }
      return result;
    };
  }

export function userAge(ageR: Date): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        const year = ageR.getFullYear() - control.value.getFullYear();
        if (year >= 18) {
            return {'ageRange': true};
        }
    };
}

export function singleName(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }
