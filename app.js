class Calcualtor {
  constructor(firstInput, secondInput) {
    this.firstInput = firstInput;
    this.secondInput = secondInput;
    this.resetAll();
  }

  addInput(number) {
    if (number === "." && this.currentValue.includes(".")) {
      return;
    }
    this.currentValue = this.currentValue.toString() + number.toString();
  }

  operation(operator) {
    if (this.currentValue === '') {
      return
    }
    if (this.previousValue !== "") {
      this.computation();
    }
    this.operator = operator;
    this.previousValue = this.currentValue + operator.toString() ;
    this.currentValue = "";
  }

  computation() {
    const previousEntry = parseFloat(this.previousValue);
    const currentEntry = parseFloat(this.currentValue);
    const operatory = this.operator;
    let result = "";

    if (isNaN(previousEntry) || isNaN(currentEntry)) {
      return;
    }

    switch (operatory) {
      case "+":
        result = previousEntry + currentEntry;
        // result = result.toLocaleString("en-US");
        result = parseFloat(result)
        this.currentValue = result;
        this.previousValue = "";
        break;
      case "x":
        result = previousEntry * currentEntry;
        this.currentValue = result;
        this.previousValue = "";
        break;
      case "/":
        result = previousEntry / currentEntry;
        this.currentValue = result;
        this.previousValue = "";
        break;
      case "-":
        result = previousEntry - currentEntry;
        this.currentValue = result;
        this.previousValue = "";
        break;
      default:
        break;
    }

    this.currentValue = result
    this.previousValue = ''
  }

  delete() {
    this.currentValue = this.currentValue.slice(0, -1);
  }

  resetAll() {
    this.currentValue = "";
    this.previousValue = "";
    this.operator = "";
  }

  resultDisplay() {
    this.firstInput.innerText = this.previousValue.toLocaleString();
    this.secondInput.innerText = this.currentValue.toLocaleString();
  }
}

//getting the dom of needed parameters

const tate = document.querySelector("#two");
const one = document.querySelector("#one");
const three = document.querySelector("#three");
const entire = document.body;
const display = document.querySelector(".display-section");
const key = document.querySelector(".keys-section");
const equal = document.getElementById("equal");
const head = document.querySelector(".head");
const deletion = document.getElementById("deletion");
const reset = document.getElementById("reset");
const ball = document.querySelector(".ball");
const toggleBox = document.querySelector(".toggle-box");
const buttons = document.querySelectorAll("button");
const firstInput = document.querySelector(".firstInput");
const secondInput = document.querySelector(".secondInput");
const numberButtons = document.querySelectorAll(".number-key");
const operators = document.querySelectorAll(".operation-key");

console.log(numberButtons);
console.log(operators);

const calculator = new Calcualtor(firstInput, secondInput);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addInput(button.innerText);
    calculator.resultDisplay();
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    calculator.operation(operator.innerText);
    calculator.resultDisplay();
  });
});

equal.addEventListener("click", () => {
  calculator.computation();
  calculator.resultDisplay();
});

deletion.addEventListener("click", () => {
  calculator.delete();
  calculator.resultDisplay();
});

reset.addEventListener("click", () => {
  calculator.resetAll();
  calculator.resultDisplay();
});

const neutral = () => {
  entire.classList.remove("second");
  entire.classList.remove("third");
  display.classList.remove("second");
  display.classList.remove("third");
  key.classList.remove("second");
  key.classList.remove("third");
  equal.classList.remove("second");
  equal.classList.remove("third");
  head.classList.remove("second");
  head.classList.remove("third");
  deletion.classList.remove("second");
  reset.classList.remove("second");
  reset.classList.remove("third");
  ball.classList.remove("second");
  ball.classList.remove("third");
  toggleBox.classList.remove("second");
  toggleBox.classList.remove("third");
  buttons.forEach((elem) => {
    elem.classList.remove("third");
  });
};

const change = () => {
  entire.classList.add("second");
  entire.classList.remove("third");
  display.classList.add("second");
  display.classList.remove("third");
  key.classList.add("second");
  key.classList.remove("third");
  equal.classList.add("second");
  equal.classList.remove("third");
  head.classList.add("second");
  head.classList.remove("third");
  deletion.classList.add("second");
  deletion.classList.remove("third");
  reset.classList.add("second");
  reset.classList.remove("third");
  ball.classList.add("second");
  ball.classList.remove("third");
  toggleBox.classList.add("second");
  toggleBox.classList.remove("third");
  buttons.forEach((elem) => {
    elem.classList.remove("third");
  });
};

const next = () => {
  entire.classList.add("third");
  display.classList.add("third");
  key.classList.add("third");
  equal.classList.add("third");
  head.classList.add("third");
  deletion.classList.add("third");
  reset.classList.add("third");
  ball.classList.add("third");
  toggleBox.classList.add("third");
  buttons.forEach((elem) => {
    elem.classList.add("third");
  });
};

one.addEventListener("click", neutral);
tate.addEventListener("click", change);
three.addEventListener("click", next);
