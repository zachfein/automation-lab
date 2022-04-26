const { Builder, Capabilities, By } = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('X removes movie from the list', async () => {
    const movie = 'Get Out'
    await driver.findElement(By.xpath('//input')).sendKeys(movie)
    await driver.sleep(1000)
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(2000)

    await driver.findElement(By.id('GetOut')).click()
    await driver.sleep(2000)
})

test('crossOutMovie works', async () => {
    const movie = 'Get Out'
    await driver.findElement(By.xpath('//input')).sendKeys(movie)
    await driver.sleep(1000)
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(1000)

    await driver.findElement(By.xpath('//li/span')).click()

    await driver.sleep(2000)
})

test('text appears when spans are clicked', async () => {
    const movie = 'Get Out'
    
    await driver.findElement(By.xpath('//input')).sendKeys(movie)
    await driver.sleep(1000)
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(1000)

    await driver.findElement(By.xpath('//li/span')).click()

    let tempMsg = await driver.findElement(By.xpath('//aside'))
    expect(tempMsg).toBeTruthy()

    await driver.sleep(3000)
})