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
}
 export default CarPage