#include <stdio.h>
#include <string.h>

int main(){
	int another,shuffle=0,bet=0;
	int number[100][3];
	int lastdraw=00;
	int lastwinner[3];
	int potmoney=0;
	strcpy(lastwinner,"N/A");
	
	int i;
	
	
	for(i=0;i!=100;i++){
		strcpy(number[i],"");
	}

	do{
		system("cls");
		int tempname[3];
		
		 printf("\n");
		 printf("   ********************************************************\n");
		 printf("   *          _________________________________           *\n");      
	     printf("   *         |     			       |          *\n");            
		 printf("   *         | WELCOME TO INFORMATICS LOTTERY  |          *\n");     
    	 printf("   *         |     			       |          *\n");            
    	 printf("   *         |_________________________________|          *\n");     
    	 printf("   ********************************************************\n\n");
    	 printf("Last Draw : %d\nLast Winner : %s\n\n",lastdraw,lastwinner[3]);
		
		for(i=0;i!=10;i++){
			printf("0%d %3s  %2d %3s  %2d %3s  %2d %3s  %2d %3s  %2d %3s  %2d %3s  %2d %3s  %2d %3s  %2d %3s \n",i,number[i],i+10,number[i+10],i+20,number[i+20],i+30,number[i+30],i+40,number[i+40],i+50,number[50],i+60,number[i+60],i+70,number[i+70],i+80,number[i+80],i+90,number[i+90]);
		}
	
		printf("\nPot Money: %d\n\n",potmoney);
		potmoney=potmoney+100;
	    
    	 	printf("      Please choose from 00-99. Place a bet. \n      What is your bet:   ");
    	 	scanf("%d",&bet);
    	 
    	 
    	    printf("      Enter your name. (Only 3 letters):  ");
    	    scanf("%s",&tempname);
    	    strcpy(number[bet],tempname);
    	
    	    printf("Do you want to place another bet?\n 1) Yes 2) Draw now\n");
			scanf("%d",&another);
	
			switch(another){
			case 1: main();break;
			case 2: do{
						bet=rand()%10;
						printf("     %d\n",bet);
						shuffle++;
						}while(shuffle!=1);break;
			default: printf("Invalid");
						}
	
		
	
	
		system("pause");
				}while(1);
			}
