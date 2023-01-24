/// <reference types="Cypress"/>
///<reference types="cypress-iframe" />
import LoginPage from "../POM/LoginPage";
import CarPage from "../POM/CarPage";
import RandomNumber from "../POM/RandomNumber";
const loginPage = new LoginPage();
const carPage   = new CarPage();
const varNumber = new RandomNumber();
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
carPage.enterCarVin().type(this.data.carVin)
carPage.pickVerificationLink().click()
carPage.clickContinueButton().click()
  //Car information
carPage.selCarMil().click()
carPage.pickCarMil().click()
carPage.selCarTransmit().click()
carPage.pickCarTransmit().click()
carPage.selStyleInner().click()
carPage.pickStyleInner().click()
carPage.selTrimInner().click()
carPage.pickTrimInner().click()
carPage.pickCarColor().type(this.data.carColor)
carPage.selNumOfSit().click()
carPage.pickNumOfSit().click()
carPage.selNumOfDoor().click()
carPage.pickNumOfDoors().click()
carPage.selGreenVehicles().click()
carPage.pickGreenVehicles().click({force:true})
carPage.selCarChecBox().click()
carPage.clickInfoCont().click({force:true})
//Booking information
carPage.selAdvNoticeBeforePickUp().click()
carPage.pickAdvNoticeBeforePickUp().click()
carPage.selBookAvail().click()
carPage.pickBookAvail().click()
carPage.selMinTripDuration().click()
carPage.pickMinTripDuration().click()
carPage.selMaxTripDuration().click()
carPage.pickMaxTripDuration().click()
carPage.selDailyLimitRange().click()
carPage.pickDailyLimitRange().click()
carPage.selApprovalCheckBox().click()
carPage.clickBookingInfo().click()
//Car features
carPage.pickBlindSpotAlert().check()
carPage.pickBluetooth().check()
carPage.pickParkingAssistant().check()
carPage.enterCustomeField().type(this.data.carFeature)
carPage.enterCustomeField().click()
carPage.carFeatureCont().click()
//Car description
carPage.selCarPlateNumber().type(varNumber.plateNumber)
carPage.checkCarCategories().check()
carPage.selCarDescription().type("black")
carPage.clickCarDescriptionCont().click()
});

})

 