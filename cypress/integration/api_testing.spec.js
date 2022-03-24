/// <reference types="Cypress" />

describe("Pet Store - API Tests", () => {


  it("Test Get Request", () => {
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
    });
  })

  it('Test POST Request', () => {
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
      assert.equal(response.status, 200, 'Pet Added');
      cy.log(JSON.stringify(response.body));
      cy.wrap({id:response.body['id']}).as('PetId');
    });
  })

  it('Test Update Request', () => {
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
        assert.equal(response.status, 200, 'Pet Updated');
        cy.log(JSON.stringify(response.body));
      });
  })
  it('Test Delete Request', () => {
    cy.get('@PetId').then((petId)=>{
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
})