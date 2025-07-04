import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.loginWithLockedUser();
  await expect(loginPage.errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out.');
});

test('login without credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.loginWithoutCredentials();
  await expect(loginPage.errorMessage).toContainText('Epic sadface: Username is required');
});

test('login with username only', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.loginWithUsernameOnly('standard_user');
  await expect(loginPage.errorMessage).toContainText('Epic sadface: Password is required');
});