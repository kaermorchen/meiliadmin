import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class PaginationComponent extends Component {
  @service router;

  get availablePages() {
    const availablePages = [];
    const numberPagesToShow = 2;

    for (let i = 1; i <= this.totalPages; i++) {
      if (i === this.current) {
        availablePages.push(i);
      } else if (i < this.current && i >= this.current - numberPagesToShow) {
        availablePages.push(i);
      } else if (i > this.current && i <= this.current + numberPagesToShow) {
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
    return Math.ceil(this.args.total / this.args.limit);
  }

  get previousPage() {
    return this.args.offset - this.args.limit >= 0;
  }

  get nextPage() {
    return this.args.offset + this.args.limit < this.args.total;
  }

  get current() {
    return Math.ceil(this.args.offset / this.args.limit) + 1;
  }
}
