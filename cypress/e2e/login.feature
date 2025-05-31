Feature: Orangehrm Login
  Scenario: Successful Login with valid credentials
    Given I am on the Orangehrm login page
    When I enter valid credentials
    Then I should be logged in