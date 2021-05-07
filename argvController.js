import parseArgv from 'minimist'

/*!!!ВАЖНОЕ!!!! - парсинг argv выполнен с помощью стороннего фреймворка minimist
	ССЫЛКА НА ДОКУМЕНТАЦИЮ - https://www.npmjs.com/package/minimist

  Организуем прием параметров из argv
    1. Проверяем наличие аргументов. Убеждаемся, что есть -s и -a
       Если хоть чего-то нет, вызывается ошибка
    2. Первая ситуация, присутствуют все аргументы. В таком случае создаются потоки чтения, шифрование/
	дешифрования, записи
    3. Вторая ситуация, нет -i и -o. В таком случае вместо них создается stdin, stdout
    4. Третья ситуация, есть -i, но нет -o. В таком случае создается stdin, который записывает
	в поток записи.
    5. Четвертая ситуация. Есть поток чтения, но нет потока записи. В таком случае создается stdout
	происходит чтение и вывод в консоль из файла.

	ПРИНЦИП РАБОТЫ:
	Проверка значений будет проходить в функции argvCheckout(argv)
	1) Принимается массив из точки входа и сразу проверяется на наличие необходимых аргументов
	   Если аргументов нет, программа выводит ошибку об этом и завершается с кодом -1
	2) Далее идет проверка на значение аргументов. По очереди проверяются значение каждого аргумента
	   Если где-то есть ошибка, выводится соответствующее сообщение и программа завершается
	СПИСОК КОДОВ ОШИБОК:
	-1 - Нехватает основных аргументов -a/-s
	-2 - Неверное значение -a, пользователю выдается сообщение об ошибке с правильными вариантами
	-3 - Неверное значение -s, пользователю говорится, что шаг может быть только целочисленным числом
	-4 - Неверное значение -i, пользователю говорится, что путь должен быть строкой и оканчиваться
	расширением файла. Вывести пользователю пример файла text.txt or my_dir/text.txt
	-5 - Неверное значение -o, делается аналогично пункту выше*/

function getThreats(argv) {
    argv = argv.slice(2);

    if (argvCheckout(argv)) {

    }
}

//Функция, проверяющая корректность введенных данных из командной строки
function argvCheckout(argv) {
    let parsedArgv = parseArgv(argv);

    // Проверка на существование обязательных аргументов и их значений
    if ((parsedArgv.a || parsedArgv.action) && (parsedArgv.s || parsedArgv.shift)) {

        let action = parsedArgv.a !== undefined ? parsedArgv.a : parsedArgv.action;
        let shift = parsedArgv.s !== undefined ? parsedArgv.s : parsedArgv.shift;

        //Проверка значений action и shift
        checkoutAction(action);
        checkoutShift(shift);



    }
    else {
        console.log("Error! You didn't write down the mandatory commands. -a(--action) and " +
            "-(--shift) are mandatory commands. You will need to repeat " +
            "it without mistakes. For example: node index.js -a encode -s 2");
        process.exit(1);
    }
}

//функция, проверяющая корректность action
function checkoutAction(action){
    if(action !== 'encode' && action !== 'decode'){
        console.log("It's incorrect value -action(-a). It'll be encode or decode");
        process.exit(2);
    }
}

//функция, проверяющая корректность shift
function checkoutShift(shift){
    if(!Number.isInteger(shift)){
        console.log("It's incorrect value -shift(-s). It'll be integer number");
        process.exit(3);
    }
}

getThreats(process.argv);