#include <stdio.h>

int main()
{
       //incomplete
       int i, j, k, m = 1;

       for (i = 1; i <= 5; i++)
       {
              for (j = 5; j >= i; j--)
              {
                     printf(" ");
              }
              for (k = 1; k <= i; k++)
              {
                     printf("%d", m);
                    
              }
              
              printf("\n");
       }
       return 0;
}