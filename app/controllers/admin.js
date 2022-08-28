import Controller from '@ember/controller';
import { CheckboxMarkedCircle, AlertCircle } from 'ember-mdi';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AdminController extends Controller {
  @service session;

  CheckboxMarkedCircle = CheckboxMarkedCircle;
  AlertCircle = AlertCircle;

  @action
  invalidateSession() {
    this.session.invalidate();
  }
}
