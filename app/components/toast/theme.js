import Component from '@glimmer/component';

export default class ToastThemeComponent extends Component {
  get bg() {
    return 'bg-base-7';
  }

  get color() {
    return null;
  }

  get borderColor() {
    return null;
  }

  get width() {
    return 'w-80';
  }
}
