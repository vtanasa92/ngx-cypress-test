describe('Popups and Tooltips', () => {

    it.only('Tooltips', () => {

        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

        cy.contains('nb-card', 'Colored Tooltips')
          .contains('Default').click()

        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
    })

    it('Dialogue Box - Alert', () => { 

        //Cypress cannot see Browser Alerts. It autimatically confirms them.
        
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        //This will pass regardless of the Alert being displayed or not.

        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', (confirm) => {
            expect(confirm).to.equal('Are you sure you want to delete?')
        })

        // This will only pass of the Alrt is being displayed.

        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })
    })

        
})