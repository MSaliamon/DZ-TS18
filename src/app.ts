
interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data: any): void {
    this.observers.forEach(observer => observer.update(data));
  }
}

class StockObserver implements Observer {
  private stockPrice: number;

  constructor(stockPrice: number) {
    this.stockPrice = stockPrice;
  }

  update(data: any): void {
    this.stockPrice = data;
    console.log('Stock price updated:', this.stockPrice);
  }
}

const subject = new Subject();
const observer1 = new StockObserver(100);
const observer2 = new StockObserver(200);

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify(150);


interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPaymentStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log('Paying with credit card:', amount);
  }
}

class PaypalPaymentStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log('Paying with PayPal:', amount);
  }
}

class BitcoinPaymentStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log('Paying with Bitcoin:', amount);
  }
}

class PaymentContext {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  executePayment(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

const creditCardStrategy = new CreditCardPaymentStrategy();
const paypalStrategy = new PaypalPaymentStrategy();
const bitcoinStrategy = new BitcoinPaymentStrategy();

const paymentContext1 = new PaymentContext(creditCardStrategy);
const paymentContext2 = new PaymentContext(paypalStrategy);
const paymentContext3 = new PaymentContext(bitcoinStrategy);

paymentContext1.executePayment(100);
paymentContext2.executePayment(50);
paymentContext3.executePayment(10);