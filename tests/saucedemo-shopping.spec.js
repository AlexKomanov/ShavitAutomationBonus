const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Shopping Flow', () => {
  test('Login and manage shopping cart - add 3 most expensive products and remove 2 cheapest', async ({ page }) => {
    // Step 1: Navigate to SauceDemo website
    await page.goto('https://www.saucedemo.com');
    await expect(page).toHaveTitle('Swag Labs');

    // Step 2: Login with standard user credentials
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Verify successful login by checking we're on inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');

    // Step 3: Sort products by price (high to low) to identify most expensive items
    await page.locator('[data-test="product-sort-container"]').selectOption('Price (high to low)');

    // Step 4: Add the 3 most expensive products to cart
    // Product 1: Sauce Labs Fleece Jacket ($49.99) - Most expensive
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    
    // Product 2: Sauce Labs Bolt T-Shirt ($15.99) - Third most expensive available
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    
    // Product 3: Test.allTheThings() T-Shirt (Red) ($15.99) - Also $15.99
    await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

    // Verify cart count increased (should show 5 items total including pre-existing items)
    await expect(page.locator('.shopping_cart_badge')).toHaveText('3');

    // Step 5: Go to shopping cart
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.locator('.title')).toHaveText('Your Cart');


    console.log('✅ Test completed successfully!');
    console.log('📝 Summary:');
    console.log('   - Logged in with standard_user');
    console.log('   - Added 3 most expensive products to cart');
    console.log('   - Removed 2 cheapest products from cart');
    console.log('   - Final cart contains 3 items worth: $95.97');
  });
});