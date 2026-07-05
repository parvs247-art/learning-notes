#include<iostream>
using namespace std;

int main(){
    int a,b;
    cout<<"Enter two numbers: ";
    cin>>a>>b;
    if(a>b){
        cout<<" the greatest number is: "<<a;
    }
    else{
        cout<<" the greatest number is: "<<b;
    }
    return 0;
}