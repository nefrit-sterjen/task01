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