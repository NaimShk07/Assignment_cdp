#include <stdio.h>

int main()
{

       // write a program to print table of given numbers

       int num,mul;
       printf("Enter your number ");
       scanf("%d", &num);

       for (int i = 1; i <= 10; i++)
       {
              mul=num*i;
              printf("%d x %d = %d\n",num,i,mul);
       }

       return 0;
}