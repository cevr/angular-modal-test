import * as _ from 'lodash';

export class ModalService {
  private modals: any[] = [];

  add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string) {
    // remove modal from array of active modals
    const modalToRemove = _.find(this.modals, { id });
    this.modals = _.without(this.modals, modalToRemove);
    console.log('remove', this.modals);
  }

  open(id: string) {
    // open modal specified by id
    const modal = _.find(this.modals, { id });
    modal.open();
    console.log('open');
  }

  close(id: string) {
    // close modal specified by id
    const modal = _.find(this.modals, { id });
    modal.close();
    console.log('close');
  }
}
