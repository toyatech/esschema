/* description: Adapted from Orderly grammar ~/

/* author: Dusty Little <dlittle@toyatech.net> */

%lex
digit       [0-9]
esc         "\\"
int         "-"?(?:[0-9]|[1-9][0-9]+)
exp         (?:[eE][-+]?[0-9]+)
frac	    (?:\.[0-9]+)

%%
\s+                    /* skip whitespace */
\/\/[^\n]*             /* skip comment */
\#[^\n]*               /* skip comment */
";"                    return ';'
","                    return ','
"{"                    return '{'
"}"                    return '}'
"["                    return '['
"]"                    return ']'
":"                    return ':'
"<:"                   return '<:'
">="                   return '>='
"interface"            return 'INTERFACE'
"enum"                 return 'ENUM'
"number"               return 'NUMBER'
"uint32"               return 'NUMBER'
"null"                 return 'NULL'
"boolean"              return 'BOOLEAN'
"RegExp"               return 'REGEXP'
"string"               return 'STRING'
\"(?:{esc}["bfnrt/{esc}]|{esc}"u"[a-fA-F0-9]{4}|[^"{esc}])*\"  yytext = yytext.substr(1,yyleng-2);     return 'STRING_LIT';
{int}{frac}?{exp}?\b   return 'NUMBER_LIT';
[A-Za-z_0-9-]+         return 'PROPERTY';
<<EOF>>                return 'EOF';

/lex

%%

file
  : nodes EOF
    {return $1;}
  ;

properties
  : property ';' properties
    {$$ = $3; $$.unshift($1);}
  | property
    {$$ = [$1];}
  |
    {$$ = [];}
  ;

node_type
  : INTERFACE node_name node_body
  | ENUM node_name node_body
  ;

node_name
  : JSONString
  | PROPERTY
    {$$ = yytext;}
  ;

node_body
  : node_properties
  | '<:' csv_property_names node_properties
  ;

node_properties
  : '{' properties '}'
  ;

csv_property_names
  : csv_property_names ',' property_name
    {$$ = $1; $$.push($3);}
  | property_name
    {$$ = [$1];}
  ;

JSONString
  : STRING_LIT
    {$$ = yytext;}
  ;
