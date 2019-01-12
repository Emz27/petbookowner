#include <stdio.h>

int main(){
int a;
printf("Enter the Grade \n");
scanf("%d", &a);

	switch(a){
		case 97 ... 100:printf("1");break;   
		case 94 ... 96: printf("1.25");break;
		case 91 ... 93: printf("1.5");break;
		case 88 ... 90: printf("1.75");break;
		case 85 ... 87: printf("2");break;
		case 82 ... 84: printf("2.25");break;
		case 79 ... 81: printf("2.5");break;
		case 76 ... 78: printf("2.75");break;
		case 75: printf("3");break;
		case 60 ... 74: printf("5");break;
		default: printf("Error");}             
	
		system("Pause");
		main();
	
	
	}
