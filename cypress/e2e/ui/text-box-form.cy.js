import { TextBoxPage } from '../../pages/TextBoxPage';

const textBoxPage = new TextBoxPage();

describe('DemoQA - Text Box Form with POM', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', () => false);
    textBoxPage.visit();
  });

  it('fills and submits the form', () => {
    textBoxPage.fillForm({
      fullName: 'Fehmi Baltaci',
      email: 'fehmi@example.com',
      currentAddress: '123 Main St',
      permanentAddress: '456 Secondary St'
    });

    textBoxPage.submit();

    textBoxPage.getOutputField('name').should('contain', 'Fehmi Baltaci');
    textBoxPage.getOutputField('email').should('contain', 'fehmi@example.com');
    textBoxPage.getOutputField('currentAddress').should('contain', '123 Main St');
    textBoxPage.getOutputField('permanentAddress').should('contain', '456 Secondary St');
  });
});