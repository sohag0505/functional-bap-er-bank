// get withdraw button event handlar
document.getElementById('btn-withdraw').addEventListener('click', function() {
    // get withdraw amount by using getInputFieldValueById function
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

    // get previous withdraw amount by using getTexElementById
    const previousWithdrawTotal = getElementValueById('withdraw-total');

    // calculate previous and new
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    // set new total withdaw by using setTextElementById
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    // get previous balance total
    const previousBalancetTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalancetTotal - newWithdrawAmount;

    // set new balance 
    setTextElementValueById('balance-total', newBalanceTotal);
})