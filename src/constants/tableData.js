export const PortFolioData = [
  {
    key: '1',
    asset: 'ETH',
    amount: '32',
    value: '$52420.2',
  },
  {
    key: '2',
    asset: 'USDC',
    amount: '50000',
    value: '$52420.2',
  },
  {
    key: '3',
    asset: 'USDT',
    amount: '32000',
    value: '$52420.2',
  },
  {
    key: '4',
    asset: 'DAI',
    amount: '64540',
    value: '$52420.2',
  },
  {
    key: '5',
    asset: 'LINK',
    amount: '65161',
    value: '$52420.2',
  },
];


export const PortFolioColumns = [
  {
    title: 'asset',
    dataIndex: 'asset',

  },
  {
    title: 'amount',
    dataIndex: 'amount',

  },
  {
    title: 'value',
    dataIndex: 'value',

  },



];





export const BorrowData = [
  {
    key: '1',
    platform: 'Aave',
    loan: '10 ETH / 1102975.3 USD',
    time: '2022-11-10',
    status: 'Closed',
    date: '2023-03-11',
    // health: 'Liquidated',


  },
  {
    key: '2',
    platform: 'Compund',
    loan: '20 ETH / 59570.9 USD',
    time: '2023-03-11',
    status: 'Open',
    date: '-',
    // health: 'Liquidated',


  },
  {
    key: '3',
    platform: 'Aave',
    loan: '10 ETH / 19354.40 USD',
    time: '2023-03-12',
    status: 'Closed',
    date: '2023-03-13',
    // health: 'Liquidated',


  },
  {
    key: '4',
    platform: 'Compund',
    loan: '20 ETH / 38708.80 USD',
    time: '2023-03-13',
    status: 'Open',
    date: '-',
    // health: 'Liquidated',


  },
  {
    key: '5',
    platform: 'Aave',
    loan: '10 ETH / 19354.40 USD',
    time: '2023-03-25',
    status: 'Open',
    date: '2023-03-25',
    // health: 'Liquidated',

  },
];


export const BorrowColumns = [
  {
    key: 0,
    title: 'Lending Platform',
    dataIndex: 'platform',

  },
  {
    key: 1,
    title: 'Loan Amount (USD)',
    dataIndex: 'loan_amount',

  },

  {
    key: 2,
    title: "Interest Paid (USD)",
    dataIndex: 'interest_paid',

  },

  {
    key: 3,
    title: 'Time of Loan',
    dataIndex: 'loan_time',

  },

  {
    key: 4,
    title: 'Status',
    dataIndex: 'status',

  },

  {
    key: 5,
    title: 'Date Closed',
    dataIndex: 'date_closed',

  },






];
