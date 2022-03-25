import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class PaginationComponent extends Component {
  @service router;

  numberPagesToShow = 2;

  get availablePages() {
    const availablePages = [];

    for (let i = 1; i <= this.totalPages; i++) {
      if (i === this.args.current) {
        availablePages.push(i);
      } else if (
        i < this.args.current &&
        i >= this.args.current - this.numberPagesToShow
      ) {
        availablePages.push(i);
      } else if (
        i > this.args.current &&
        i <= this.args.current + this.numberPagesToShow
      ) {
        availablePages.push(i);
      } else if (
        this.args.current > this.totalPages &&
        i <= this.args.current + this.numberPagesToShow
      ) {
        availablePages.push(i);
      }
    }

    const firstPage = availablePages[0];
    if (firstPage > 1) {
      if (firstPage - 1 > 1) {
        availablePages.unshift('...');
      }

      availablePages.unshift(1);
    }

    const lastPage = availablePages[availablePages.length - 1];
    if (lastPage < this.totalPages) {
      if (lastPage + 1 < this.totalPages) {
        availablePages.push('...');
      }

      availablePages.push(this.totalPages);
    }

    return availablePages;
  }

  get totalPages() {
    return Math.ceil(this.args.count / this.args.perPage);
  }

  get previousPage() {
    return this.args.current > 1 ? this.args.current - 1 : null;
  }

  get nextPage() {
    return this.args.current < this.totalPages ? this.args.current + 1 : null;
  }
}
