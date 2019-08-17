function myFunction() {
    var password = document.getElementById("dom").value;

    var length = password.length;
    // window.alert(length);
    var comment;
    if (length == 0)

     {
        comment = "Type Something &#8593;";
    }

    else if (length == 1)

     {
        comment = "There we go!";
    }

    else if(length == 2)

     {
        comment= "Just do it!";
    }
    else if(length == 3)

     {
        comment = "Type already!";
    }
    else if(length == 4)

     {
        comment = "Can you even Type!";
    }
    else if(length == 5)

     {
        comment = "c'mon man,I dont have all day!";
    }
    else if(length == 6)

     {
        comment = "Getting there!";
    }
    else if(length == 7)

     {
        comment = "Smash them keys!";
    }
    else if(length == 8)

     {
        comment = "Well, Now we are talking!";
    }
    else if(length == 9)

     {
        comment = "Keep em coming!";
    }
    else if(length == 10)

     {
        comment = "Decent i guess!";
    }
    else if(length == 11)

     {
        comment = "Woah,Chill dude!";
    }
    else if(length == 12)

     {
        comment = "You need to calm down!";
    }
    else if(length == 13)

     {
        comment = "Like you will remember this?";
    }
    else if(length == 14)

     {
        comment = "Okay bro! You need to get your shit together";
    }
    else if(length == 15)

     {
        comment = "One more letter and i'm done!";
    }
    else
     {
        comment = "Bye!";
    }
    document.getElementById("comment").innerHTML = comment;
    document.getElementById("length").innerHTML = length;
}
