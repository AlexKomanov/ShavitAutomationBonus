import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductsPage } from '../pages/ProductsPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

test('complete purchase flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.goto();
  await loginPage.loginWithValidCredentials();

  // Add products to cart
  await productsPage.addMultipleProductsToCart(['backpack', 'bike light']);
  await expect(productsPage.shoppingCartBadge).toContainText('2');

  // Go to cart and proceed to checkout
  await productsPage.goToCart();
  await cartPage.proceedToCheckout();

  // Complete checkout process
  await checkoutPage.completeCheckout('aaaa', 'bbb', '123');

  // Verify order completion
  await expect(checkoutPage.ponyExpress).toBeVisible();
  await expect(checkoutPage.completeHeader).toContainText('Thank you for your order!');

  // Logout
  await productsPage.logout();
  await expect(loginPage.loginCredentialsContainer).toBeVisible();
});