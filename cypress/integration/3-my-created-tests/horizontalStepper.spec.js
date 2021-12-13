
//This test goes through the Horizontal stepper wizard. /pages/layout/stepper
//
//It checks the initial state of the form, performs a step, checks the changed state of the form, performs the next step, and so on.
//
//There are 3 steps and 3 form states.
//
//Wanted to check that the Index Labels switch to Checkmark correctly after each step but can't figure out how to check beyond the first one. :(


describe('Horizontal stepper', () => {

    before('Reach the Stepper tab under Layout', () => {

        cy.visit('/')
        cy.contains('Layout').click()
        cy.contains('Stepper').click()

    })

    it('Check state of form on 1st step', () => {

        cy.get('[cy-data="horizontalStepper"]').then(onFirstStep => {

            cy.wrap(onFirstStep)
                .find('.ng-star-inserted')
                .should('contain', '1')

            cy.wrap(onFirstStep)
                .find('.lorem')
                .should('contain', 'Lorizzle')

            cy.wrap(onFirstStep)
                .find('input')
                .invoke('attr', 'placeholder')
                .should('contain', 'Enter your name')

            cy.wrap(onFirstStep)
                .find('button')
                .should('contain', 'next')
        })

    })

    it('Complete the 1st step', () => {

        cy.get('[cy-data="horizontalStepper"]')
            .find('input')
            .type('My Name')
            .parents('form')
            .find('button').click()

    })

    it('Check state of form on 2nd step', () => {

        cy.get('[cy-data="horizontalStepper"]').then(onSecondStep => {

            cy.wrap(onSecondStep)
                .find('.label-index')
                .children()
                .invoke('attr', 'icon')
                .should('contain', 'checkmark-outline')

            cy.wrap(onSecondStep)
                .find('.lorem')
                .should('contain', 'Pellentesque')

            cy.wrap(onSecondStep)
                .find('input')
                .invoke('attr', 'placeholder')
                .should('contain', 'Enter favorite movie')

            cy.wrap(onSecondStep)
                .find('button')
                .should('contain', 'prev')
                .and('contain', 'next')

        })


    })

    it('Complete the 2nd step', () => {

        cy.get('[cy-data="horizontalStepper"]')
            .find('input')
            .type('My Favorite Movie')
            .parents('form')
            .find('[type="submit"]').click()

    })

    it('Check state of form on 3rd step', () => {

        cy.get('[cy-data="horizontalStepper"]').then(onThirdStep => {

            //Finds only the first button. How can I look for both?
            cy.wrap(onThirdStep)
                .find('.label-index')
                .children()
                .invoke('attr', 'icon')
                .should('contain', 'checkmark-outline')

            cy.wrap(onThirdStep)
                .find('.lorem')
                .should('contain', 'Things boom')

            cy.wrap(onThirdStep)
                .find('input')
                .invoke('attr', 'placeholder')
                .should('contain', 'Enter something')

            cy.wrap(onThirdStep)
                .find('button')
                .should('contain', 'prev')
                .and('contain', 'Confirm')

        })
    })

    it('Complete the 3rd step', () => {

        cy.get('[cy-data="horizontalStepper"]')
            .find('input')
            .type('Something')
            .parents('form')
            .find('[type="submit"]').click()
    })
    it('Check state of form on 3rd step', () => {

        cy.get('[cy-data="horizontalStepper"]').then(onCompletion => {

            //Finds only the first button. How can I look for both?
            cy.wrap(onCompletion)
                .find('.label-index')
                .children()
                .invoke('attr', 'icon')
                .should('contain', 'checkmark-outline')

            cy.wrap(onCompletion)
                .find('.step-container')
                .should('contain', 'Wizard completed!')

            cy.wrap(onCompletion)
                .find('button')
                .should('contain', 'Try again')

        })
    })

})