const puppeteer = require('puppeteer');
const express = require("express");
const app = express();
const port = 3000;
app.get("/", async (req,res)=>{
	const {uri} = req.query;
	await func(uri);
	res.json({msg:"DONE"});
})
app.listen(port,()=>{
	console.log("Started Server");
})
const func = async (targetHref) => {
	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();
    const url = "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/"
	await page.goto(url,{waitUntil:'domcontentloaded'});
	await page.waitForTimeout(2000);
	await page.click('#login-signup');
	// await page.waitForNavigation();
	await page.waitForTimeout(2000);
	await page.type('#email', 'chittij7@gmail.com');
	await page.type('#password', 'tmK7pnMzYp2aev_');
	await page.click('#login-form>div:nth-child(3)>button:nth-child(1)');
	await page.waitForTimeout(2000);
    const iddd = await page.evaluate((targetHref) => {
      return document.querySelector(`a[href="${targetHref}"]`).parentElement.parentElement.firstChild.firstChild.id;
    }, targetHref);
    await page.select(`#${iddd}`,'1');
	await page.waitForTimeout(1000);
	await browser.close();
}
