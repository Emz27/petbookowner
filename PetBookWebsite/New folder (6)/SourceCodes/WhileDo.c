#include <stdio.h>

int a, attempts=5;
int main(){


	printf("Please enter your Pin Number:   ");
	scanf("%d",&a);
	
	
	if(a!=1109){
	
	
		while(attempts==0)
				printf("You've been Blocked. Please contact the guard \n\n.");
	

		attempts=attempts-1;
			printf("Pin Number Error. %d more attempts before lockdown. \n\n",attempts);
			main();


				}
	
		else{
			printf("Pin Number Accepted. \n\n");
		}

	
	
	system("Pause");
		
}
