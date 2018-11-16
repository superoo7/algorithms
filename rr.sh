#!/bin/sh

rustc $1 -o a.out &&
./a.out &&
rm ./a.out &&
exit