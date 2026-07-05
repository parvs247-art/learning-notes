#include<iostream>
using namespace std;

class Student{
    public:
    string name;
    int age;

    void display(){
        cout<<name<<endl<<""<<age;
    }
};
int main(){
    Student s;
    s.name="parv";
    s.age=19;
    s.display();
}