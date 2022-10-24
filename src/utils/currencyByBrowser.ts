export const currencyByBrowser = () => {
  if (navigator.language === 'en') {
    return 'USD';
  }

  return 'RUB';
};
