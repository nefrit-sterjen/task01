/*
*
* Подробный принцип работы расписан внизу
* Если захочется поругаться, или что-то обсудить писать в telegram: @NefritSterjen
*
* */


import {Transform} from 'stream';

class CesarCipher extends Transform {


    constructor(options, shift, action) {
        super(options);
        this.shift = shift;
        this.action = action;
    }

    _transform(chunk, encoding, cb) {
        const chunkStr = chunk.toString();
        const encodedChunk = this.encode(this.shift, chunkStr, this.action);
        cb(null, encodedChunk);
    }

    encode(s, str, method) {
        //Переводим символ в число и проверяем имеет ли он нужные пределы
        //Если нет нужных пределов, то операция не проводится
        //method - json объект, который содержит метод. В зависимости от метода
        //происходит умножение шага на -1(если decode), и ничего не происходит, если encode

        s = method === 'decode' ? s * (-1) : s;

        //Это кстати строка, которую метод будет возвращать
        let encodedStr = '';
        // Тут переданная строка будет перебираться посимвольно и каждый символ будет шифроваться
        //либо пропускаться
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            let limits = this.checkLimits(code);
            //Ниже происходит проверка лимитов, если они есть, значит - это символ латинского
            //алфавита, если нет, то сивол не шифруется. Дальше идет само шифрование.
            //Как это работает я описал в самом низу
            if (limits !== null) {
                if (s > 26 || s < -26) {
                    s = s % 26;
                }
                code += s;
                if (code > limits.upperLimit) {
                    if (limits.upperLimit === 90) {
                        code -= 91;
                        code += 65;
                    } else if (limits.upperLimit === 122) {
                        code -= 123;
                        code += 97;
                    }
                }

                if (code < limits.lowLimit) {
                    if (limits.lowLimit === 65) {
                        code += 91;
                        code -= 65;
                    } else if (limits.lowLimit === 97) {
                        code += 123;
                        code -= 97;
                    }
                }

            }
            encodedStr += String.fromCharCode(code)
        }

        return encodedStr
    }

// Функция для определения пределов
     checkLimits(code) {
        if (code >= 65 && code <= 90) return {upperLimit: 90, lowLimit: 65};
        else if (code >= 97 && code <= 122) return {upperLimit: 122, lowLimit: 97};
        else return null;
    }
}

export {CesarCipher}


//------------------------------------------------------
//          ПРИНЦИП РАБОТЫ:
// Метод построен на работе с таблицей кодировки ASCII
// Если коротко, то каждому символу принадлежит свое число...
// Мы берем только символы латинского алфавита [a-z] и [A-Z]
// 1) Сначала определяется код символа
// 2) Если он в границах от 65 до 90, то это заглавные символы
// 3) Если от 97 до 122, то это строчные символы
//--------------------------------------------------------
//      СИТУАЦИЯ 1:
// 1. Шаг меньше 25.
// 2. Шаг прибавляется к коду символа
// 3. Если заходит за предел, то от получившегося кода, отнимается верхний предел
// 4. Остаток прибавляется к нижнему пределу
//     Пример:
// Есть символ K(75) и шаг 20
// 75 + 20 = 95;
// 95 - 90 - 1 = 5; (Тут появляется единица т.к. букв 26, а не 25:))
// 5 + 65 = 70(E)
//
//      СИТУАЦИЯ 2:
// 1. Шаг больше 25
// 2. Делим шаг на 25 (Не забываем про единицу, ее нужно отнять)
// 3. Остаток прибавляем и повторяем действия(2-4) прошлой ситуации
//
//      ПРИМЕР:
// 1. Шаг 100 и символ А(65)
// 2. 100 % 26 = 22
// 3. 65 + 22 = 87 (W)
//
//     СИТУАЦИЯ 3:
// 1. Шаг меньше нуля
// 2. Делаем тоже самое, только отнимаем от кода
// 3. Специфика только в том, что минус, а не плюс. т.е. мы движемся в обратном направлении
//
//     ПРИМЕР
// 1. Шаг -100  и тот же символ A(65)
// 2. -100 % 26 = -22
// 3. 65 - 22 = 44
// 4. 44 + 91 - 65 = 69(E)
//
// Надеюсь тебе было все понятно, спасибо за внимание!