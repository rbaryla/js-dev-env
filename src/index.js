/**
 * Created by rbaryla on 08.01.2017.
 */

import numeral from 'numeral';

const numValue = numeral(10000).format('$0,0.00');
document.body.innerHTML += `<p>Formatted num value: ${numValue}</p>`

