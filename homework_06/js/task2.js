/**
 * We set exchange rates (actuality on 08.02.2017)
 */
var euro_exchange = 33.4602;
var usd_exchange = 27.11;

/**
 * Enter the amount of currency (dollar an euro)
 */
var  euro_sum = parseFloat(prompt('Please enter quantity UERO', 10));
var  usd_sum = parseFloat(prompt('Please enter quantity USD', 20));

var multi_usd = 0;
var multi_euro = 0;
var euro_equal = 0;

if(euro_sum && usd_sum) {

  /**
   * Currency calculation
   */
  multi_usd = (usd_sum * usd_exchange).toFixed(2);
  multi_euro = (euro_sum * euro_exchange).toFixed(2);
  euro_equal = (euro_exchange/usd_exchange).toFixed(2);

  console.log(euro_sum + ' euro(s) are equal ' + multi_euro + ' UAH, ' + usd_sum + ' dollar(s) are equal ' + multi_usd + ' UAH, one euro is equal ' + euro_equal + ' dollar(s)');

} else {
  console.log('Incorrect amount entered');
}
