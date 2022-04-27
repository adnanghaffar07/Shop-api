/* global Then, cy */


Given('I send get request with available status',()=>{
  cy.request({
    method: 'GET',
    url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=available',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }//Without Body
  }).then(response => {
    assert.equal(response.status, 200, 'Got OK Response');
    cy.log(JSON.stringify(response.body));
    var object = response.body;
    cy.wrap({success:response.status}).as('APIResponse');
  });
})

Then('I see API response is 200 success',()=>{
  cy.get('@APIResponse').then((auth)=>{
    assert.equal(auth.success,200);
  });
});

Given('I send post request to create a Pet',()=>{
  cy.request({
    method: 'POST',
    url: 'https://petstore.swagger.io/v2/pet',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: {
      "id": 0,
      "category": {
        "id": 0,
        "name": "Test"
      },
      "name": "doggie",
      "photoUrls": [
        "TestURL"
      ],
      "tags": [
        {
          "id": 0,
          "name": "TegName"
        }
      ],
      "status": "available"
    }
  }).then(response => {//200 status code of OK results
    assert.equal(response.status, 200, 'Got OK Response');
    cy.writeFile('cypress/fixtures/pet.json', {id:response.body['id']});
    cy.log(JSON.stringify(response.body));
    var object = response.body;
    cy.wrap({success:response.status}).as('APIResponse');
    const res = (response.body);
    
  });
})

Given('I send update pet request',()=>{
  cy.request({
    method: 'PUT',
    url: 'https://petstore.swagger.io/v2/pet',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: {
      "id": 0,
      "category": {
        "id": 0,
        "name": "string"
      },
      "name": "doggie",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "string"
        }
      ],
      "status": "available" 
    }
  }).then(response => {//200 status code of OK results
    assert.equal(response.status, 200, 'Got OK Response');
    cy.log(JSON.stringify(response.body));
    var object = response.body;
    cy.wrap({success:response.status}).as('APIResponse');
    });
})

Given('I send delete pet request',()=>{
  cy.fixture('pet.json').then((petId)=>{
    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/pet/'+petId.id,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => {//200 status code of OK results
        assert.equal(response.status, 200, 'Pet Deleted');
        cy.log(JSON.stringify(response.body));
      });
  })
})