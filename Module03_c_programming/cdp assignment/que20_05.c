#include <stdio.h>

main()
{
//incomplete
       int m=1;

       for (int i = 1; i <= 5; i++)
       {
              for (int j = 4; j >= i; j--)
              {
                     printf(" ");
              }

              for (int k = 1; k <= i; k++)
              {
                     printf("%d",k);
                    
                     
                     
              }
              printf("\n");
       }
}