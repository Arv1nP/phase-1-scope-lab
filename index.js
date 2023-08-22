var customerName = 'bob'
const leastFavoriteCustomer = 'jeff'

function upperCaseCustomerName(b){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
const leastFavoriteCustomer = 'jeff';
leastFavoriteCustomer = 'zack';
}