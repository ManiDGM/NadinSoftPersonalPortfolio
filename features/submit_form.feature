Feature: Contact form

    Scenario: Submiting contact form with valid details
      Given I'm on the website's footer
      When I fill in the "Name" field
      And I fill in the "Last Name" field
      And I fill in the "Email" field
      And I fill in the "Message" field
      And I click the "Submit" button
      Then I should see a confirmation message or be redirected successfully