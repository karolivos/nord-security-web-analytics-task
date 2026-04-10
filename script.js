const plans = [
    { name: "Basic", prices: { monthly: 3.99, yearly: 39.99, two_year: 71.99 } },
    { name: "Plus", prices: { monthly: 5.99, yearly: 59.99, two_year: 107.99 } },
    { name: "Complete", prices: { monthly: 7.99, yearly: 79.99, two_year: 143.99 } },
    { name: "Ultra Secure", prices: { monthly: 9.99, yearly: 99.99, two_year: 179.99 } },
    { name: "Family", prices: { monthly: 12.99, yearly: 129.99, two_year: 233.99 } },
  ];
  
  let selectedPlan = null;
  
  const pricingGrid = document.getElementById("pricingGrid");
  const pricingPage = document.getElementById("pricingPage");
  const checkoutPage = document.getElementById("checkoutPage");
  const successPage = document.getElementById("successPage");
  const checkoutSummary = document.getElementById("checkoutSummary");
  const checkoutForm = document.getElementById("checkoutForm");
  const localeSwitcher = document.getElementById("localeSwitcher");
  const backButton = document.getElementById("backButton");
  
  function renderPlans() {
    pricingGrid.innerHTML = "";
  
    plans.forEach((plan) => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <h3>${plan.name}</h3>
        <p>Choose billing period</p>
        <select class="term-select">
          <option value="monthly">Monthly - $${plan.prices.monthly}</option>
          <option value="yearly">1 Year - $${plan.prices.yearly}</option>
          <option value="two_year">2 Years - $${plan.prices.two_year}</option>
        </select>
        <button>Select Plan</button>
      `;
  
      const termSelect = card.querySelector(".term-select");
      const button = card.querySelector("button");
  
      button.addEventListener("click", () => {
        const billingPeriod = termSelect.value;
        const price = plan.prices[billingPeriod];
        const locale = localeSwitcher.value;
  
        selectedPlan = {
          name: plan.name,
          billingPeriod: billingPeriod,
          price: price,
          currency:
            locale === "de-DE" || locale === "lt-LT" ? "EUR" : "USD",
          locale: locale,
        };
  
        
          dataLayer.push({
            event: "add-to-cart",
            plan_name: selectedPlan.name,
            plan_price: selectedPlan.price,
            currency: selectedPlan.currency,
            billing_period: selectedPlan.billingPeriod,
            locale: selectedPlan.locale,
          });
        
  
        pricingPage.classList.add("hidden");
        checkoutPage.classList.remove("hidden");
  
        checkoutSummary.textContent =
          `${selectedPlan.name} | ${selectedPlan.billingPeriod} | ` +
          `${selectedPlan.currency} ${selectedPlan.price} | ${selectedPlan.locale}`;
      });
  
      pricingGrid.appendChild(card);
    });
  }
  
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    
      dataLayer.push({
        event: "conversion",
        plan_name: selectedPlan.name,
        plan_price: selectedPlan.price,
        currency: selectedPlan.currency,
        billing_period: selectedPlan.billingPeriod,
        order_id: "ORDER-" + Date.now(),
        user_email: document.getElementById("email").value,
        locale: selectedPlan.locale,
      });
    
  
    checkoutPage.classList.add("hidden");
    successPage.classList.remove("hidden");
  });
  
  backButton.addEventListener("click", () => {
    successPage.classList.add("hidden");
    pricingPage.classList.remove("hidden");
  });
  
  renderPlans();