export const go_and_pay = (title, desc, amount) => {
  fetch('/api/payment_link', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, desc, amount })
  })
  .then(resp => resp.json())
  .then(body => document.location.href = body.payment_link)
}
