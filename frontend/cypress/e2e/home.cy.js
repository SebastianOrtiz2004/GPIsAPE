describe('Home', () => {
    it('muestra el texto Vite', () => {
      cy.visit('/')
      cy.contains(/Vite/i).should('be.visible')
    })
  })
  