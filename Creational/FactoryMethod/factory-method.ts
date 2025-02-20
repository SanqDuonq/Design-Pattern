interface IPayment {
	pay(amount: number): void;
}

type PaymentMethod = 'creditCard' | 'payPal' | 'moMo';

class CreditCard implements IPayment {
	pay(amount: number): void {
		console.log(`Thanh toán ${amount} bằng thẻ tín dụng`);
	}
}

class PayPal implements IPayment {
	pay(amount: number): void {
		console.log(`Thanh toán ${amount} bằng PayPal`);
	}
}

class Momo implements IPayment {
	pay(amount: number): void {
		console.log(`Thanh toán ${amount} bằng Momo`);
	}
}

class PaymentFactory {
	static createPaymentMethod(method: string): IPayment {
		switch (method) {
			case "creditCard":
				return new CreditCard();
			case "payPal":
				return new PayPal();
			case "moMo":
				return new Momo();
			default:
				throw new Error("Phương thức thanh toán không hợp lệ!");
		}
	}
}

const paymentMethod: PaymentMethod = 'moMo';
PaymentFactory.createPaymentMethod(paymentMethod).pay(5000);
