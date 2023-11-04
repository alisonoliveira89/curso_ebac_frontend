/// <reference types="cypress" />

describe('Testes pagina inicial', () => {
    it('Deve renderizar 3 contatos', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.sc-beqWaB').should('have.length', 3)
    })
})