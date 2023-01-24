class CarPage{
    // Car links
    pickCreateList(){return(cy.get(".pl-3.text-sm.font-normal"))};
    selHostCar(){return(cy.get('[data-test="hostCarLink"]'))};
    //location details 
    selLocField(){return(cy.get('[data-test="carLocation"]'))};
    selLocDropDown(){return(cy.get('.autocomplete-dropdown-container >'))}
    enterCarVin(){return(cy.get('[data-test="carVIN"]'))}
    pickVerificationLink(){return(cy.get('[data-test="addDiscountText"] > [data-test="carVINAddon"]'))}
    clickContinueButton(){return(cy.get('[data-test="Location DetailsCont1"]'))}
    // car information
    selCarMil(){return(cy.get('[data-test="seleCarMilInner"]'))}
    pickCarMil(){return(cy.get("[data-test='seleCarMil30,000 - 60,000 miles']"))}
    selCarTransmit(){return( cy.get('[data-test="carTransInner"]'))}
    pickCarTransmit(){return(cy.get('[data-test="carTransAutomatic"]'))}
    selStyleInner(){return(cy.get('[data-test="seleStyleInner"]'))}
    pickStyleInner(){return(cy.get('[data-test="seleStyleCoupe"]'))}
    selTrimInner(){return(cy.get('[data-test="seleTrimInner"]'))}
    pickTrimInner(){return(cy.get('[data-test="seleTrimGT"]'))}
    pickCarColor(){return(cy.get('[data-test="carColor"]'))}
    selNumOfSit(){return(cy.get('[data-test="numbOfSeatsInner"]'))}
    pickNumOfSit(){return(cy.get('[data-test="numbOfSeats3"]'))}
    selNumOfDoor(){return(cy.get('[data-test="numbOfDoorsInner"]'))}
    pickNumOfDoors(){return(cy.get('[data-test="numbOfDoors3"]'))}
    selGreenVehicles(){return(cy.get('[data-test="greenVehiclesInner"]'))}
    pickGreenVehicles(){return(cy.get('[data-test="greenVehiclesHybrid"]'))}
    selCarChecBox(){return(cy.get(':nth-child(3) > .sc-kROzcB > input'))}
    clickInfoCont(){return(cy.get('[data-test="Car InformationCont1"]'))}
    //Booking information
    selAdvNoticeBeforePickUp(){return(cy.get('[data-test="advanceNoticeBeforePickupInner"]'))}
    pickAdvNoticeBeforePickUp(){return(cy.get('[data-test="advanceNoticeBeforePickup2 hours before"]'))}
    selBookAvail() { return cy.get('[data-test="bookingAvailabilityInMonthsInner"]') };
    pickBookAvail() { return cy.get('[data-test="bookingAvailabilityInMonthsAlways available"]') };
    selMinTripDuration(){return(cy.get('[data-test="minimumTripDurationInDaysInner"]'))}
    pickMinTripDuration(){return(cy.get('[data-test="minimumTripDurationInDays3 days"]'))}
    selMaxTripDuration(){return(cy.get('[data-test="maximumTripDurationInDaysInner"]'))}
    pickMaxTripDuration(){return(cy.get('[data-test="maximumTripDurationInDays2 weeks"]'))}
    selDailyLimitRange(){return(cy.get('[data-test="dailyLimitRangeInner"]'))}
    pickDailyLimitRange(){return(cy.get('[data-test="dailyLimitRange0 - 50,000Km/Day"]'))}
    selApprovalCheckBox(){return(cy.get('[data-test="requiresApprovalBeforeBookingConfirmation"]'))}
    clickBookingInfo(){return(cy.get('[data-test="Booking InformationCont1"]'))}
   // Car features 
    pickBlindSpotAlert() {return (cy.get("input[value='63172ab8bba5a9a009452a80']"))}
    pickBluetooth(){return(cy.get(':nth-child(2) > .sc-kROzcB > input'))}
    pickParkingAssistant(){return(cy.get(':nth-child(11) > .sc-kROzcB > input'))}
    enterCustomeField() { return(cy.get('[data-test="enterFeature"]'))}
    clickCustomeField(){return(cy.get('[data-test="enterFeatureAddon"]'))}
    carFeatureCont(){return(cy.get('[data-test="Car FeaturesCont1"]'))}
    //Car description
    selCarPlateNumber(){return(cy.get('[data-test="carLicensePlateNumber"]'))}
    checkCarCategories(){return (cy.get(':nth-child(3) > .sc-kROzcB > input'))}
    selCarDescription(){return (cy.get('[data-test="carDescription"]'))}
    clickCarDescriptionCont(){return (cy.get('[data-test="Car DescriptionCont1"]'))}
}
export default CarPage