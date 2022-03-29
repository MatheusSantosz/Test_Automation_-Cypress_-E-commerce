/// <reference types="cypress" />

var Chance = require('chance');
var Chance = new Chance ();

describe('Cadastro', () => {
  it('Quando eu informar os dados e finalizar, o cadastro deve ser efetuado com sucesso!', () => {
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')

    cy.get('input[name=email_create]').type(chance.email());
     /// segunda etapa do cadastro
    cy.get('#SubmitCreate > span').click();
    cy.url('').should('be.equal','http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation')
    cy.get('input#id_gender1').check().should('be.checked');
    cy.get('input#id_gender2').should('not.be.checked')
    cy.get('input#customer_firstname').type(chance.first());
    cy.get('input#customer_lastname').type(chance.last());
    cy.get('input#passwd').should('to.be.empty').type('Cadastro@1234');
    cy.get('#days').select('27').should('not.be.empty');
    cy.get('#months').select('March').should('not.be.empty');
    cy.get('#years').select('1997').should('not.be.empty');
    cy.get('input#newsletter').check().should('be.checked');;
    cy.get('input#optin').check().should('be.checked');;
    cy.get('input#firstname').should('to.be.empty').type(chance.name())
    cy.get('input#lastname').should('to.be.empty').type(chance.last({ nationality: 'en' }));
    cy.get('input#company').should('to.be.empty').type(chance.word({ length: 5 }));
    cy.get('input#address1').should('to.be.empty').type(chance.address());
    cy.get('input#address2').should('to.be.empty').type(chance.address());
    cy.get('input#city').should('to.be.empty').type(chance.city());
    cy.get('#id_state').select('Colorado').should('not.be.empty');
    cy.get('#postcode').type(chance.zip());
    cy.get('textarea[name=other]').type(chance.paragraph({ sentences: 1 }));
    cy.get('#phone').type(chance.phone({ country: "us" }))
    cy.get('#phone_mobile').type(chance.phone({ country: 'us', mobile: true }));
    cy.get('input[name=alias]').type(chance.word({ length: 5 }));
    cy.get('button#submitAccount').click();
    //cy.url('').should('be.equal','http://automationpractice.com/index.php?controller=my-account');

  });
});
