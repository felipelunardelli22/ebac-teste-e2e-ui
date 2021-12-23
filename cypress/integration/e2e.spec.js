/// <reference types="cypress"/> 
import Enderecofatura from '../support/page_objects/enderecoFatura.page'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    
        cy.get('#primary-menu > .menu-item-629 > a').click();
        cy.addprodutos('Abominable Hoodie','M','Red','1')
       
        cy.get('#primary-menu > .menu-item-629 > a').click();
        cy.addprodutos('Aero Daily Fitness Tee','L','Yellow','3')

      cy.get('#primary-menu > .menu-item-629 > a').click();
        cy.addprodutos('Ajax Full-Zip Sweatshirt','XS','Green','2')

        cy.get('#primary-menu > .menu-item-629 > a').click();
        cy.addprodutos('Atlas Fitness Tank','XL','Blue','1')
        
        cy.get('.woocommerce-message > .button').click();

        cy.get('.checkout-button').click();
        cy.get('#terms').check();
        cy.get('#place_order').click({ force: true });  

        cy.get('[class="woocommerce-order-details__title"]').should('contain','Detalhes do pedido')
    }) 

        
})