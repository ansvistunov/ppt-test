#include <stdio.h>
#define MAX_ENTRIES 1000

typedef struct { 
	char *name; 
	char *val; 
} entry;

char *makeword(char *line, char stop) { 
/* Предназначена для выделения части строки, ограниченной "стоп-символами"*/ 
	int x = 0,y; 
	char *word = (char *) malloc(sizeof(char) * (strlen(line) + 1)); 
	for(x=0;((line[x]) && (line[x] != stop));x++) 
	word[x] = line[x]; 
	word[x] = '\0'; 
	if(line[x]) ++x; 
	y=0;

	while(line[y++] = line[x++]); 
	return word; 
}

char *fmakeword(FILE *f, char stop, int *cl) { 
/* Предназначена для выделения строки, ограниченной "стоп-символом" stop, из потока f длиной cl. 
*/ 
	int wsize; 
	char *word; 
	int ll;

	wsize = 102400; 
	ll=0; 
	word = (char *) malloc(sizeof(char) * (wsize + 1));

	while(1) { 
		word[ll] = (char)fgetc(f); 
		if(ll==wsize) { 
			word[ll+1] = '\0'; 
			wsize+=102400; 
			word = (char *)realloc(word,sizeof(char)*(wsize+1)); 
		} 
		--(*cl); 
		if((word[ll] == stop) || (feof(f)) || (!(*cl))) { 
			if(word[ll] != stop) ll++; 
			word[ll] = '\0'; 
			return word; 
		} 
		++ll; 
	} 
}


char x2c(char *what) { 
	/* Предназначена для преобразования шестнадцатиричного кода символа в код символа 
	*/ 
	register char digit;

	digit = (what[0] >= 'A' ? ((what[0] & 0xdf) - 'A')+10 : (what[0] - '0')); 
	digit *= 16; 
	digit += (what[1] >= 'A' ? ((what[1] & 0xdf) - 'A')+10 : (what[1] - '0')); 
	return(digit); 
}

void unescape_url(char *url) {

	register int x,y;

	for(x=0,y=0;url[y];++x,++y) { 
		if((url[x] = url[y]) == '%') { 
			url[x] = x2c(&url[y+1]); 
			y+=2; 
		} 
	} 
	url[x] = '\0'; 
	}

void plustospace(char *str) { 
/*замена символов "+" на символ "пробел"*/ 
	register int x;

	for(x=0;str[x];x++) if(str[x] == '+') str[x] = ' '; 
}



int main(int arcg, char* argv[]){
	entry entries[MAX_ENTRIES]; 
    printf("Content-type: text/html%c%c",10,10); 
	printf("<h1>HelloWorld</h1>\n\n");
	int cl = atoi(getenv("CONTENT_LENGTH")); 
	int x,m;
	for(x=0;cl && (!feof(stdin));x++){
		m=x;
		entries[x].val = fmakeword(stdin,'&',&cl); 
		plustospace(entries[x].val); 
		unescape_url(entries[x].val); 
		entries[x].name = makeword(entries[x].val,'='); 
	} 
	printf("<H1>Query Results</H1>"); 
	printf("You submitted the following name/value pairs:<p>%c",10); 
	printf("<ul>%c",10); 
	for(x=0; x <= m; x++) printf("<li> <code>%s = %s</code>%c",entries[x].name, entries[x].val,10); 
	printf("</ul>%c",10); 
	return 0;
}