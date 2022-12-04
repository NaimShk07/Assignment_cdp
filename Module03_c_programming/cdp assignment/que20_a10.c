#include <stdio.h>

int main()
{
       //wap to find max number in matrix.
       int arr[2][5] = {{1, 2, 3, 4, 5}, {6, 7, 8, 9, 5}};
       int max=0;
       for (int i = 0; i < 2; i++)
       {

              for (int j = 0; j < 5; j++)
              {
                     if(max<arr[j][i]){
                            max=arr[i][j];

                     }
              }
       }
       printf("Max number in matrix is %d",max);
       return 0;
}