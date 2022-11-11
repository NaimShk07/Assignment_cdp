#include <stdio.h>

void square(int a);
void cube(int a);

main()
{

       square(4);
       cube(2);
}
void square(int a)
{
       int ans = a * a;
       printf("\nSquare = %d", ans);
}
void cube(int a)
{
       int ans = a * a * a;
       printf("\nCube = %d", ans);
}