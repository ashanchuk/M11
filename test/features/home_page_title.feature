@smoke
Feature: Start Page Title

Scenario: Page Title
    Given I open "https://www.epam.com/" url
    Then Page title should be "EPAM | Enterprise Software Development, Design & Consulting"
    When I wait "3" seconds

@so
Scenario Outline: Open <Button> page from <URL>
    Given I open "<URL>" url
        And I click "<Button>" in Navigation bar
    Then Page title should be "<Title>"
    When I wait "3" seconds

    Examples:
    | URL                                | Button          | Title                                                                      | 
    | https://www.epam.com/services      | Services        | Our Services \| EPAM                                                       |
    | https://www.epam.com/about         | About           | One of the Fastest-Growing Public Tech Companies \| About EPAM             |
    | https://www.epam.com/careers       | Careers         | Explore Professional Growth Opportunities \| EPAM Careers                  |