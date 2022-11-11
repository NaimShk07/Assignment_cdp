#include<stdio.h>
main(){
	int math,sci,eng,guj,hindi,sum;
	float per;
	
	printf("Enter maths marks\n");
	scanf("%d",&math);
	printf("Enter sci marks\n");
	scanf("%d",&sci);
	printf("Enter eng marks\n");
	scanf("%d",&eng);
	printf("Enter guj marks\n");
	scanf("%d",&guj);
	printf("Enter maths hindi\n");
	scanf("%d",&hindi);
	
	sum=math+sci+eng+hindi+guj;
	printf("Your total marks is %d",sum);
	
	per=sum/5;
	printf("\n percentage is %f",per);
	
	if(per>75){
		printf("\nDistinction");
	}
		else if(per>65){
		printf("\nFirst class");
	}
		else if(per>55){
		printf("\nsecond class");
	}
		else if(per>35){
		printf("\npass class");
	}
		else{
		printf("\nFail");
	}
	
	
	
}