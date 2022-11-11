#include <stdio.h>

int main()
{

       int num1, num2, num3;

       printf("enter num1 :\n");
       scanf("%d", &num1);
       printf("enter num2 :\n");
       scanf("%d", &num2);
       printf("enter num3 :\n");
       scanf("%d", &num3);

       // if (num1 > num2 && num1 > num3)
       // {
       //        printf("num1 is max");
       // }
       // else if (num2 > num1 && num2 > num3)
       // {
       //        printf("num2 is max");
       // }
       // else
       // {
       //        printf("num3 is max");
       // }

       if (num1 > num2 && num1 > num3)
       {
              printf("num1 is max");
              
              if (num2 > num1 && num2 > num3)
              {
                     printf("num2 is max");
                    
              }
       }
        else
       {
              printf("num3 is max");
       }


       return 0;
}