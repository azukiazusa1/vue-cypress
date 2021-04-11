Cypress.Commands.add('countShoud', (count: string) => {
  cy.get('[data-cy=count]').contains(count)
})