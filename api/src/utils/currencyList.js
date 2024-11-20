const currencyList = [
  {
    currency_symbol: '$',
    currency_position: 'before',
    decimal_sep: '.',
    thousand_sep: ',',
    cent_precision: 2,
    zero_format: true,
    currency_name: 'US Dollar',
    currency_code: 'USD',
    enabled: true,
  },
  {
    currency_symbol: '€',
    currency_position: 'after',
    decimal_sep: '.',
    thousand_sep: ' ',
    cent_precision: 2,
    zero_format: true,
    currency_name: 'Euro',
    currency_code: 'EUR',
    enabled: true,
  },
  {
    currency_symbol: '₫',
    currency_position: 'after',
    decimal_sep: '.',
    thousand_sep: ',',
    cent_precision: 0,
    zero_format: true,
    currency_name: 'Vietnamese Dong',
    currency_code: 'VND',
    enabled: true,
  }
];

const formatCurrency = (amount, currencyCode) => {
  const currency = currencyList.find(cur => cur.currency_code === currencyCode);

  if (currency) {
    const formattedAmount = amount
      .toFixed(currency.cent_precision)
      .replace('.', currency.decimal_sep)
      .replace(/\B(?=(\d{3})+(?!\d))/g, currency.thousand_sep);

    return currency.currency_position === 'before'
      ? `${currency.currency_symbol}${formattedAmount}`
      : `${formattedAmount}${currency.currency_symbol}`;
  } else {
    return amount;
  }
};

