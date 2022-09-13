import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Toast from '../components/toast';
import { hbs } from 'ember-template-imports';
import { fn } from '@ember/helper';

// const toast = hbs`
//   {{component Toast text="hel"}}
// `;

// import { RenderingTestCase, moduleFor, strip } from 'internal-test-helpers';

// import { precompileJSON } from '@glimmer/compiler';
// import { getTemplateLocals } from '@glimmer/syntax';
// import { createTemplateFactory } from '@ember/template-factory';

// // import { Helper } from '../../index';
// import { setComponentTemplate } from '@glimmer/manager';
// import { templateOnlyComponent } from '@glimmer/runtime';

// function precompileTemplate(source, { moduleName, scope = {} }) {
//   let locals = getTemplateLocals(source);

//   let options = {
//     strictMode: true,
//     moduleName,
//     locals,
//     isProduction: false,
//     meta: { moduleName },
//   };

//   // Copied from @glimmer/compiler/lib/compiler#precompile
//   let [block, usedLocals] = precompileJSON(source, options);
//   let usedScope = usedLocals.map((key) => scope[key]);

//   let blockJSON = JSON.stringify(block);
//   let templateJSONObject = {
//     id: moduleName,
//     block: blockJSON,
//     moduleName: moduleName ?? '(unknown template module)',
//     scope: () => usedScope,
//     isStrictMode: true,
//   };

//   let factory = createTemplateFactory(templateJSONObject);

//   return factory;
// }

// console.log(toast);
export default class ToastsService extends Service {
  @tracked plate = [];

  constructor() {
    super();

    this.destinationElement = document.createElement('div');

    document.body.appendChild(this.destinationElement);
  }

  successToast({ text }) {
    const removeFromPlate = (toast) => {
      this.plate = this.plate.filter((item) => item !== toast);
    };

    const toast = hbs`<Toast @text={{text}} @willDestroy={{fn removeFromPlate toast}} />`;
    console.log('successToast', toast);
    this.addToPlate(toast);
  }

  addToPlate(toast) {
    this.plate = this.plate.concat(toast);
  }
}
