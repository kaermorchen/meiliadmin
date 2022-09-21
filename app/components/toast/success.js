import ToastThemeComponent from './theme';
import { Check } from 'ember-mdi';

export default class ToastSuccessComponent extends ToastThemeComponent {
  get bg() {
    return 'bg-success-light';
  }

  get color() {
    return null;
  }

  get borderColor() {
    return 'border-success';
  }

  get icon() {
    return Check;
  }

  get autoClose() {
    return true;
  }
}
