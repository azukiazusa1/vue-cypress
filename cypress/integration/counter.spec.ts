/// <reference path="../support/index.d.ts" />
describe('Counter', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('カウントの初期値は0', () => {
    cy.countShoud('0')
  })

  it('incrementボタンを押すとカウンタの値が1増える', () => {
    cy.get('[data-cy=increment]').click()
    cy.countShoud('1')
  })

  it('decrementボタンを押すとカウンタの値が1減る', () => {
    cy.get('[data-cy=decrement]').click()
    cy.countShoud('-1')
  })
})