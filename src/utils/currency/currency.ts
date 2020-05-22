import numeral from 'numeral';

const toCurrency = (value: any) => {
  return numeral(value).format('$0,0.00');
};

export default toCurrency;
