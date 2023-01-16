/// <reference types="Cypress" />
import CarPage from "../POM/CarPage";
const carPage = new CarPage()
describe("Create a carlisting",function(){
    before(function(){
        cy.visit('/')
 
    cy.fixture("CarData").then(function(data) {
        this.data=data
    })
})
it("Create carListing",function(){
carPage.enterEmail().type(this.data.Email);
carPage.enterPassWord().type(this.data.Password);
carPage.clickContBtn().click();
carPage.enterFirstField().type('6');
carPage.enterSecondField().type('8');
carPage.enterThirdField().type('2');
carPage.enterFourthField().type('7');
carPage.enterFifthField().type('3');
carPage.clickLoginButton().click();
})
})
