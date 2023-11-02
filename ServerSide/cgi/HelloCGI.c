#include <stdio.h>

int main(int arcg, char* argv[]){
    printf("Content-type: text/html%c%c",10,10); 
	printf("<h1>HelloWorld</h1>\n\n");
	printf("REQUEST_METHOD=%s",getenv("REQUEST_METHOD"));
	return 0;
}