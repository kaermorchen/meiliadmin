import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { hbs } from 'ember-template-imports';
import { Loading } from 'ember-mdi';
import { on } from '@ember/modifier';
import eq from '../helpers/eq';

export const commonClasses =
  'inline-flex items-center px-3 py-2 leading-4 text-sm cursor-pointer border hover:opacity-80 active:opacity-60 focus:outline-none text-black border-gray-dark';
export const primaryStyleClasses = 'text-primary border-primary';

export default class ButtonComponent extends Component {
  static template = hbs`
    <button
      disabled={{this.disabled}}
      type={{this.type}}
      class="
        {{commonClasses}}
        {{if (eq this.style 'primary') primaryStyleClasses}}
        {{if @group 'first:rounded-l-md last:rounded-r-md' 'rounded-md'}}
      "
      ...attributes
      {{on 'click' this.handleClick}}
    >
      {{#if this.isPending}}
        <Loading @spin={{true}} class="mx-1" />
      {{else if @icon}}
        <@icon class="mx-1" />
      {{/if}}
      {{#if this.text}}
        <span class="mx-1">
          {{this.text}}
        </span>
      {{/if}}
    </button>
  `;

  @tracked _state = 'default';

  get style() {
    return this.args.style ?? 'default';
  }

  get size() {
    return this.args.size ?? 'default';
  }

  get isActive() {
    return (
      this.args.group &&
      this.args.value &&
      this.args.group.args.value === this.args.value
    );
  }

  get disabled() {
    if (this.args.disabled !== undefined) {
      return this.args.disabled;
    }

    return this.isPending;
  }

  get type() {
    return this.args.type ?? 'button';
  }

  get state() {
    return this.args.state ?? this._state;
  }
  set state(state) {
    this._state = state;
  }

  get isPending() {
    return this.state === 'pending';
  }

  get isFulfilled() {
    return this.state === 'fulfilled';
  }

  get isRejected() {
    return this.state === 'rejected';
  }

  get isSettled() {
    return this.isFulfilled || this.isRejected;
  }

  get text() {
    return this.args[`${this.state}Text`] ?? this.args.text;
  }

  @action
  async handleClick(event) {
    if (typeof this.args.onClick !== 'function') {
      return;
    }

    event.preventDefault();

    try {
      const maybePromise = this.args.onClick(this.args.value);

      if (typeof maybePromise?.then === 'function') {
        this.state = 'pending';

        await maybePromise;

        if (!this.isDestroyed) {
          this.state = 'fulfilled';
        }
      }
    } catch (error) {
      if (!this.isDestroyed) {
        this.state = 'rejected';
      }

      throw error;
    }
  }
}
