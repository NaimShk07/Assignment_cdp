#include <stdio.h>

int main()
{

       int a = 5;
       int fact = 1;

       // printf("enter a number : ");
       // scanf("%d", &a);

       for (int i = 1; i <= a; i++)
       {

              fact = fact * i;
       }
       printf("factorial of %d is %d\n",a, fact);

       return 0;
}