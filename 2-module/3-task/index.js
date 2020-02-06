let calculator = {
  a: 0,
  b: 0,
  read(a, b){
    calculator.a = a;
    calculator.b = b;
  },
  sum(){
    return calculator.a + calculator.b;
  },
  mul(){
    return calculator.a * calculator.b;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
