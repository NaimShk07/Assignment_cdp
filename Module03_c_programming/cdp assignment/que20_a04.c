#include <stdio.h>

int main()
{
       // find out second smallest number of from given array
       int array[5] = {7, 5, 8, 3, 9};
       int temp;
       for (int j = 0; j < 5; j++)
       {
              for (int i = 0; i < 5; i++)
              {
                     if (array[j] < array[i])
                     {
                            temp = array[j];
                            array[j] = array[i];
                            array[i] = temp;
                     }
              }
       }
       printf("Second smallest number of array is %d",
              array[1]);
       return 0;
}