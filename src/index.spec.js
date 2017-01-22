/**
 * Created by rbaryla on 08.01.2017.
 */

import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe("Our first test", () => {
  it('shuld pass', () => {
    expect(true).to.equal(true);
  })
});

describe("index.html", () => {
  it('shuld say Header', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, (err, window) => {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Users');
      done();
      window.close();
    });
  });
});
