#include <stdio.h>

main()
{

       for (int i = 1; i <= 5; i++)
       {
              for (int j = 5; j >= i; j--)
              {
                     printf(" ");
              }
              for (int k = 1; k <= i; k++)
              {
                     printf("%d ", i);
              }
              printf("\n");
       }
}