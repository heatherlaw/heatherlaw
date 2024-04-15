function printSong(){
    for (let i=99; i>=0; i--){
        document.getElementById("song").style="display:none";
        if (i>2){
            document.getElementById("lyrics").innerHTML+=i+" bottles of beer on the wall, "+i+" bottles of beer"+"</br>";
            document.getElementById("lyrics").innerHTML+="Take one down and pass it around, "+(i-1)+" bottles of beer on the wall"+"</br>";
        }
        else if (i==2){
            document.getElementById("lyrics").innerHTML+="2 bottles of beer on the wall, 2 bottles of beer"+"</br>";;
            document.getElementById("lyrics").innerHTML+="Take one down and pass it around, 1 more bottle of beer on the wall"+"</br>";;
        }
        else if (i==1){
            document.getElementById("lyrics").innerHTML+="1 bottle of beer on the wall, 1 bottle of beer"+"</br>";;
            document.getElementById("lyrics").innerHTML+="Take one down and pass it around, no more bottles of beer on the wall"+"</br>";;
        }
        else{
            document.getElementById("lyrics").innerHTML+="No more bottles of beer on the wall, no more bottles of beer"+"</br>";;
            document.getElementById("lyrics").innerHTML+="Go to the store and buy some more, 99 bottles of beer on the wall"+"</br>";;
        }
    }
}