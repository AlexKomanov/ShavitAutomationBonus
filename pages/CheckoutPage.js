export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator('[data-test="firstName"]');
    this.lastNameField = page.locator('[data-test="lastName"]');
    this.postalCodeField = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('[data-test="complete-header"]');
    this.ponyExpress = page.locator('[data-test="pony-express"]');
  }

  async fillPersonalInformation(firstName, lastName, postalCode) {
    await this.firstNameField.click();
    await this.firstNameField.fill(firstName);
    await this.lastNameField.click();
    await this.lastNameField.fill(lastName);
    await this.postalCodeField.click();
    await this.postalCodeField.fill(postalCode);
  }

  async continueToOverview() {
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }

  async completeCheckout(firstName, lastName, postalCode) {
    await this.fillPersonalInformation(firstName, lastName, postalCode);
    await this.continueToOverview();
    await this.finishOrder();
  }

  async getCompleteHeaderText() {
    return await this.completeHeader.textContent();
  }

  async isPonyExpressVisible() {
    return await this.ponyExpress.isVisible();
  }
}