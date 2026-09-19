#include<bits/stdc++.h>                           
using namespace std;
/*
steps to print a pattern
step1: for the outer loops count the no. of lines
step2: for the inner loop focus on the columns and connect them somehow to the rows 
*/




void print1(int n){
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cout<< "*";
        }
        cout<<endl;
    }
}

void print2(int n){
    for (int i=0;i<n;i++){
        for(int j=0;j<=i;j++){
            cout<< "*";
        }
        cout<<endl;
    }
}

void print3(int n){
    for(int i=1;i<n;i++){
        for(int j=1;j<=i;j++){
            cout<<j;
        }
        cout<<endl;
    }
}

void print4(int n){
    for(int i=n;i>0;i--){
        for(int j=1;j<=i;j++){
            cout<<j;
        }
        cout<<endl;
    }
}

void print5(int n){
    for (int i=1;i<n;i++){
        for(int j=1;j<=i;j++){
            cout<< i << " ";
        }
        cout<<endl;
    }
}

void print6(int n){
    for (int i=1;i<n;i++){
        for(int j=1;j<=i;j++){
            cout<< j << " ";
        }
        cout<<endl;
    }
}

void print7(int n){
    for (int i=0;i<n;i++){
       // spaces
        for(int j=0;j<n-i-1;j++){
            cout<<" ";
        }
        // stars
        for(int j=0;j<2*i+1;j++){
            cout<< "*";
        }
        // spaces
        for(int j=0;j<n-i-1;j++){
            cout<<" ";
        }
        cout<<endl;
    }
}

int main(){
    int n;
    cout<<"enter the number of rows: ";
     cin>>n;
     print7(n);
    return 0;
}