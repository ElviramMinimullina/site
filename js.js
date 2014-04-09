function clearIt (obj,id)
{
        if (typeof(id) == 'undefined'){
                id = 'search-span';
        }
	    document.getElementById(id).style.display = 'none';
}

function showIt (obj,id)
{
        if (typeof(id) == 'undefined'){
                id = 'search-span';
        }
    	if (obj.value=='')
    	{
    		document.getElementById(id).style.display = 'block';
    	}
        else 
    	{
    	    document.getElementById(id).style.display = 'none';
    	}
}
