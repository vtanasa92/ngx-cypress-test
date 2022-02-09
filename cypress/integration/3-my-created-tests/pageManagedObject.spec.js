const { createYield } = require("typescript")
const { formLayoutsPage, onFormLayoutsPage } = require("../../support/page_objects/formLayoutsPage")
const { onNavigationPage, navigateTo } = require("../../support/page_objects/navigationPage")
const { onSmartTablePage } = require("../../support/page_objects/smartTablePage")

describe('Test with PMO', () => {

    beforeEach('Open Application', () => {
        cy.openHomePage()
    })

    it('Verify Navigation across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.formLayoutsPage()
        navigateTo.smartTablepage()
        navigateTo.toasterPage()
        navigateTo.tooltipsPage()
    })

    it('Should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Vali', 'test@test.com')
        onFormLayoutsPage.submitInlineFormWithEmailAndPassword('test@test.com', 'Password')
    })

    it.only('Smart Tables', () => {
        navigateTo.smartTablepage()
        onSmartTablePage.addNewRecordWithFirstaAndLastname('Vali', 'Tanasa')
        onSmartTablePage.updateAgeByFirstName('Vali', '33')
        //onSmartTablePage.deleteRowByIndex('1')
    })
})