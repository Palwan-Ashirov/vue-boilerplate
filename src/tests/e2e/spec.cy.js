describe('das', () => {
  it('pass', () => {
    cy.visit('http://localhost:3000')
    cy.get('button').click()
    cy.get('.count__value').should('contain.text', '1')
  })
})
