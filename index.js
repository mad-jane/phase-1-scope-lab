var customerName = "bob"

function upperCaseCustomerName() {
    customerName =  customerName.toUpperCase()
}

function setBestCustomer() {
    globalThis.bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'karen'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'sally'
}