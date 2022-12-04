#include <stdio.h>

int main()
{
       // Write a program to print the Matrixusing 2-D Array
       int arr[2][5]={{2,3,4,5,6},{6,7,8,9,4}};
       for (int j = 0; j < 2; j++)
       {
          for (int i = 0; i < 5; i++)
          {
             printf("[%d][%d] is %d\n",j,i,arr[j][i]);
          }
          printf("\n");
          
       }
       

       return 0;
}