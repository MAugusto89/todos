describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('[type="text"]').type(description);
    cy.get('[type="date"]').type(deadline);
    
  })
})