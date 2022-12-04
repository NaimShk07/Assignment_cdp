#include<stdio.h>

int main(){

       int arr[10]={10,20,30,3,4,5,6,7,8,9};
       int total=0;
       for (int i = 0; i < 10; i++)
       {
              total=arr[i]+total;
       }
       printf("Total is %d\n",total);
       float avg=(float)total/10;
       printf("Average is %.2f",avg);
       

return 0;
}