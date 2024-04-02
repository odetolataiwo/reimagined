Feature: UI Test
  Scenario: visiting the Login
    When I visit the site
    When I enter a wrong login details
    Then I should see an error occurred
