/// <reference types="cypress" />

describe('Testes para os contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar novo contato', () => {
        const nomeContato = 'Alison Oliveira'

        cy.get('.sc-gLDzan input[type="text"]').type(nomeContato)
        cy.get('.sc-gLDzan input[type="email"]').type('alison.oliveira@teste.com')
        cy.get('.sc-gLDzan input[type="tel"]').type('119912345566')
        cy.get('.adicionar').click()

        cy.request('GET', 'https://fake-api-tau.vercel.app/api/contatos')
            .then((response) => {
                expect(response.status).to.eq(200); // Verifique o código de status da resposta

                const targetValue = nomeContato; //valor que vamos procurar

                // Função para varrer o JSON e procurar pelo valor
                const searchValueInJson = (obj, targetValue) => {
                    for (const key in obj) {
                        if (obj[key] === targetValue) {
                            return true;
                        } else if (typeof obj[key] === 'object') {
                            if (searchValueInJson(obj[key], targetValue)) {
                                return true;
                            }
                        }
                    }
                    return false;
                };

                // Verifica se o valor esperado está presente no JSON
                const valueFound = searchValueInJson(response.body, targetValue);
                expect(valueFound).to.be.true;
            });
    })

    it('Deve alterar um contato', () => {
        //Seleciona o ultimo botão
        cy.get('.edit').last().click()
        cy.get('.sc-gLDzan input[type="text"]').type('-Alterado')
        cy.get('.alterar').click()

        cy.request('GET', 'https://fake-api-tau.vercel.app/api/contatos')
            .then((response) => {
                expect(response.status).to.eq(200);
            });
    })

    it('Deve remover um contato', () => {
        cy.get('.delete').last().click()
        cy.request('GET', 'https://fake-api-tau.vercel.app/api/contatos')
            .then((response) => {
                expect(response.status).to.eq(200);
            });
    })

})