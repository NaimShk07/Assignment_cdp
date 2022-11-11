#include <stdio.h>

int main()
{

       int sci, maths, eng, hindi, guj;
       int sum;
       float percent;

       printf("Enter science marks \n");
       scanf("%d", &sci);
       printf("Enter maths marks \n");
       scanf("%d", &maths);
       printf("Enter english marks \n");
       scanf("%d", &eng);
       printf("Enter hindi marks \n");
       scanf("%d", &hindi);
       printf("Enter guj marks \n");
       scanf("%d", &guj);
       

       sum = sci + maths + eng + hindi + guj;
       percent = sum * 100 / 500;

       printf("Your total marks is %d \n", sum);
       printf("your percentage is %f", percent);

       return 0;
}