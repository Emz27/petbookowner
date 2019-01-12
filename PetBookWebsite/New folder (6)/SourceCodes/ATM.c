#include <stdio.h>
int a, b, c, pin, withdraw, deposit, balance=10000, savings=5000;
int main (){

	printf("Enter the Pin: ");
	scanf("%d",&pin);
	if (pin==1234){
		system("cls");
	
	 printf("Main Menu\n");
	 printf("1. Balance \n");
	 printf("2. Withdraw \n");
	 printf("3. Deposit \n");
	 printf("4. Exit \n");
	 printf("Choose your choice \n");
	 scanf("%d",&b);
		
		switch(b){
		
			case 1: {
					printf("Choose what type of account: \n1.Savings\n2.Current\n");
					scanf("%d",&c);
					if(c==1){printf("Your Savings is %d \n",savings);}
					if(c==2){printf("Your Balance is %d \n",balance);}
					main();
				}
			case 2: {
					printf("Choose what type of account: \n1.Savings\n2.Current\n");
					scanf("%d",&c);
					printf("Enter how much you want to withdraw:\n");
					scanf("%d",&withdraw);
					switch(c){
					case 1: savings=savings-withdraw;break;
					case 2: balance=balance-withdraw;break;}
					main();}
			case 3: {
					printf("Choose what type of account: \n1.Savings\n2.Current\n");
					scanf("%d",&c);
					printf("Enter how much you want to deposit:\n");
					scanf("%d",&deposit);
					switch(c){
					case 1: savings=savings+deposit;break;
					case 2: balance=balance+deposit;break;
					}
					main();
					}
			case 4: {
					{printf("Thank you please come again! j3j3j3j3");
					return 0;}
					}
					system("Pause");
				}
				
			}
			}
		

	 



