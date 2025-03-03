// Quotation values
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Getting the elements
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

// Allow only numbers
amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
})

// Getting submit event
form.onsubmit = event => {
  event.preventDefault()

  switch (currency.value) {
    case 'USD':
      convertCurrency(amount.value, USD, 'US$')
      break
    case 'EUR':
      convertCurrency(amount.value, EUR, '€')
      break
    case 'GBP':
      convertCurrency(amount.value, GBP, '£')
      break
  }
}

// Function to convert the currency
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price
    result.textContent = formatCurrencyBRL(total)

    footer.classList.add('show-result')
  } catch (error) {
    footer.classList.remove('show-result')
    console.log(error)
    alert('Não foi possível converter a moeda. Tente novamente mais tarde.')
  }
}

// Function to format the currency
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}
