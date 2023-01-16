/// <reference types="Cypress" />
import CarPage from "../POM/CarPage";
const carPage = new CarPage()
describe("Create a carlisting",function(){
it("Create carListing",function(){
    //Login
cy.visit('/')
carPage.enterEmail().type("olabanjotboy@gmail.com");
carPage.enterPassWord().type("Testing@123");
carPage.clickContBtn().click();
carPage.enterFirstField().type('6');
carPage.enterSecondField().type('8');
carPage.enterThirdField().type('2');
carPage.enterFourthField().type('7');
carPage.enterFifthField().type('3');
carPage.clickLoginButton().click();
})
})