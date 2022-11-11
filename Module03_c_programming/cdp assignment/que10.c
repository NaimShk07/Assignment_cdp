#include <stdio.h>

int main()
{

       int num;
       printf("enter a number :");
       scanf("%d", &num);

       if (num > -1)
       {
              printf("number is positive");
       }
       else
       {
              printf("number is negative");
       }

       return 0;
}