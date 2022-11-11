#include <stdio.h>

void add(int a, int b);
void sub(int a, int b);
void mul(int a, int b);
void div(int a, int b);

main()
{

       add(15, 10);
       sub(10, 5);
       mul(10, 2);
       div(15, 5);
}
void add(int a, int b)
{
       int add = a + b;
       printf("\nAddition = %d", add);
}
void sub(int a, int b)
{
       int sub = a - b;
       printf("\nSubtraction = %d", sub);
}
void mul(int a, int b)
{
       int mul = a * b;
       printf("\nMultiplication = %d", mul);
}
void div(int a, int b)
{
       int div = a / b;
       printf("\nDivision = %d", div);
}