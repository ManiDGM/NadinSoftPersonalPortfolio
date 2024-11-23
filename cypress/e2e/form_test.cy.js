describe('testing form functuality', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/personal%20portfolio/index.html')
  });

  it('should submit the contact successfully', () => {
      cy.scrollTo('bottom');
      cy.get('#name').type('Mani');
      cy.get('#last_name').type('Dogmechi');
      cy.get('#email').type('manidgm1383@gmail.com');
      cy.get('#message').type('salam');
      cy.get('button[type="submit"]').click();
      // cy.contains('Thank you for your message!').should('be.visible');
  });

})