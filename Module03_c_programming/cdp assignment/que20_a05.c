#include <stdio.h>

int main()
{
       // wap to find the position of element from the given array.
       int arr[5] = {2, 3, 4, 5, 6};

       int temp;
       printf("Enter a position/index_num : ");
       scanf("%d", &temp);
       printf("%d", arr[temp]);

       return 0;
}