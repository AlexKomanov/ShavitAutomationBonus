export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.loginCredentialsContainer = page.locator('[data-test="login-credentials-container"] div').first();
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    if (username) {
      await this.usernameField.click();
      await this.usernameField.fill(username);
    }
    if (password) {
      await this.passwordField.click();
      await this.passwordField.fill(password);
    }
    await this.loginButton.click();
  }

  async loginWithValidCredentials() {
    await this.login('standard_user', 'secret_sauce');
  }

  async loginWithLockedUser() {
    await this.login('locked_out_user', 'secret_sauce');
  }

  async loginWithoutCredentials() {
    await this.loginButton.click();
  }

  async loginWithUsernameOnly(username) {
    await this.login(username, null);
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async isLoginPageVisible() {
    return await this.loginCredentialsContainer.isVisible();
  }
}