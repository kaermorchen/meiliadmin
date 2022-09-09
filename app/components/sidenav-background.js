import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SidenavBackgroundComponent extends Component {
  @action
  closeSidebar() {
    document.body.classList.remove('sidebar-is-opened');
  }
}
