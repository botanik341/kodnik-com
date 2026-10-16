'use strict';
const target = new URL('https://kodnik-fulfillment.ujot.workers.dev/en/account.html');
target.search = location.search;
target.hash = location.hash;
location.replace(target.href);
