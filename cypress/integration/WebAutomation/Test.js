describe("test",function(){
    it("validate the url",function(){
        cy.visit("https://output.jsbin.com/usidix/1")
        cy.get('input').click()
        cy.get('input').should("have.value","Go!")



        
    })
})