/// <reference types="cypress" />

describe('joefong.dev homepage', () => {
  beforeEach(() => {
    cy.visit('https://joefong.dev')
  })

  it('display a welcome message', () => {
    cy.get('.welcome-msg').should('be.visible');
    cy.wait(5000);
    cy.get('.welcome-msg').should('have.text', 'Hey, nice to meet you :)My name is Joe Fong.');
  })

})