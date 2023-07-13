
class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;

        if (!this.isValidOperator(znak)) {
            console.log("Invalid operator. Please try again.");
            this.input(obj);
            return;
        }

        const result = this.calculate(X, Y, znak);
        if (isNaN(result)) {
            console.log("Invalid input. Please try again.");
            this.input(obj);
            return;
        }

        console.log(`Result: ${result}`);
    }

    input(obj) {
        const X = prompt("Enter X:");
        const Y = prompt("Enter Y:");
        const znak = prompt("Enter operator (+, -, /, *, %):");
        this.check({ X: +X, Y: +Y, znak });
    }

    calculate(X, Y, znak) {
        switch (znak) {
            case "+":
                return X + Y;
            case "-":
                return X - Y;
            case "/":
                return X / Y;
            case "*":
                return X * Y;
            case "%":
                return X % Y;
        }
    }

    isValidOperator(znak) {
        return ["+", "-", "/", "*", "%"].includes(znak);
    }
}

export default SuperMath;