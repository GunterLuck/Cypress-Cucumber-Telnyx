class CoockiesPage{
    submitButton() {
        return cy.get('[id="radix-:r0:"]>div>button:first-of-type')
    } 
    clickSubmitButton() {
        this.submitButton().click()
    }
    acceptCookies() {
        this.submitButton().then(($pass) => {
            if (expect($pass).to.be.visible) {
                this.clickSubmitButton()
            } else {}
        })
    }
}

module.exports = new CoockiesPage()