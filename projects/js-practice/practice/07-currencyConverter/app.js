const BASE_URLS = [
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies",
  "https://latest.currency-api.pages.dev/v1/currencies",
];

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (const select of dropdowns) {
  for (const currCode of Object.keys(countryList)) {
    const newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = true;
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = true;
    }

    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
    updateExchangeRate();
  });
}

const fetchExchangeRate = async () => {
  const fromCode = fromCurr.value.toLowerCase();
  const toCode = toCurr.value.toLowerCase();

  for (const baseUrl of BASE_URLS) {
    try {
      const URL = `${baseUrl}/${fromCode}.json`;
      const response = await fetch(URL);

      if (!response.ok) {
        continue;
      }

      const data = await response.json();
      const rate = data[fromCode]?.[toCode];

      if (rate) {
        return rate;
      }
    } catch (error) {
      console.error(`Failed to fetch exchange rate from ${baseUrl}:`, error);
    }
  }

  throw new Error("Exchange rate not available for the selected currency pair.");
};

const updateExchangeRate = async () => {
  const amount = document.querySelector(".amount input");
  let amtVal = Number.parseFloat(amount.value);

  if (!Number.isFinite(amtVal) || amtVal <= 0) {
    amtVal = 1;
    amount.value = "1";
  }

  try {
    const rate = await fetchExchangeRate();
    const finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
  } catch (error) {
    msg.innerText = "Unable to fetch exchange rate. Please try again.";
    console.error(error);
  }
};

const updateFlag = (element) => {
  const currCode = element.value;
  const countryCode = countryList[currCode];
  const newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  const img = element.parentElement.querySelector("img");

  if (img && countryCode) {
    img.src = newSrc;
  }
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});