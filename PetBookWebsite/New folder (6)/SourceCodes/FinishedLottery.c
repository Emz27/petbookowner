#include <stdio.h>
#include <string.h>
#include <stdlib.h>


#define MAX_NAME	5
#define MAX_USER 500
#define MAX_NUMBER 100


int another,id;
char number[MAX_NUMBER][MAX_NAME];
char lastwinner[MAX_NAME];
int lastdraw=00;
int lastdrawprice=0;
int potmoney=0;

int main(){
	
	
	int i;

	do{
		system("cls");
		char tempname[MAX_NAME];
	        menu();
    	 	printf("      Please choose from 00-99. Place a bet. \n      What is your bet:   ");
    	 	char bet[128];
    	 	int b;
    	 	do{
    	 		b=betnumber();
    	 		if(b==-1||number[b][0]!='\0'){
    	 			system("cls");
    	 			main();
				}
			}
			while(b==-1);
    	 	
    	 	potmoney+=100;
    	 	int k=-1;
    	 	do{
    	 		printf("      Enter your name. (Only 3 letters) : ");
    	    	scanf("%s",&tempname);
    	    	if(tempname[3]!='\0'){
    	    		k=1;
    	    		system("cls");
    	 			main();
				}
				else{
					k=-1;
				}
			}
			while(k!=-1);
    	    
    	    strcpy(number[b],tempname);
    	
    	    printf("Do you want to place another bet?\n 1) Yes 2) Draw now\n");
			scanf("%d",&another);
			int bets;
			switch(another){
			case 1: main();break;
			case 2: {
				int shuffle=0;
				do{
					
					bets=rand()%99;
					lastdraw=bets;
					
					printf("Drawing Numbers : \n\n			%d",bets);
					system("cls");
					shuffle++;
					
				}while(shuffle!=400);
				
				printf("\n\n\nWinning Player : %s\nWinning Number : %d\nJackPot:%d\n\n\n\n\n",number[lastdraw],lastdraw,potmoney);
				system("pause");
				int i;
				
				
				if(number[lastdraw][0]!='\0'){
					
					lastdrawprice=potmoney;
					potmoney=0;
					strcpy(lastwinner,number[lastdraw]);
					printf(lastwinner);
					
					
				}
				else{
					
					
				}
				for(i=0;i!=MAX_NUMBER;i++){
					strcpy(number[i],"");
				}
				break;
			}
			default:{
				printf("Invalid");
						
	
		
	
	
				system("pause");
				main();
				break;
			} 
		}
		}while(1);
	
}

int home(){
    printf("   ********************************************************\n");
    printf("   *          _________________________________           *\n");      
    printf("   *         |     			       |          *\n");            
    printf("   *         | WELCOME TO INFORMATICS LOTTERY  |          *\n");
    printf("   *         |     			       |          *\n");
    printf("   *         |_________________________________|          *\n");     
    printf("   ********************************************************\n\n");
    printf("\n");
}

int menu(){
    printf("Last Draw : %d\nLast Winner : %s\nLast Draw Price : %d\n\n",lastdraw,lastwinner,lastdrawprice);
		int i;
		for(i=0;i!=10;i++){
		printf("%2d %3s  %2d %3s  %2d %3s  %2d %3s  %2d %3s  %2d %3s  %2d %3s  %2d %3s  %2d %3s  %2d %3s \n",i,number[i],i+10,number[i+10],i+20,number[i+20],i+30,number[i+30],i+40,number[i+40],i+50,number[i+50],i+60,number[i+60],i+70,number[i+70],i+80,number[i+80],i+90,number[i+90]);
		}
	
	printf("\nJackpot: %d\n\n",potmoney);
}

int betnumber(){
	char number[128];
	scanf("%s",&number);
    if(strcmp(number,"0")==0)return 0;
    else if(strcmp(number,"1")==0)return 1;
    else if(strcmp(number,"2")==0)return 2;
    else if(strcmp(number,"3")==0)return 3;
    else if(strcmp(number,"4")==0)return 4;
    else if(strcmp(number,"5")==0)return 5;
    else if(strcmp(number,"6")==0)return 6;
    else if(strcmp(number,"7")==0)return 7;
    else if(strcmp(number,"8")==0)return 8;
    else if(strcmp(number,"9")==0)return 9;
    else if(strcmp(number,"10")==0)return 10;
    else if(strcmp(number,"11")==0)return 11;
    else if(strcmp(number,"12")==0)return 12;
    else if(strcmp(number,"13")==0)return 13;
    else if(strcmp(number,"14")==0)return 14;
    else if(strcmp(number,"15")==0)return 15;
    else if(strcmp(number,"16")==0)return 16;
    else if(strcmp(number,"17")==0)return 17;
    else if(strcmp(number,"18")==0)return 18;
    else if(strcmp(number,"19")==0)return 19;
    else if(strcmp(number,"20")==0)return 20;
    else if(strcmp(number,"21")==0)return 21;
    else if(strcmp(number,"22")==0)return 22;
    else if(strcmp(number,"23")==0)return 23;
    else if(strcmp(number,"24")==0)return 24;
    else if(strcmp(number,"25")==0)return 25;
    else if(strcmp(number,"26")==0)return 26;
    else if(strcmp(number,"27")==0)return 27;
    else if(strcmp(number,"28")==0)return 28;
    else if(strcmp(number,"29")==0)return 29;
    else if(strcmp(number,"30")==0)return 30;
    else if(strcmp(number,"31")==0)return 31;
    else if(strcmp(number,"32")==0)return 32;
    else if(strcmp(number,"33")==0)return 33;
    else if(strcmp(number,"34")==0)return 34;
    else if(strcmp(number,"35")==0)return 35;
    else if(strcmp(number,"36")==0)return 36;
    else if(strcmp(number,"37")==0)return 37;
    else if(strcmp(number,"38")==0)return 38;
    else if(strcmp(number,"39")==0)return 39;
    else if(strcmp(number,"40")==0)return 40;
    else if(strcmp(number,"41")==0)return 41;
    else if(strcmp(number,"42")==0)return 42;
    else if(strcmp(number,"43")==0)return 43;
    else if(strcmp(number,"44")==0)return 44;
    else if(strcmp(number,"45")==0)return 45;
    else if(strcmp(number,"46")==0)return 46;
    else if(strcmp(number,"47")==0)return 47;
    else if(strcmp(number,"48")==0)return 48;
    else if(strcmp(number,"49")==0)return 49;
    else if(strcmp(number,"50")==0)return 50;
    else if(strcmp(number,"51")==0)return 51;
    else if(strcmp(number,"52")==0)return 52;
    else if(strcmp(number,"53")==0)return 53;
    else if(strcmp(number,"54")==0)return 54;
    else if(strcmp(number,"55")==0)return 55;
    else if(strcmp(number,"56")==0)return 56;
    else if(strcmp(number,"57")==0)return 57;
    else if(strcmp(number,"58")==0)return 58;
    else if(strcmp(number,"59")==0)return 59;
    else if(strcmp(number,"60")==0)return 60;
    else if(strcmp(number,"61")==0)return 61;
    else if(strcmp(number,"62")==0)return 62;
    else if(strcmp(number,"63")==0)return 63;
    else if(strcmp(number,"64")==0)return 64;
    else if(strcmp(number,"65")==0)return 65;
    else if(strcmp(number,"66")==0)return 66;
    else if(strcmp(number,"67")==0)return 67;
    else if(strcmp(number,"68")==0)return 68;
    else if(strcmp(number,"69")==0)return 69;
    else if(strcmp(number,"70")==0)return 70;
    else if(strcmp(number,"71")==0)return 71;
    else if(strcmp(number,"72")==0)return 72;
    else if(strcmp(number,"73")==0)return 73;
    else if(strcmp(number,"74")==0)return 74;
    else if(strcmp(number,"75")==0)return 75;
    else if(strcmp(number,"76")==0)return 76;
    else if(strcmp(number,"77")==0)return 77;
    else if(strcmp(number,"78")==0)return 78;
    else if(strcmp(number,"79")==0)return 79;
    else if(strcmp(number,"80")==0)return 80;
    else if(strcmp(number,"81")==0)return 81;
    else if(strcmp(number,"82")==0)return 82;
    else if(strcmp(number,"83")==0)return 83;
    else if(strcmp(number,"84")==0)return 84;
    else if(strcmp(number,"85")==0)return 85;
    else if(strcmp(number,"86")==0)return 86;
    else if(strcmp(number,"87")==0)return 87;
    else if(strcmp(number,"88")==0)return 88;
    else if(strcmp(number,"89")==0)return 89;
    else if(strcmp(number,"90")==0)return 90;
    else if(strcmp(number,"91")==0)return 91;
    else if(strcmp(number,"92")==0)return 92;
    else if(strcmp(number,"93")==0)return 93;
    else if(strcmp(number,"94")==0)return 94;
    else if(strcmp(number,"95")==0)return 95;
    else if(strcmp(number,"96")==0)return 96;
    else if(strcmp(number,"97")==0)return 97;
    else if(strcmp(number,"98")==0)return 98;
    else if(strcmp(number,"99")==0)return 99;
    else{
    	return -1;
	}
}  
