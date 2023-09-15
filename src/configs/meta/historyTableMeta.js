function createData(
    nagBalance,
    transactionType,
    balance,
    time, 
    status
) {
    return { nagBalance, transactionType, balance, time, status };
}

export const historyTableRows = [
    createData(false, 'Deposit', '+$23,738', '11:34 PM', 'pending'),
    createData(true, 'SANDUSDT', '-$576', '06:01 AM', 'done'),
    createData(false, 'DOGEUSDT', '+$3500', '02:10 AM', 'done'),
    createData(true, 'FTMUSDT', '+$791', '06:45 PM', 'done'),
]