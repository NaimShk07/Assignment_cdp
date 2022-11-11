#include <stdio.h>
int fact(int n);
main()
{

      int a;
      a = fact(5);
      printf("Factorial = %d", a);
}
int fact(int n)
{
      int ans = 1;
      if (n == 1)
      {
            return 1;
      }
      else
      {
            ans = n * fact(n - 1);
      }
      return ans;
}