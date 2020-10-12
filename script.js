async function calculate() {
  const res = await (await fetch('items.json')).json()

  return document.body.innerHTML = res[0].text
}

calculate();