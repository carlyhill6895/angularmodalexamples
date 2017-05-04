import { ModalExamplePage } from './app.po';

describe('modal-example App', () => {
  let page: ModalExamplePage;

  beforeEach(() => {
    page = new ModalExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
