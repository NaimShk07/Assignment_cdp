#include<stdio.h>

int main(){

       int arr[10]={10,20,30,3,4,5,6,7,8,9};
       int max=0;
       for (int i = 0; i < 10; i++)
       {
             if (arr[i]>=max)
             {
              max=arr[i];
             }
             
       }
       printf("max number is %d",max);
      
      
       
       
return 0;
}