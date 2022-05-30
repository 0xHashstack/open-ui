// <reference types="cypress" />

let metmaskWalletAddress;

describe("Begin Test", () => {
  beforeEach(() => {
      cy.fetchMetamaskWalletAddress().then((address) => {
          metmaskWalletAddress = address;
      })
      cy.visit("http://localhost:3000/")
  })

  it("Connect Wallet", () => {
    // cy.visit("http://localhost:3000/")

    cy.contains("Connect Wallet").click()
    cy.contains("Metamask").click()
    cy.wait(1000)
    cy.window().then(win => {
        return !win.ethereum
            ? []
            : win.ethereum.request({ method: "eth_accounts" })
        }).then(accounts => {
            if (!accounts.length) {
                cy.acceptMetamaskAccess()
            }
        })
    })
})