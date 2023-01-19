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
  //Car information
  cy.get('[data-test="seleCarMilInner"]').click()
  cy.get("[data-test='seleCarMil30,000 - 60,000 miles']").click()
  cy.get('[data-test="carTransInner"]').click()
  cy.get('[data-test="carTransAutomatic"]').click()
  cy.get('[data-test="seleStyleInner"]').click()
  cy.get('[data-test="seleStyleCoupe"]').click()
  cy.get('[data-test="seleTrimInner"]').click()
  cy.get('[data-test="seleTrimGT"]').click()
  cy.get('[data-test="carColor"]').type("blue")
  cy.get('[data-test="numbOfSeatsInner"]').click()
  cy.get('[data-test="numbOfSeats3"]').click()
  cy.get('[data-test="numbOfDoorsInner"]').click()
  cy.get('[data-test="numbOfDoors3"]').click()
  cy.get('[data-test="greenVehiclesInner"]').click()
  cy.get('[data-test="greenVehiclesHybrid"]').click({force:true})
  cy.get(':nth-child(3) > .sc-kjUDSv > input').click()
  cy.get('[data-test="Car InformationCont1"]').click({force:true})


  });

})

 