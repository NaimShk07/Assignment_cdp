#include <stdio.h>

int main()
{
       char find;
       int height, base, length, breadth;
       float radius;
       printf("Please select what you want to find \n\n");
       printf("select t for triangle \n");
       printf("select r for rectangle \n");
       printf("select c for circle \n");
       scanf("%c", &find);
       switch (find)
       {
       case 't':
              printf("enter height \n");
              scanf("%d", &height);
              printf("enter base \n");
              scanf("%d", &base);
              printf("area of triangle is %d \n", base * height / 2);
              break;

       case 'r':
              printf("enter length \n");
              scanf("%d", &length);
              printf("enter breadth \n");
              scanf("%d", &breadth);
              printf("area of rectangle is %d \n", length * breadth);
              break;

       case 'c':
              printf("enter radius \n");
              scanf("%f", &radius);
              printf("area of circle is %f \n",3.14* radius * radius);
              break;


       default:
              printf("please select valid option");
              
       }

       return 0;
}