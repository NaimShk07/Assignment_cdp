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

       if (percent > 75)
       {
              printf("Your total marks is %d /500 \n", sum);
              printf("your percentage is %f \n", percent);
              printf("Distinction");
       }
       else if (percent > 60 && percent<=75)
       {
              printf("Your total marks is %d /500 \n", sum);
              printf("your percentage is %f \n", percent);
              printf("First Class");
       }
       else if (percent > 50 && percent<=60)
       {
              printf("Your total marks is %d /500 \n", sum);
              printf("your percentage is %f \n", percent);
              printf("Second Class");
       }
       else if (percent >= 35 && percent<=50)
       {
              printf("Your total marks is %d /500 \n", sum);
              printf("your percentage is %f \n", percent);
              printf("Pass");
       }
       else 
       {
              printf("Your total marks is %d /500 \n", sum);
              printf("your percentage is %f \n", percent);
              printf("Fail");
       }

       // printf("Your total marks is %d \n", sum);
       // printf("your percentage is %f", percent);

       return 0;
}