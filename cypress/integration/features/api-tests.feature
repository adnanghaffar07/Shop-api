@Login
Feature: Login

        @Shop
        Scenario: As Customer I can find Pets with available status
            Given I send get request with available status
             Then I see API response is 200 success


        @Shop
        Scenario: As Customer I Add  a Pet
            Given I send post request to create a Pet
             Then I see API response is 200 success

        @Shop
        Scenario: As Customer I Update a Pet
            Given I send update pet request
             Then I see API response is 200 success

        @Shop
        Scenario: As Customer I Delete a Pet
            Given I send delete pet request
             Then I see API response is 200 success
