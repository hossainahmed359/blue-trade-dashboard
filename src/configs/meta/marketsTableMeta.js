
function createData(
    market,
    currency,
    price,
    percentage,
) {
    return { market, currency, price, percentage };
}

export const marketList = [
    createData('BTCUSDT', 'Bitcoin', '$23,495', +23.4),
    createData('AXSUSDT', 'Axie Infinity', '$15.9', -7.8),
    createData('ETHUSDT', 'Ethereum', '$15,978', -0.3),
    createData('SOLUSDT', 'Solana', '$495', +11.1),
    createData('BNBUSDT', 'Binance', '$267 ', +6.7),
    createData('ADAUSDT', 'Cardano', '$0.49', -1.4),
]

export const marketTableRows = {
    'All': [
        createData('BTCUSDT', 'Bitcoin', '$23,495', +23.4),
        createData('AXSUSDT', 'Axie Infinity', '$15.9', -7.8),
        createData('ETHUSDT', 'Ethereum', '$15,978', -0.3),
        createData('SOLUSDT', 'Solana', '$495', +11.1),
        createData('BNBUSDT', 'Binance', '$267 ', +6.7),
        createData('ADAUSDT', 'Cardano', '$0.49', -1.4),
        createData('BTCUSTD', 'Bitcoin', '$23,495', +23.4),
        createData('AXSUSTD', 'Axie Infinity', '$15.9', -7.8),
        createData('ETHUSTD', 'Ethereum', '$15,978', -0.3),
        createData('SOLUSTD', 'Solana', '$495', +11.1),
        createData('BNBUSTD', 'Binance', '$267 ', +6.7),
        createData('ADAUSTD', 'Cardano', '$0.49', -1.4),
    ],
    'Metaverse': [
        createData('BNBUSDT', 'Binance', '$267 ', +6.7),
        createData('ADAUSDT', 'Cardano', '$0.49', -1.4),
        createData('BTCUSTD', 'Bitcoin', '$23,495', +23.4),
        createData('AXSUSTD', 'Axie Infinity', '$15.9', -7.8),
        createData('ETHUSTD', 'Ethereum', '$15,978', -0.3),
        createData('SOLUSTD', 'Solana', '$495', +11.1),
        createData('BNBUSTD', 'Binance', '$267 ', +6.7),
        createData('ADAUSTD', 'Cardano', '$0.49', -1.4),
    ],
    'Gaming': [
        createData('BTCUSTD', 'Bitcoin', '$23,495', +23.4),
        createData('AXSUSTD', 'Axie Infinity', '$15.9', -7.8),
        createData('ETHUSTD', 'Ethereum', '$15,978', -0.3),
        createData('SOLUSTD', 'Solana', '$495', +11.1),
        createData('BNBUSTD', 'Binance', '$267 ', +6.7),
        createData('ADAUSTD', 'Cardano', '$0.49', -1.4),
        createData('BTCUSDT', 'Bitcoin', '$23,495', +23.4),
        createData('AXSUSDT', 'Axie Infinity', '$15.9', -7.8),
        createData('ETHUSDT', 'Ethereum', '$15,978', -0.3),
        createData('SOLUSDT', 'Solana', '$495', +11.1),
        createData('BNBUSDT', 'Binance', '$267 ', +6.7),
        createData('ADAUSDT', 'Cardano', '$0.49', -1.4),
    ],
    'Defi': [
        createData('BTCUSDT', 'Bitcoin', '$23,495', +23.4),
        createData('AXSUSDT', 'Axie Infinity', '$15.9', -7.8),
        createData('SOLUSTD', 'Solana', '$495', +11.1),
        createData('BNBUSTD', 'Binance', '$267 ', +6.7),
        createData('ADAUSTD', 'Cardano', '$0.49', -1.4),
        createData('ETHUSDT', 'Ethereum', '$15,978', -0.3),
        createData('SOLUSDT', 'Solana', '$495', +11.1),
        createData('BNBUSDT', 'Binance', '$267 ', +6.7),
        createData('ADAUSDT', 'Cardano', '$0.49', -1.4),
        createData('BTCUSTD', 'Bitcoin', '$23,495', +23.4),
        createData('AXSUSTD', 'Axie Infinity', '$15.9', -7.8),
        createData('ETHUSTD', 'Ethereum', '$15,978', -0.3),
    ],
    'NFT': [
        createData('ADAUSDT', 'Cardano', '$0.49', -1.4),
        createData('BTCUSTD', 'Bitcoin', '$23,495', +23.4),
        createData('AXSUSTD', 'Axie Infinity', '$15.9', -7.8),
        createData('ETHUSTD', 'Ethereum', '$15,978', -0.3),
        createData('SOLUSTD', 'Solana', '$495', +11.1),
        createData('BTCUSDT', 'Bitcoin', '$23,495', +23.4),
        createData('AXSUSDT', 'Axie Infinity', '$15.9', -7.8),
        createData('ETHUSDT', 'Ethereum', '$15,978', -0.3),
        createData('SOLUSDT', 'Solana', '$495', +11.1),
        createData('BNBUSDT', 'Binance', '$267 ', +6.7),
        createData('BNBUSTD', 'Binance', '$267 ', +6.7),
        createData('ADAUSTD', 'Cardano', '$0.49', -1.4),
    ],
};


export const marketCategory = ['All', 'Metaverse', 'Gaming', 'Defi', 'NFT']