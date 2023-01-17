/// <reference types="Cypress"/>
///<reference types="cypress-iframe" />
import LoginPage from "../POM/LoginPage";
import CarPage from "../POM/CarPage";
const loginPage = new LoginPage();
const carPage   = new CarPage();
describe("Create a carlisting",function(){
    before(function(){
        cy.visit('/')
   cy.fixture("CarData").then(function(data) {
        this.data=data
    })
})
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  });
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
carPage.pickCreateList().click({force:true})
carPage.selHostCar().click({force:true})
   //location details
carPage.selLocField().type('432 Bukit Batok West Avenue 8,')
carPage.selLocDropDown().each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    if ($el.text() === '432 Bukit Batok West Avenue 8, Singapore') {
      // wrap this element so we can
      // use cypress commands on it
      cy.wrap($el).click()
    } 
  })
  carPage.enterCarVin().type("KNEPB3A23B7135414")
  carPage.pickVerificationLink().click()
  carPage.clickContinueButton().click()
  });

})

