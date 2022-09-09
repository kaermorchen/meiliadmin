import Component from '@glimmer/component';

export default class SidenavBackgroundComponent extends Component {
  closeSidebar() {
    document.body.classList.remove('sidebar-is-opened');
  }
}
