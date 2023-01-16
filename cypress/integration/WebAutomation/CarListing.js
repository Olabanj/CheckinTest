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
carPage.enterFirstField().type(this.data.numberOne);
carPage.enterSecondField().type(this.data.numberTwo);
carPage.enterThirdField().type(this.data.numberThree);
carPage.enterFourthField().type(this.data.numberFour);
carPage.enterFifthField().type(this.data.numberFive);
carPage.clickLoginButton().click();
})
})
