# kamscript
## a simple scripting langauge interpreter implemented in javascript

## installation
to install kamscript interpreter, type in your terminal:
```properties
npm i -g kamscript
```

## running your code
to run your code run:
```properties
ks exec <path to file>
```

## how do files work?
in order to run a kamscript file, it needs to have a &#10071; .ks extension &#10071;
you can execute a script without specifying the file name
```properties
ks exec <path to directory>
```
the kamscript interpreter will search for index.ks file by default
if it doesn't find such a file, an error will be thrown.

## kamscript syntax
all examples are in the "examples" directory.
operators:
        add number1 number2 number3 ...
            - adds n numbers
        
        divide number1 number2 number3 ...
            - divides n numbers ( ex. math expression (((1 / 2) / 3) / 4) )
        
        modulo number1 number2 number3 ...
            - calculates the modulo of numbers
        
        multiply number1 number2 number3 ...
            - multiplies n numbers ( ex. math expression 1 * 2 * 10 * 12 )
        
        power number1 number2 number3 ...
            - raises number to the power of the next number ( ex. math expression (((1^2)^3)^4) )
        
        subtract number1 number2 number3 ...
            - subtracts n numbers
        