Feature: Orangehrm Homepage
  Scenario: Check Orangehrm Title
    Given I visit Orangehrm
    When I check the page title
    Then It should contain "OrangeHRM"