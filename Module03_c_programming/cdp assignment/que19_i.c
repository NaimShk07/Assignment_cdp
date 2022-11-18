#include <stdio.h>

int main()
{

       // write a program to make sum of given numbers
       int num[4];
       int total=0;
       for (int i = 0; i < 4; i++)
       {
       printf("Enter %d numbers:",i+1);
              scanf("%d", &num[i]);
       }
       for (int i = 0; i < 4; i++)
       {
             total=num[i]+total;
       }
       printf("Total of four numbers is %d",total);
       

       return 0;
}