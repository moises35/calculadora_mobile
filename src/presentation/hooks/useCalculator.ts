import { useEffect, useRef, useState } from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '/',
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');
  const [formula, setFormula] = useState('');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPreviousNumber(`${subResult}`);
  }, [formula]);

  const buildNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.') {
        return setNumber(number + textNumber);
      }

      if (textNumber === '0' && !number.includes('.')) {
        return setNumber(number);
      }

      if (textNumber !== '0' && !number.includes('.')) {
        if (number.startsWith('-0')) {
          return setNumber('-' + textNumber);
        }

        return setNumber(textNumber);
      }

      return setNumber(number + textNumber);
    }

    return setNumber(number + textNumber);
  };

  const setLastNumber = () => {
    calculateResult();

    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }

    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const substractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const clear = () => {
    setNumber('0');
    setPreviousNumber('0');
    setFormula('');
    lastOperation.current = undefined;
  };

  const deleteLastChar = () => {
    if (number === '0') return;

    if (number.length === 1) {
      return setNumber('0');
    }

    if (number.length === 2 && number.includes('-')) {
      return setNumber('0');
    }

    setNumber(number.slice(0, number.length - 1));
  };

  const toogleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);

    lastOperation.current = undefined;
    setPreviousNumber('0');
  };

  const calculateSubResult = (): number => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue); //NaN

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error('Operation not implemented');
    }
  };

  return {
    // Properties
    number,
    previousNumber,
    formula,

    // Methods
    buildNumber,
    clear,
    deleteLastChar,
    toogleSign,
    divideOperation,
    multiplyOperation,
    addOperation,
    substractOperation,
    calculateResult,
  };
};
