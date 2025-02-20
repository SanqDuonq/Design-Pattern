interface IDrink {
    Drink(): void
}

class HotCoffee implements IDrink {
    Drink(): void {
        console.log('Drinking hot coffee!');
    }
}

class HotTea implements IDrink {
    Drink(): void {
        console.log('Drinking hot tea');
    }
}

class ColdCoffee implements IDrink {
    Drink(): void {
        console.log('Drinking cold coffee!');
    }
}

class ColdTea implements IDrink {
    Drink(): void {
        console.log('Drinking cold tea');
    }
}


interface DrinkFactory {
    createHotDrink(): IDrink,
    createColdDrink(): IDrink
}

class CoffeeFactory implements DrinkFactory {
    createColdDrink(): IDrink {
        return new ColdCoffee();
    }
    createHotDrink(): IDrink {
        return new HotCoffee();
    }
}

class TeaFactory implements DrinkFactory {
    createColdDrink(): IDrink {
        return new ColdTea();
    }
    createHotDrink(): IDrink {
        return new HotTea();
    }
}

const coffee = new CoffeeFactory();
coffee.createColdDrink().Drink();
coffee.createHotDrink().Drink();


