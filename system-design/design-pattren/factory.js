class Payment {
  processPayment() {
    throw new Error("processPayment() must be implemented");
  }
}

class CreditCard extends Payment {
  processPayment() {
    console.log("Doing payment using credit card");
  }
}

class PayPal extends Payment {
  processPayment() {
    console.log("Doing payment using PayPal");
  }
}

class PaymentFactory {
  getPayment(type) {
    if (type === "creditCard") {
      return new CreditCard();
    } else if (type === "paypal") {
      return new PayPal();
    } else {
      throw new Error("Invalid payment type");
    }
  }
}



// Usage
const paymentFactory = new PaymentFactory();

const payment1 = paymentFactory.getPayment("creditCard");
payment1.processPayment(); // Doing payment using credit card

const payment2 = paymentFactory.getPayment("paypal");
payment2.processPayment(); // Doing payment using PayPal
