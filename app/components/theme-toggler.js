import { action } from '@ember/object';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { WhiteBalanceSunny, ThemeLightDark, WeatherNight } from 'ember-mdi';
import { tracked } from '@glimmer/tracking';

export default class ThemeTogglerComponent extends Component {
  @service session;

  @tracked theme;

  constructor() {
    super(...arguments);

    this.theme = document.documentElement.dataset.theme;
  }

  get themes() {
    return [
      { id: 'light', name: 'Light', icon: WhiteBalanceSunny },
      { id: 'system', name: 'System', icon: ThemeLightDark },
      { id: 'dark', name: 'Dark', icon: WeatherNight },
    ];
  }

  @action
  changeTheme(theme) {
    localStorage.setItem('theme', theme);
    this.theme = theme;
    document.documentElement.dataset.theme = theme;
  }
}
