import { BitCoinIcon, EthereumIcon, IcSolIcon, WalletIcon } from '../../assets/images/icons/icons';


const data = [

    { "x": 2000, "y": 2 },
    { "x": 2001, "y": 4 },
    { "x": 2002, "y": 9 },
    { "x": 2003, "y": 5 },
    { "x": 2004, "y": 12 },
    { "x": 2005, "y": 9 },
    { "x": 2006, "y": 8 },
    { "x": 2007, "y": 20 },
    { "x": 2008, "y": 10 },
    { "x": 2009, "y":  8},
];


const generateLineChartData = () => {
    const xLabels = data.map(item => item.x);
    const pData = data.map(item => item.y);

    return {xLabels, pData}
}


export const statBoxMeta = (colors) => {

    return [
        {
            IconElement: (color) => <WalletIcon color={color}/>,
            chosenColors: {
                primaryColor: colors.blueAccent[500],
                bgColor: colors.blueAccent[800],
            },
            isMainBalance: true,
            title: 'Estimated Balance',
            balance: '$123,987',
            stats: {
                statsTitle: 'Monthly Profit',
                statsPrice: '+$2560.78',
                isBalanceNeg: false,
                statsPercentage: '+14.67%'
            },
        },
        {
            IconElement: (color) => <BitCoinIcon color={color}/>,
            chosenColors: {
                primaryColor: colors.yellowAccent[500],
                bgColor: colors.yellowAccent[800],
            },
            title: 'BTCUSDT',
            subtitle: 'Bitcoin',
            balance: '$23,738',
            stats: {
                statsTitle: 'PNL Daily',
                statsPrice: '-$16.78',
                isBalanceNeg: true,
                statsPercentage: '+14.67%'
            },
            graphData: generateLineChartData()

        },
        {
            IconElement: (color) => <EthereumIcon color={color}/>,
            chosenColors: {
                primaryColor: colors.purpleAccent[500],
                bgColor: colors.purpleAccent[800],
            },

            title: 'ETHUSDT',
            subtitle: 'Ethereum',
            balance: '$23,738',
            stats: {
                statsTitle: 'PNL Daily',
                statsPrice: '+$189.91',
                isBalanceNeg: false,
                statsPercentage: '+24.68%'
            },
            graphData: generateLineChartData()

        },
        {
            IconElement: (color) => <IcSolIcon color={color}/>,
            chosenColors: {
                primaryColor: colors.orangeAccent[500],
                bgColor: colors.orangeAccent[800],
            },

            title: 'SOLUSDT',
            subtitle: 'Solana',
            balance: '$23,738',
            stats: {
                statsTitle: 'PNL Daily',
                statsPrice: '+$556.14',
                isBalanceNeg: false,
                statsPercentage: '+64.11%'
            },
            graphData: generateLineChartData()

        },

    ]
}