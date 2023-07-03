document.getElementById('btn-deposit').addEventListener('click', function() {
    const newDepositAmount = getInputFieldValueById("deposit-field");
    // get previous deposit total
    const previousDepositTotal = getElementValueById('deposit-total');
    // calculate new deposit total

    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setTextElementValueById('deposit-total', newDepositTotal);
    // get previous balance and using function

    const previousBalancetTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalancetTotal + newDepositAmount;

    setTextElementValueById('balance-total', newBalanceTotal);

})