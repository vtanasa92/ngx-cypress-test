const { get } = require("core-js/core/dict")

describe('Web Tables', () => {

    it('Web Tables', () => {

        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        // Change Age
        cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '25') // .eq() Get A DOM element at a specific index in an array of elements.
        })

        // Change First and Last Name
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(tableRow => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').type('Artem')
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Bother')
            cy.wrap(tableRow).find('.nb-checkmark').click()
        })

        // Verify that row was added and contains right values
        cy.get('tbody tr').first().find('td').then(tableColumns => {
            cy.wrap(tableColumns).eq(2).should('contain', "Artem")
            cy.wrap(tableColumns).eq(3).should('contain', "Bother")
        })

        // Table Search function
        const age = [20, 30, 40, 200]
        cy.wrap(age).each(age => { // Convert list to cy element. Noice.

            cy.get('thead [placeholder="Age"]').clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each(tableRow => {
                if (age == 200) {
                    cy.wrap(tableRow).should('contain', 'No data found')
                } else {
                    cy.wrap(tableRow).find('td').eq(6).should('contain', age)
                }
            })
        })
    })
})