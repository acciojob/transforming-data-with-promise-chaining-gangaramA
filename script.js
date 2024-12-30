() => { 
  cy.visit(baseUrl + "/main.html"); 
  cy.get("form"); 
  
  // Check Username
  cy.get("label[for='username']").contains("Username:");
  cy.get("input#username").should("be.empty");
  
  // Check Password
  cy.get("label[for='password']").contains("Password:");
  cy.get("input#password").should("be.empty");
  
  // Check Remember Me
  cy.get("label[for='checkbox']").contains("Remember me");
  cy.get("input#checkbox").should("not.be.checked");
  
  // Check Submit Button
  cy.get("input#submit[value='Submit']").should("exist");
  
  // Check Existing User Button
  cy.get("button#existing").should("not.be.visible");
  
  // Verify Local Storage
  cy.window().then(win => { 
    expect(win.localStorage.getItem("username")).to.be.null; 
    expect(win.localStorage.getItem("password")).to.be.null; 
  }); 
}
