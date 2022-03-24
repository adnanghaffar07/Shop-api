/*
You should create a condition based on the availability of the text on the page, not just DOM.

So you need to find a DOM locator that always exists, for certain text, and then verify if the expected text exist in that DOM section or not.
So the code can look like this:

cy.get('locator').invoke('text').then(myText => {
     if(myText.includes('some text'){

      } else {

     }
}) */