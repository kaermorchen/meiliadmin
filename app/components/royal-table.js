import Component from '@glimmer/component';

export default class RoyalTableComponent extends Component {
  columns = [];

  registerColumn(column) {
    if (!this.columns.includes(column)) {
      this.columns.push(column);
    }
  }

  unregisterColumn(column) {
    if (this.columns.includes(column)) {
      this.columns = this.columns.filter((c) => c !== column);
    }
  }
}
