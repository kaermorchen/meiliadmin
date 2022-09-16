import Component from '@glimmer/component';
import { action } from '@ember/object';
// import { registerDestructor } from '@ember/destroyable';

export default class SimpleTableColumnComponent extends Component {
  // constructor() {
  //   super(...arguments);

  //   if (this.isHead) {
  //     this.args.parent?.registerColumn(this);

  //     registerDestructor(this, () => {
  //       this.args.parent?.unregisterColumn(this);
  //     });
  //   }
  // }

  get isHead() {
    return this.args.place === 'head';
  }

  get isBody() {
    return this.args.place === 'body';
  }

  get isSorted() {
    return this.args.sortingProp && (this.isAscSorted || this.isDescSorted);
  }

  get isAscSorted() {
    return this.args.sortingProp === `${this.args.prop}:asc`;
  }

  get isDescSorted() {
    return this.args.sortingProp === `${this.args.prop}:desc`;
  }

  @action
  handleClickHead(e) {
    this.args.onClickHead?.(this.args.prop, this, e);
  }

  @action
  handleSort(e) {
    if (this.args.sortable) {
      this.args.onSort?.(this.args.prop, this, e);
    }
  }
}
