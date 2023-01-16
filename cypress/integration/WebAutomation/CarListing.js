/// <reference types="Cypress"/>
///<reference types="cypress-iframe" />
import LoginPage from "../POM/LoginPage";
import CarPage from "../POM/CarPage";
const loginPage = new LoginPage();
const carPage = new CarPage();
describe("Create a carlisting",function(){
    before(function(){
        cy.visit('/')
   cy.fixture("CarData").then(function(data) {
        this.data=data
    })
})
it("Create carListing",function(){
loginPage.enterEmail().type(this.data.Email);
loginPage.enterPassWord().type(this.data.Password);
loginPage.clickContBtn().click();
loginPage.enterFirstField().type(this.data.numberOne);
loginPage.enterSecondField().type(this.data.numberTwo);
loginPage.enterThirdField().type(this.data.numberThree);
loginPage.enterFourthField().type(this.data.numberFour);
loginPage.enterFifthField().type(this.data.numberFive);
loginPage.clickLoginButton().click();
   // Create Car link
carPage.pickCreateList().click()
carPage.selHostCar().click()
})
})

