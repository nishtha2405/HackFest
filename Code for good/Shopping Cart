// C++ program to implement the program
// that illustrates Online shopping
#include <bits/stdc++.h>
#include <cstring>
#include <iostream>
#include <map>
using namespace std;

char c1, confirm_quantity;
float quantity;
int selectedNum;
double total_amount = 0;
int flag = 0;

// Stores items with their corresponding
// price
map<string, double> items = {
	{ "Samsung", 15000 },
	{ "Redmi", 12000 },
	{ "Apple", 100000 },
	{ "Macbook", 250000 },
	{ "HP", 40000 },
	{ "Lenovo", 35000 },
	{ "C", 1000 },
	{ "C++", 3000 },
	{ "Java", 4000 },
	{ "Python", 3500 }
};

// Stores the selected items with
// their quantity
map<string, int> selected_items;

// Function to print the bill after shopping
// is completed prints the items, quantity,
// their cost along with total amount
void printBill(map<string, double> items,
			map<string, int> selected_items,
			float total_amount)
{
	cout << "Item	 "
		<< "Quantity	 "
		<< "Cost\n";

	for (auto j = selected_items.begin();
		j != selected_items.end(); j++) {
		cout << j->first << "	 ";
		cout << j->second << "		 ";
		cout << (selected_items[j->first])
					* (items[j->first])
			<< endl;
	}

	cout << "-----------------------"
		<< "-------------\n";
	cout << "Total amount:			 "
		<< total_amount << endl;
	cout << "-----------------------"
		<< "-------------\n";
	cout << "*****THANK YOU && HAPPY"
		<< " ONLINE SHOPPING*****";
}

// Function to ask the basic details of
// any customer
void customerDetails()
{

	cout << "Enter your name: ";
	string customer_name;
	getline(cin, customer_name);

	cout << "WELCOME ";
	for (int i = 0;
		i < customer_name.length();
		i++) {
		cout << char(toupper(
			customer_name[i]));
	}
	cout << "\n";
}

// showMenu() is to print the
// menu to the user
void showMenu()
{
	cout << "Menu\n";
	cout << "= = = = = = = = "
		<< " = = = = = \n";
	cout << "1.Mobile\n2.laptop\n3"
		<< ".Computer courses\n";
	cout << "= = = = = = = = "
		<< " = = = = = \n";
}

// Function to display the mobile products
void showMobileMenu()
{
	cout << "- - - - - - - - - - -"
		<< " - -\nItem	 Cost\n";
	cout << "1.Samsung Rs.15, 000/-\n";
	cout << "2.Redmi Rs.12, 000/-\n";
	cout << "3.Apple Rs.1, 00, 000/-\n";
	cout << "- - - - - - - - - - - - -\n";
}

// Function to display Laptop products
void showLaptopMenu()
{
	cout << "- - - - - - - - - - -"
		<< " - -\nItem	 Cost\n";
	cout << "1.Macbook Rs.2, 00, 000/-\n";
	cout << "2.HP	 Rs.40, 000/-\n";
	cout << "3.Lenovo Rs.35, 000/-\n";
	cout << "- - - - - - - - - - - - -\n";
}

// if the user selects computer courses,
// then courses list will be displayed
void showComputerCourseMenu()
{
	cout << "- - - - - - - - - - "
		<< " - -\nItem	 Cost\n";
	cout << "1.C	 Rs.1, 000/-\n";
	cout << "2.C++	 Rs.3, 000/-\n";
	cout << "3.Java	 Rs.4, 000/-\n";
	cout << "4.Python Rs.3, 500/-\n";
	cout << "- - - - - - - - - - - - -\n";
}

// Function to display the mobile category
void selectedMobile()
{
	cout << "Do you wish to conti"
		<< "nue?(for yes" + "press (Y/y ), "
		<< " if no press other letter ): ";
	cin >> c1;

	if (c1 == 'Y' || c1 == 'y') {
		cout << "Enter respective number: ";
		cin >> selectedNum;

		if (selectedNum == 1
			|| selectedNum == 2
			|| selectedNum == 3) {

			// Selected Samsung
			if (selectedNum == 1) {

				cout << "selected Samsung\n";
				do {
					cout << "Quantity: ";

					cin >> quantity;

					cout << "You have selected Samsung - "
						<< quantity << endl;
					cout << "Are you sure?"
						<< "(for yes press (Y/y ), "
						<< " if no press other letter): ";

					cin >> confirm_quantity;

				} while ((confirm_quantity != 'y'
						&& confirm_quantity != 'Y')
						|| (quantity < 0)
						|| (ceil(quantity) != floor(quantity)));

				if (confirm_quantity == 'y'
					|| confirm_quantity == 'Y') {
					total_amount += quantity
									* items["Samsung"];
					selected_items["Samsung"] = quantity;
					cout << "amount = "
						<< total_amount << endl;
				}
			}

			// Selected Redmi
			if (selectedNum == 2) {

				cout << "selected Redmi\n";

				do {
					cout << "Quantity: ";
					cin >> quantity;
					cout << "You have selec"
						<< "ted Redmi - "
						<< quantity << endl;
					cout << "Are you sure?(f"
						<< "or yes press (Y/y ), "
						<< " if no press other letter ): ";
					cin >> confirm_quantity;
				} while ((confirm_quantity != 'y'
						&& confirm_quantity != 'Y')
						|| (quantity < 0)
						|| (ceil(quantity)
							!= floor(quantity)));

				if (confirm_quantity == 'y'
					|| confirm_quantity == 'Y') {

					total_amount += quantity
									* items["Redmi"];
					selected_items["Redmi"] = quantity;
					cout << "amount = "
						<< total_amount << endl;
				}
			}

			// Selected Apple
			if (selectedNum == 3) {

				cout << "You have selected Apple\n";

				do {
					cout << "Quantity: ";
					cin >> quantity;
					cout << "You have selected"
						<< " Apple - "
						<< quantity
						<< endl;
					cout << "Are you sure?"
						<< "(for yes press (Y/y )"
						<< ", if no press other letter ): ";
					cin >> confirm_quantity;
				} while ((confirm_quantity != 'y'
						&& confirm_quantity != 'Y')
						|| (quantity < 0)
						|| (ceil(quantity)
							!= floor(quantity)));

				if (confirm_quantity == 'y'
					|| confirm_quantity == 'Y') {
					total_amount += quantity
									* items["Apple"];
					selected_items["Apple"] = quantity;
					cout << "amount = "
						<< total_amount
						<< endl;
				}
			}
		}
		else {
			flag = 1;
		}
	}
	else {
		flag = 1;
	}
}

// If Laptop category is selected
void selectedLaptop()
{
	cout << "Do you wish to continue?"
		<< "(for yes press (Y/y ), "
		<< "if no press other letter): ";
	cin >> c1;
	if (c1 == 'Y' || c1 == 'y') {

		cout << "Enter respective number: ";
		cin >> selectedNum;

		if (selectedNum == 1
			|| selectedNum == 2
			|| selectedNum == 3) {

			// selected Macbook
			if (selectedNum == 1) {
				cout << "selected Macbook\n";
				do {

					cout << "Quantity: ";
					cin >> quantity;

					cout << "You have selected"
						<< " Macbook - "
						<< quantity << endl;
					cout << "Are you sure?"
						<< "(for yes press (Y/y ), "
						<< " if no press other letter ): ";
					cin >> confirm_quantity;
				} while ((confirm_quantity != 'y'
						&& confirm_quantity != 'Y')
						|| (quantity < 0)
						|| (ceil(quantity)
							!= floor(quantity)));

				if (confirm_quantity == 'y'
					|| confirm_quantity == 'Y') {
					total_amount += quantity
									* items["Macbook"];
					selected_items["Macbook"] = quantity;
					cout << "amount = "
						<< total_amount
						<< endl;
				}
			}

			// selected HP
			if (selectedNum == 2) {
				cout << "selected HP\n";
				do {
					cout << "Quantity: ";
					cin >> quantity;
					cout << "You have selected"
						<< " HP - "
						<< quantity << endl;
					cout << "Are you sure?"
						<< "(for yes press (Y/y ), "
						<< " if no press other letter ): ";
					cin >> confirm_quantity;
				} while ((confirm_quantity
							!= 'y'
						&& confirm_quantity != 'Y')
						|| (quantity < 0)
						|| (ceil(quantity)
							!= floor(quantity)));

				if (confirm_quantity == 'y'
					|| confirm_quantity == 'Y') {
					total_amount += quantity
									* items["HP"];
					selected_items["HP"] = quantity;
					cout << "amount = "
						<< total_amount
						<< endl;
				}
			}

			// selected Lenovo
			if (selectedNum == 3) {
				cout << "selected Lenovo\n";
				do {

					cout << "Quantity: ";
					cin >> quantity;

					cout << "You have selected"
							" Lenovo - "
						<< quantity << endl;
					cout << "Are you sure?"
						<< "(for yes press (Y/y ), "
						<< "if no press other letter ): ";
					cin >> confirm_quantity;
				} while ((confirm_quantity != 'y'
						&& confirm_quantity != 'Y')
						|| (quantity < 0)
						|| (ceil(quantity)
							!= floor(quantity)));

				if (confirm_quantity == 'y'
					|| confirm_quantity == 'Y') {
					total_amount += quantity
									* items["Lenovo"];
					selected_items["Lenovo"] = quantity;
					cout << "amount = "
						<< total_amount
						<< endl;
				}
			}
		}
		else {
			flag = 1;
		}
	}
	else {
		flag = 1;
	}
}

// If computer course
// category is selected
void selectedCourses()
{
	cout << "Do you wish to continue?"
		<< "(for yes press (Y/y ), "
		<< " if no press other letter ): ";
	cin >> c1;
	if (c1 == 'Y' || c1 == 'y') {
		cout << "Enter the respective number: ";
		cin >> selectedNum;
		if (selectedNum == 1
			|| selectedNum == 2
			|| selectedNum == 3
			|| selectedNum == 4) {

			// selected C
			if (selectedNum == 1) {
				cout << "selected C Language"
					<< " course\n";
				total_amount += items["C"];
				selected_items["C"]++;
				cout << "amount = "
					<< total_amount
					<< endl;
			}

			// selected C++
			if (selectedNum == 2) {
				cout << "selected C++ Language course\n";
				total_amount += items["C++"];
				selected_items["C++"]++;
				cout << "amount = " << total_amount << endl;
			}

			// selected Java
			if (selectedNum == 3) {
				cout << "selected Java Language course\n";
				total_amount += items["Java"];
				selected_items["Java"]++;
				cout << "amount = " << total_amount << endl;
			}

			// selected python
			if (selectedNum == 4) {
				cout << "selected Python"
					<< " Language course\n";
				total_amount += items["Python"];
				selected_items["Python"]++;
				cout << "amount = "
					<< total_amount
					<< endl;
			}
		}
		else {
			flag = 1;
		}
	}
	else {
		flag = 1;
	}
}

// Driver code
int main()
{
	// function call
	customerDetails();

	do {
		showMenu();
		cout << "Do you wish to continue?"
			<< "(for yes press (Y/y ), "
			<< " if no press other letter ): ";
		char c;
		cin >> c;
		if (c == 'Y' || c == 'y') {
			cout << "Enter respective number: ";
			int num;
			cin >> num;
			if (num == 1 || num == 2
				|| num == 3) {
				switch (num) {
				case 1:

					// For Mobile
					showMobileMenu();
					selectedMobile();
					break;

				case 2:

					// For Laptop
					showLaptopMenu();
					selectedLaptop();
					break;

				case 3:

					// For computer course
					showComputerCourseMenu();
					selectedCourses();
					break;
				}
			}
			else {
				flag = 1;
			}
		}
		else {
			flag = 1;
		}

	} while (flag == 0);

	// print bill
	printBill(items, selected_items,
			total_amount);
}
