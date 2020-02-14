
//Arjun 
import{SortByClass} from SortByClass.js;
import{SortByTitle} from SortByTitle.js
import {SortByPrice} from SortByPrice.js;
import {SortByCondition} from SortByCondition.js;


var sortInt=0;// there should be the filters on the website assigned to an int and when pressed a different sort will be called.

switch(sortInt){
case 0:
SortByClass();
 break;
case 1: 
SortByTitle();
  break;
case 2:
SortByPrice();
   break;
case 3: 
SortByCondition();
    break;
default:
    break;
}


