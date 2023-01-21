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
    selCarChecBox(){return(cy.get(':nth-child(3) > .sc-kjUDSv > input'))}
    clickInfoCont(){return( cy.get('[data-test="Car InformationCont1"]'))}
}
export default CarPage