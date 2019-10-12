const puppeteer = require('puppeteer');
var faker = require('faker');

var count =1;
var interval = setInterval(start, 10*1000);
function start(){
    var firstName = faker.name.firstName(); 
    var lastname =faker.name.lastName();
var userName = faker.internet.userName(); 
var password =faker.internet.password();
register(firstName,lastname,userName,password);

}
 function register(fname,lname,userName,password){
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp');
  
await page.type('#firstName', fname);
await page.type('#lastName', lname);
await page.type('#username', userName);
await page.type('#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input', password);
await page.type('#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input', password);
await page.screenshot({path: `page${count}.png`});
if(count == 10)
clearInterval(interval);

await Promise.all([
    page.waitForNavigation(), // The promise resolves after navigation has finished
    page.click('#accountDetailsNext > div.ZFr60d.CeoRYc'), // Clicking the link will indirectly cause a navigation
  ]);


console.log('New Page URL:', page.url());
  await page.screenshot({path: `page2${count++}.png`});

  await browser.close();
})();

}