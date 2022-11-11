#include <stdio.h>

int main()
{

       int year;

       printf("enter your year : \n");
       scanf("%d", &year);

       if (year % 4 == 0)
       {
              printf("this year leap year");
       }
       else
       {

              printf("this year not leap year");
       }
       return 0;
}