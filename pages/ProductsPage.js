export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
    
    // Product add to cart buttons
    this.addBackpackToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.addBikeLightToCart = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
  }

  async addProductToCart(productName) {
    switch (productName.toLowerCase()) {
      case 'backpack':
        await this.addBackpackToCart.click();
        break;
      case 'bike light':
        await this.addBikeLightToCart.click();
        break;
      default:
        throw new Error(`Product ${productName} not found`);
    }
  }

  async addMultipleProductsToCart(products) {
    for (const product of products) {
      await this.addProductToCart(product);
    }
  }

  async getCartItemCount() {
    return await this.shoppingCartBadge.textContent();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}