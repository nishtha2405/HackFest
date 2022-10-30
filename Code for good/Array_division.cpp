#include<iostream>
using namespace std;
void division(int array1[],int array2[])
{
	int temp[3];
	for(int i=0;i<3;i++)
	{
          temp[i]=array1[i]/array2[i];  
	cout<<temp[i]<<endl;
}

}
int main()
{
	int array1[3]={1,2,3};
	int array2[3]={1,2,3};
	division(array1,array2);
	return 0;
}
