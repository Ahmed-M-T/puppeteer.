const puppeteer = require('puppeteer');
var count =1;
var interval = setInterval(register, 10*1000);

 function register(){
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp');
  
await page.type('#firstName', 'ahmed');
await page.type('#lastName', 'taha');
await page.type('#username', 'ahmed.mtaha53');
await page.type('#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input', '$!#@ahmed123');
await page.type('#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input', '$!#@ahmed123');
await page.screenshot({path: `example${count++}.png`});
if(count == 10)
clearInterval(interval);

await Promise.all([
    page.waitForNavigation(), // The promise resolves after navigation has finished
    page.click('#accountDetailsNext > div.ZFr60d.CeoRYc'), // Clicking the link will indirectly cause a navigation
  ]);


console.log('New Page URL:', page.url());
  await page.screenshot({path: 'example2.png'});

  await browser.close();
})();

}