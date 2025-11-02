/**The Adapter Design Pattern is a structural design pattern that allows two incompatible interfaces to work together. 
It acts as a bridge between an existing class and a new interface, converting the interface of a class into another interface that clients expect.*/
//Example 

// 🔸 Old interface (client still uses this)
class OldPaymentSystem {
  pay(amount) {
    console.log(`Payment of ₹${amount} done via OLD payment system`);
  }
}

// 🔸 New system (incompatible interface)
class NewPaymentGateway {
  makePayment(amountInRupees) {
    console.log(`Payment of ₹${amountInRupees} processed using NEW payment gateway`);
  }
}

// 🔸 Adapter — makes new system compatible with old interface
class PaymentAdapter extends OldPaymentSystem {
  constructor() {
    super();
    this.newGateway = new NewPaymentGateway();
  }

  pay(amount) {
    // internally call new gateway’s method
    this.newGateway.makePayment(amount);
  }
}


// Client is unchanged, but we can plug in adapter instead of old system
const adapter = new PaymentAdapter();
adapter->pay(1000)
