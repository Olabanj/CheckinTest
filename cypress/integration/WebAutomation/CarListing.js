/// <reference types="Cypress" />
describe("Create a carlisting",function(){
it("Create carListing",function(){
    //Login
cy.visit('/')
cy.get('#email').type("olabanjotboy@gmail.com");
cy.get('#password').type("Testing@123");
cy.get('.keep').click();
cy.contains('Continue').click();
cy.get('.otp-cont > :nth-child(1)').type('6');
cy.get('.otp-cont > :nth-child(2)').type('8');
cy.get('.otp-cont > :nth-child(3)').type('2');
cy.get('.otp-cont > :nth-child(4)').type('7');
cy.get('.otp-cont > :nth-child(5)').type('3');
cy.get('.blue').click();
})
})