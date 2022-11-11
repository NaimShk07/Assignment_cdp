#include <stdio.h>

int main()
{
clearerr;
       int num1, num2;
       int op;

       printf("enter num1\n");
       scanf("%d", &num1);

       printf("enter num2\n");
       scanf("%d", &num2);

       printf("please select operator\n ");
       printf("1 for addition\n");
       printf("2 for subtraction\n");
       printf("3 for multiplication\n");
       printf("4 for division\n");

       scanf("%d", &op);

       switch (op)
       {
       case 1:
              printf("Addition is %d", num1 + num2);
              break;
       case 2:
              printf("Subtraction is %d", num1 - num2);
              break;
       case 3:
              printf("Multiplication is %d", num1 * num2);
              break;
       case 4:
              printf("Division is %d", num1 / num2);
              break;

       default:
              printf("Please enter a correct operator");
              break;
       }

       return 0;
}