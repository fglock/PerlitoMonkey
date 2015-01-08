# Perl5 VM based on SpiderMonkey

This project is an investigation of using SpiderMonkey internals
as a possible binary backend for Perlito5.

The following changes in VM semantics were implemented:

- the string "0" is false in constants (in constant folding) and in native strings (in variables)

 - Note: String objects are still always true

- empty array is false; `new Array()` is also false

Everything else is TODO:

- add list here

BUGS: 

- some tests time out in DEBUG mode

- some asm.js tests fail in jit mode

