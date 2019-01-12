#include <stdio.h>

int pin,attempts=4,transaction=0,state=0,sbalance=10000,abalance=5000,withdraw,deposit,account=-1;
int main(){
    switch(state){
                  case 0:{
                        printf("      ______________________________________       \n");
                        printf("     |           Welcome to Emzie           |      \n");
                        printf("     |                  ATM                 |      \n");
                        printf("     |                                      |      \n");
                        printf("     |       The Most Trusted ATM client    |      \n");
                        printf("     |                Open 24/7             |      \n");
                        printf("     |______________________________________|      \n\n\n");
                        state=1;
                        main();
                        }
                  case 1:{
                                           
                        
                        printf("     Please Enter Your PIN: ");
                        scanf("%d",&pin);
                        
                        if(pin!=1234){
                                      if(attempts==0){
                                                      while(!attempts){
                                                                       printf("             ATM LOCKDOWN INFORM THE ATM MANAGEMENT!             ");
                                                      }
                                      }
                                      attempts-=1;
                                      printf("     INCORRECT PASSWORD!    %d attempts left until the ATM lockdown\n",attempts);
                                      main();
                                      
                        }
                        else{
                             printf(" ________________________________________________________________________\n");
                             printf("|                         LOGIN SUCCESS                                  |\n");
                             printf("|________________________________________________________________________|\n\n");
                             
                             printf("MAIN MENU: \n");
                                printf("     TRANSACTIONS:\n");
                                printf("                       1-BALANCE\n");
                                printf("                       2-WITHDRAW\n");
                                printf("                       3-DEPOSIT\n");
                                printf("                       4-EXIT\n\n");
                                state=2;
                                main();
                                }
                    }
                    case 2:{
                         
                            if(transaction==0){
                            printf("     Choose Your Transaction: ");
                            scanf("%d",&transaction);
                            }
                            switch(transaction){
                                                case 1:state=3;break;
                                                case 2:{
													if(account==-1)state=8;
													else state=4;
													break;
												}
                                                case 3:{
													if(account==-1)state=8;
													else state=5;
													break;
													}
                                                case 4:state=6;break;
                                                default:printf("        INVALID TRANSACTION CODE                                 \n\n");                   
                            }
                            
                            main();
                    }
                    case 3:{
                         
                         printf("\n\n               You Choose the Balance Transaction\n");
                         printf("                       Your Current Account Balance: %d \n\n",sbalance);
                         printf("                       Your Current Savings Balance: %d \n\n",abalance);
                         printf("TRANSACTION COMPLETE !!! \n\n");
                         state=7;
                         system("pause\n");
                         main();
                    }
                    case 4:{
                         printf("\n\n               You Choose the Withdraw Transaction\n");
                         printf("                       Your Current Savings Balance: %d \n\n",sbalance);
                         printf("                       Your Current Account Balance: %d \n\n",abalance);
                         printf("                       Enter your desired withdraw amount: ");
                         scanf("%d",&withdraw);

                              switch(account){
                              
                              case 1:abalance=abalance-withdraw;break;
                              case 2:sbalance=sbalance-withdraw;break;
                         }
                              state=7;
                              
                              main();
                        
                    }
                    case 5:{
                         printf("\n\n               You Choose the DEPOSIT Transaction\n");
                         printf("                       Your Current Account Balance: %d \n\n",abalance);
                         printf("                       Your Current Savings Balance: %d \n\n",sbalance);
                         printf("                       Enter your desired deposit amount: ");
                         scanf("%d",&deposit);
                         if(deposit<1){
                                 printf("\n\n                  INVALID AMOUNT !!\n\n");
                                 main();
                         }
                         else{
                              switch(account){
                              
                              case 1:abalance=abalance+deposit;break;
                              case 2:sbalance=sbalance+deposit;break;
                         }
                         state=7;
                         main();
						}
					}
                    case 6:{
                         
                         printf("\n\n\n                        THANK YOU FOR CHOOSING OUR ATM CLIENT! HAVE A NICE DAY :D\n\n\n");
                         account=-1;
                         state=0;
                         system("pause");
                         main();
                    }
                    case 7:{
                         int a;
                         transaction=0;
                         printf("\n\n                       Do You want another Transaction ? \n");
                         printf("\n\n                       1- YES    2- NO \n");
                         printf("ENTER transaction Code : ");
                         scanf("%d",&a);
                         if(a==1){
                                  state=0;
                                  main();
                                  }
                         else if(a==2){
                              state=6;
                              main();
                              }
                         else{ printf("INVALID CODE\n");main();}
                         }
					case 8:{
                         int b;
						printf("\nChoose Account TYPE : 1-SAVINGS	2-ACCOUNT\n");
						printf("Enter CODE : ");
						scanf("%d",&b);
						if(b==1||b==2){account=b;state=2;}
						else printf("\nINVALID CODE\n");
						main();
					}     
    }

    system("pause");

}

    
    
    


    
    
