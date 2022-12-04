#include <stdio.h>

int main()
{

       // wap to make subtraction of 2 matrix using 2d array.

       int arr[2][5] = {{9, 8, 7, 6, 5}, {1, 2, 3, 4, 5}};
       int new_arr[5];

       for (int j = 0; j < 1; j++)
       {
              for (int i = 0; i < 5; i++)
              {
                     new_arr[i] = arr[j][i] - arr[j + 1][i];
              }
       }
       for (int i = 0; i < 5; i++)
       {
              printf("2 Matrix subtraction is %d\n", new_arr[i]);
       }

       return 0;
}