const puppeteer = require('puppeteer');
const func = async (targetHref) => {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
    const url = "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/"
	await page.goto(url,{waitUntil:'domcontentloaded'});
	await page.waitForTimeout(1000);
	await page.click('#login-signup');
	// await page.waitForNavigation();
	await page.waitForTimeout(1000);
	await page.type('#email', 'chittij7@gmail.com');
	await page.type('#password', 'tmK7pnMzYp2aev_');
	await page.click('#login-form>div:nth-child(3)>button:nth-child(1)');
	await page.waitForTimeout(1000);
    const iddd = await page.evaluate((targetHref) => {
      return document.querySelector(`a[href="${targetHref}"]`).parentElement.parentElement.firstChild.firstChild.id;
    }, targetHref);
    await page.select(`#${iddd}`,'1');
	await page.waitForTimeout(1000);
	await browser.close();
}
func("https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/");