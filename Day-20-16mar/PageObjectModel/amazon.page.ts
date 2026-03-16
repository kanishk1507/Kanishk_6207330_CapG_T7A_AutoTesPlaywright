class AmazonPage {
    page: any
    searchBar: any
    searchBtn: any
    mobileResults: any
    addToCartBtn: any
    cartBtn: any
    constructor(page) {
        this.page = page
        this.searchBar = page.locator("input#twotabsearchtextbox")
        this.searchBtn = page.locator("#nav-search-submit-button")
        this.mobileResults = page.locator("//a[@class='a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal']")
        this.addToCartBtn = page.locator("#add-to-cart-button")
        this.cartBtn = page.locator("#nav-cart")
    }
    async navigate(url: string) {
        await this.page.goto(url)
    }
    async searchProduct(product: string) {
        await this.searchBar.fill(product)
        await this.searchBtn.click()
    }
    async selectRamFilter(ram: string) {

        await this.page.getByRole('link', { name: 'Apply the filter 10 GB & Above to narrow results' }).click()
    }
    async openFourthMobile(context) {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            this.mobileResults.nth(3).click()
        ])
        await newPage.waitForLoadState()
        return newPage
    }
}
export default AmazonPage