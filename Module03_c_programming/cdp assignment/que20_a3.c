#include <stdio.h>

int main()
{
       // sort 5 element array
       
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
       for (int i = 0; i < 5; i++)
       {
              printf("%d", array[i]);
       }

       return 0;
}