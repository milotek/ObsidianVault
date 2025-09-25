A switch statement can be used to check for multiple different conditions, and is a better substitute for using multiple [[If... else statements]].

```
switch (ranknum)
{

	case 11:
		rank = "Jack";
	    break;

	case 12:
		rank = "Queen";
	    break;

	case 13:
	    rank = "King";
	    break;

	default:
	    rank = "DEFAULT CASE";
	    break;
}
```

This is better in some cases and more preferable to use than multiple if... else statements consecutively
