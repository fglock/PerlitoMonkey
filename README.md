# Perl5 VM based on SpiderMonkey

This project is an investigation of using SpiderMonkey internals
as a possible binary backend for Perlito5.

The following changes in VM semantics were implemented:

- the string "0" is false

 - in constants (in constant folding)

 - in native strings (in variables)

 - TODO: in String objects

 - BUG: some tests time out, such as: ecma_5/Object/15.2.3.6-middle-redefinition-2-of-8.js

Everything else is TODO:

- add list here

