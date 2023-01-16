class CarPage{
    enterEmail(){return(cy.get('#email'))};
    enterPassWord(){return(cy.get('#password'))};
    clickContBtn(){return(cy.get('[data-test="signUpContinue"]'))};
    enterFirstField(){return(cy.get('.otp-cont > :nth-child(1)'))};
    enterSecondField(){return(cy.get('.otp-cont > :nth-child(2)'))}
    enterThirdField(){return(cy.get('.otp-cont > :nth-child(3)'))};
    enterFourthField(){return(cy.get('.otp-cont > :nth-child(4)'))};
    enterFifthField(){return(cy.get('.otp-cont > :nth-child(5)'))}
    clickLoginButton(){return(cy.get('.blue'))}

}
export default CarPage