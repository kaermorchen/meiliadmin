import AdminIndexesItemDocumentsDocumentEditController from './document/edit';
import { action } from '@ember/object';

export default class AdminIndexesItemDocumentsNewController extends AdminIndexesItemDocumentsDocumentEditController {
  fileInputId = 'upload-file';

  @action
  async readFile(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const text = await data[this.fileInputId].text();

    this.save(text);
  }

  @action
  async save(value) {
    this.errors = [];

    this.isSaving = true;

    try {
      const task = await this.model.index.saveDocuments(value);

      this.isSaving = false;

      if (task) {
        this.toaster.taskToast(task);
      }
    } catch (error) {
      this.errors = [error.error || error];
    }
  }
}
