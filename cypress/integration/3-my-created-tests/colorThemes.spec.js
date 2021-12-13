//This test cycles through the available Color Themes
//
//After selecting a theme it also checks that the color of the main elements is the correct one as well as for the name change of the Theme button

describe('Color Themes', () => {

    beforeEach('Run before each test', () => {

        cy.visit('/')
        cy.get('nav nb-select').click()
    })

    it('Dark Theme', () => {

        cy.get('.options-list [ng-reflect-value="dark"]').click()

        cy.get('nav nb-select').should('contain', 'Dark')
        cy.get('nb-select button').should('have.css', 'background-color', 'rgb(26, 33, 56)')
        cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')
        cy.get('div .layout').should('have.css', 'background-color', 'rgb(21, 26, 48)')
    })

    it('Cosmic Theme', () => {

        cy.get('.options-list [ng-reflect-value="cosmic"]').click()

        cy.get('nav nb-select').should('contain', 'Cosmic')
        cy.get('nb-select button').should('have.css', 'background-color', 'rgb(37, 37, 71)')
        cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(50, 50, 89)')
        cy.get('div .layout').should('have.css', 'background-color', 'rgb(27, 27, 56)')
    })

    it('Corporate Theme', () => {

        cy.get('.options-list [ng-reflect-value="corporate"]').click()

        cy.get('nav nb-select').should('contain', 'Corporate')
        cy.get('nb-select button').should('have.css', 'background-color', 'rgb(247, 249, 252)')
        cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('div .layout').should('have.css', 'background-color', 'rgb(237, 241, 247)')
    })

    it('Light Theme', () => {

        cy.get('.options-list [ng-reflect-value="default"]').click()

        cy.get('nav nb-select').should('contain', 'Light')
        cy.get('nb-select button').should('have.css', 'background-color', 'rgb(247, 249, 252)')
        cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('div .layout').should('have.css', 'background-color', 'rgb(237, 241, 247)')
    })
})