#include<iostream>
#include<cstring>

using namespace std;

int main(){
    string s;
    cout<<"Enter a string : ";
    getline(cin,s);

    int n=s.length();
    int i=0,j=n-1;

    if(n==0){
        cout<<s;
        return 0;
    }
    
    char x;
    while(i <j){
        x=s[i];
        s[i]=s[j];
        s[j]=x;

        i++,j--;
    }

    cout<<s;
    return 0;
}