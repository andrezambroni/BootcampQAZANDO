/// <reference types="cypress" />

describe("Buscar dispositivo", () => {
  it("Buscar dispositivo especifico", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/7",
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq("7")
    })
  })

  it("Buscar dispositivo inexistente", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/dfgdfg",
      body: {},
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body.error).to.eq("Oject with id=dfgdfg was not found.")
    })
  })

  it("Cadastrar dispositivo", () => {
    cy.request({
      method: "POST",
      url: "https://api.restful-api.dev/objects",
      body: {
        name: "Device AZ",
        data: {
          year: "2025",
          price: 10000,
          "CPU Model": "R7 5800X3D",
          "GPU Model": "RTX 4060 TI",
          RAM: "32GB",
        },
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal("Device AZ");
    })
  })
})
