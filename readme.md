**ENGLISH VERSION**

The program can encrypt and decrypt
with the Caesar cipher.

----------------------------------------------

You need to run the root index file.js with parameters.

----------------------------------------------

**Required parameters:**

-a (--action) encode/decode

This parameter is required to specify the operating mode


To indicate a shift with a negative number, you need to enter (Please note that this command must be written **_without spaces_**):

**CORRECT OPTIONS:**

--shift=_- 2_

-s=_- 2_

**WRONG OPTIONS:**

~~-s = _-2_~~

~~--shift = _-2_~~

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

node index.js --output out.txt -a encode -s=-3 -i some.txt 


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

Чтобы указать сдвиг с отрицательным числом нужно ввести(Обращайте внимание на то что данная команда должна быть написана **_без пробелов_**):

**ПРАВИЛЬНЫЕ ВАРИАНТЫ:**

--shift=_-2_

-s=_-2_

**НЕПРАВИЛЬНЫЕ ВАРИАНТЫ:**

~~-s = _-2_~~ 

~~--shift = _-2_~~


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

node index.js --output out.txt -a encode -s=-3 -i some.txt   


