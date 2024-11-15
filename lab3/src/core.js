/**
 * Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
 * @param {*} n
 */
function isInteger(n) {
    return typeof n === 'number' && (n | 0) === n;
}

/**
 * Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
 */
function even() {
    const evens = [];
    for (let i = 2; i <= 20; i += 2) {
        evens.push(i);
    }
    return evens;
}

/**
 * Напишите функцию, считающую сумму чисел до заданного используя цикл
 * @param {*} n
 */
function sumTo(n) {
    if (typeof n !== 'number' || n < 1) return 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Напишите функцию, считающую сумму чисел до заданного используя рекурсию
 * @param {*} n
 */
function recSumTo(n) {
    if (typeof n !== 'number' || n < 1) return 0;
    if (n === 1) return 1;
    return n + recSumTo(n - 1);
}

/**
 * Напишите функцию, считающую факториал заданного числа
 * @param {*} n
 */
function factorial(n) {
    if (typeof n !== 'number' || n < 0) return undefined;
    if (n === 0) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/**
 * Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
 * @param {*} n
 */
function isBinary(n) {
    return typeof n === 'number' && n > 0 && (n & (n - 1)) === 0;
}

/**
 * Напишите функцию, которая находит N-е число Фибоначчи
 * @param {*} n
 */
function fibonacci(n) {
    if (typeof n !== 'number' || n < 1) return undefined;
    if (n === 1 || n === 2) return 1;
    let a = 1, b = 1, fib;
    for (let i = 3; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    return b;
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;
    if (typeof operatorFn !== 'function') {
        return function() {
            return initialValue;
        };
    }
    return function(newValue) {
        storedValue = operatorFn(storedValue, newValue);
        return storedValue;
    };
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start = 0, step = 1) {
    let current = start;
    return function() {
        const result = current;
        current += step;
        return result;
    };
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp и т.п.) не обязательно
 *
 * @param {any} firstObject - первое значение
 * @param {any} secondObject - второе значение
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    // Если оба значения строго равны, возвращаем true
    if (firstObject === secondObject) {
        // Обрабатывает случаи, кроме NaN
        return true;
    }

    // Обработка NaN, так как NaN !== NaN
    if (typeof firstObject === 'number' && typeof secondObject === 'number') {
        if (isNaN(firstObject) && isNaN(secondObject)) {
            return true;
        }
    }

    // Если типы значений различаются, возвращаем false
    if (typeof firstObject !== typeof secondObject) {
        return false;
    }

    // Если одно из значений null (а другое нет) или не объект, возвращаем false
    if (
        firstObject === null ||
        secondObject === null ||
        (typeof firstObject !== 'object' && typeof firstObject !== 'function') ||
        (typeof secondObject !== 'object' && typeof secondObject !== 'function')
    ) {
        return false;
    }

    // Если оба значения функции, проверяем, являются ли они одной и той же функцией
    if (typeof firstObject === 'function' && typeof secondObject === 'function') {
        return false; // Поскольку a !== b уже, возвращаем false
    }

    // Получаем ключи обоих объектов
    const firstKeys = Object.keys(firstObject);
    const secondKeys = Object.keys(secondObject);

    // Если количество ключей различается, объекты не равны
    if (firstKeys.length !== secondKeys.length) {
        return false;
    }

    // Проверяем наличие ключей и их значения
    for (let key of firstKeys) {
        // Проверяем, содержит ли второй объект текущий ключ
        if (!secondObject.hasOwnProperty(key)) {
            return false;
        }

        // Рекурсивно проверяем значения по ключу
        if (!deepEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }

    // Все проверки прошли успешно, объекты равны
    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};

