import { action } from '@ember/object';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { WhiteBalanceSunny, ThemeLightDark, WeatherNight } from 'ember-mdi';

export default class ThemeTogglerComponent extends Component {
  @service session;

  get themes() {
    return [
      { id: 'light', name: 'Light', icon: WhiteBalanceSunny },
      { id: undefined, name: 'System', icon: ThemeLightDark },
      { id: 'dark', name: 'Dark', icon: WeatherNight },
    ];
  }

  @action
  changeTheme(theme) {
    this.session.set('data.theme', theme);
  }

  @action
  didChangeTheme(el, [theme]) {
    if (theme) {
      document.documentElement.dataset.theme = theme;
    } else {
      delete document.documentElement.dataset.theme;
    }
  }
}
