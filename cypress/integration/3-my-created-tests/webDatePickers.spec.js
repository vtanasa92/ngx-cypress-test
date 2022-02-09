describe('Web Date Pickers', () => {

    it('Date Picker', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        let date = new Date() //By default, JavaScript will use the browser's time zone and display a date as a full text string:Mon Jan 31 2022 14:28:44 GMT+0200 (Eastern European Standard Time)
        date.setDate(date.getDate() + 50)
        let futureDay = date.getDate()
        let futureMonth = date.toLocaleString('default', { month: 'short' })
        let dateAssert = futureMonth+' '+futureDay+', '+date.getFullYear()

        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()
            selectDayFromCurrent()
            function selectDayFromCurrent() {
                cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
                    if (dateAttribute.includes(futureMonth)) {
                        cy.get('[data-name="chevron-right"]').click()
                        selectDayFromCurrent()
                    } else {
                        cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
                    }
                })
            }
            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
        })
    })
})