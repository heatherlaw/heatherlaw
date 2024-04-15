function printInfo(){
    document.getElementById("print").style="display:block";
    //get number of subjects
    let subjects=parseInt(prompt("Please enter the number of subjects you take"));
    //loop to ask user for results based on number of subjects entered, then add result to table
    for (let i=0; i<subjects; i++){
        result=parseInt(prompt("Please enter your result for subject "+(i+1)));
        if (result>=90){
            grade=("A");
        }
		else if ((result<90)&&(result>=85)){
			grade=("A-");
		}
		else if ((result<85)&&(result>=80)){
			grade=("B+");
		}
		else if ((result<80)&&(result>=75)){
			grade=("B");
		}
		else if ((result<75)&&(result>=70)){
			grade=("B-");
		}
		else if ((result<70)&&(result>=65)){
			grade=("C+");
		}
		else if ((result<65)&&(result>=60)){
			grade=("C");
		}
		else if ((result<60)&&(result>=55)){
			grade=("C-");
		}
		else if ((result<55)&&(result>=50)){
			grade=("D+");
		}
		else if ((result<50)&&(result>=45)){
			grade=("D");
		}
		else if ((result<45)&&(result>=40)){
			grade=("D-");
		}
		else if ((result<40)&&(result>=25)){
			grade=("E");
		}
		else if ((result<25)&&(result>=10)){
			grade=("F");
		}
		else if (result<10){
			grade=("NG");
		}
        document.getElementById("print").innerHTML+="<tr id=\"row"+i+"\"></tr>";
        document.getElementById("row"+i).innerHTML+="<td>"+(i+1)+"</td>";
        document.getElementById("row"+i).innerHTML+="<td>"+(result)+"</td>";
        document.getElementById("row"+i).innerHTML+="<td>"+(grade)+"</td>";
    }
}