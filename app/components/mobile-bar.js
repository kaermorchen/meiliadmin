import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MobileBarComponent extends Component {
  @action
  toggleSidebar() {
    document.body.classList.toggle('sidebar-is-opened');
  }

  @action
  closeSidebar() {
    document.body.classList.remove('sidebar-is-opened');
  }
}
