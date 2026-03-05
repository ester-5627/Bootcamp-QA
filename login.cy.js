// funcionalodade - login
describe('Login', () => {

    //cenario 1
    it('Login com sucesso', () => {
        // abro pagina de login
        cy.visit('https://automationpratice.com.br/login')
        // preencho email
        cy.get('#user').type('dudu@qazando.com')
        // preencho senha
        cy.get('#password').type('123456')
        // clico em logar
        cy.get('#btnlogin').click()
        // verifico se logou
        cy.get('#swal2-title').should('have.text', 'Senha inválida')

    })

    //cenario 2
    it('Login com senha errada', () => {
        // abro pagina de login
        cy.visit('https://automationpratice.com.br/login')
        // preencho email
        cy.get('#user').type('dudu@qazando.com')
        // preencho senha
        cy.get('#password').type('123')
        // clico em logar
        cy.get('#btnlogin').click()
        // verifico se logou
        cy.get('.invalid_input').should('have.text', 'Login realizado')


    })


    //cenario 3
        it('Login com email errado', () => {
        // abro pagina de login
        cy.visit('https://automationpratice.com.br/login')
        // preencho email
        cy.get('#user').type('1212')
        // preencho senha
        cy.get('#password').type('123456')
        // clico em logar
        cy.get('#btnlogin').click()
        // verifico se logou
        cy.get('.invalid_input').should('have.text', 'E-mail inválido')


    })

    //cenario 4
    it('Login com email e senha vazios', () => {
        // abro pagina de login
        cy.visit('https://automationpratice.com.br/login')
        // preencho email
        cy.get('#btnlogin').click()
        // verifico se logou
        cy.get('.invalid_input').should('have.text', 'E-mail inválido')

    })
})


