**ENGLISH VERSION**

The program can encrypt and decrypt
with the Caesar cipher.

----------------------------------------------

You need to run the root index file.js with parameters.

----------------------------------------------

**Required parameters:**

-a (--action) encode/decode

This parameter is required to specify the operating mode


-s (--shift) _2_

This parameter is required to specify the shift.

To specify a shift with a negative number, enter:

--shift = _-2_

_!!!WITHOUT THESE PARAMETERS, THE PROGRAM WILL NOT WORK_


**Optional parameters:**

-i (--input) _your_path.txt_

Parameter of the path of the file from which the text for encryption will be taken

----------------------------------------------

-o (--output) _your_path.txt_

Parameter of the path of the file to which the encrypted text will be written

----------------------------------------------

**EXAMPLES:**

node index.js -a encoder 3

node index.js --action encode --shift 3

node index.js -a encode -s 3 -i some.txt -o out.txt


**РУССКАЯ ВЕРСИЯ**

Программа может шифровать и дешифровать
шифром Цезаря.

----------------------------------------------

Необходимо запустить корневой файл index.js с параметрами.

----------------------------------------------

**Обязательные параметры:**

 -a (--action) encode/decode

Параметр необходим для указания режима работы


-s (--shift) _2_

Параметр необходим для указания сдвига.

Чтобы указать сдвиг с отрицательным числом нужно ввести:

--shift=_-2_

_!!!БЕЗ ЭТИХ ПАРАМЕТРОВ ПРОГРАММА НЕ БУДЕТ РАБОТАТЬ_

----------------------------------------------

**Необязательные параметры:**

-i (--input) _your_path.txt_

Параметр пути файла, из которого будет браться текст для шифрования

----------------------------------------------

-o (--output) _your_path.txt_

Параметр пути файла, в который будет записываться зашифрованный текст

----------------------------------------------

**ПРИМЕРЫ:**

node index.js -a encode -s 3 

node index.js --action encode --shift 3

node index.js -a encode -s 3 -i some.txt -o out.txt  


