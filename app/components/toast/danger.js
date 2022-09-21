import ToastThemeComponent from './theme';
import { ExclamationThick } from 'ember-mdi';

export default class ToastDangerComponent extends ToastThemeComponent {
  get bg() {
    return 'bg-danger-light';
  }

  get color() {
    return null;
  }

  get borderColor() {
    return 'border-danger';
  }

  get icon() {
    return ExclamationThick;
  }
}
