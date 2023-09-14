import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

const generateRandomGraphData = (length = 7) => {

    const arr = Array.from({ length })
    arr.forEach(((el, index) => arr[index] = getRandomNumber(10, 1000)))

    const xLabels = Array.from({ length }).map((el, index) => index + 1);
    const pData = [...arr];

    return { xLabels, pData }
}


export const statBoxMeta = (colors) => {

    return [
        {
            IconElement: (color) => <AccountBalanceWalletIcon sx={{ color: color, fontSize: '1.7rem' }} />,
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
            IconElement: (color) => <AccountBalanceWalletIcon sx={{ color: color, fontSize: '1.7rem' }} />,
            chosenColors: {
                primaryColor: colors.blueAccent[500],
                bgColor: colors.blueAccent[800],
            },
            title: 'Estimated Balance',
            subtitle: 'Bitcoin',
            balance: '$123,987',
            stats: {
                statsTitle: 'Monthly Profit',
                statsPrice: '-$2560.78',
                isBalanceNeg: true,
                statsPercentage: '14.67%'
            },
            graphData: generateRandomGraphData()

        },
        {
            IconElement: (color) => <AccountBalanceWalletIcon sx={{ color: color, fontSize: '1.7rem' }} />,
            chosenColors: {
                primaryColor: colors.blueAccent[500],
                bgColor: colors.blueAccent[800],
            },

            title: 'Estimated Balance',
            subtitle: 'Bitcoin',
            balance: '$123,987',
            stats: {
                statsTitle: 'Monthly Profit',
                statsPrice: '+$2560.78',
                isBalanceNeg: false,
                statsPercentage: '+14.67%'
            },
            graphData: generateRandomGraphData()

        },
        {
            IconElement: (color) => <AccountBalanceWalletIcon sx={{ color: color, fontSize: '1.7rem' }} />,
            chosenColors: {
                primaryColor: colors.blueAccent[500],
                bgColor: colors.blueAccent[800],
            },

            title: 'Estimated Balance',
            subtitle: 'Bitcoin',
            balance: '$123,987',
            stats: {
                statsTitle: 'Monthly Profit',
                statsPrice: '+$2560.78',
                isBalanceNeg: false,
                statsPercentage: '+14.67%'
            },
            graphData: generateRandomGraphData()

        },

    ]
}