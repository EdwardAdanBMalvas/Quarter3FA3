function generateNumbers() {
    var num1 = Math.ceil(Math.random() * 20);
    var num2 = Math.ceil(Math.random() * 20);
    var num3 = Math.ceil(Math.random() * 20);

    var names = ["Fire 🔥", "Water 💧", "Lightning ⚡", "Ice ❄️", "Poison ☠️", "Darkness 🌑", "Light 💡", "Steel 🛡️", "Wood 🌳", "Lava 🌋", 
                 "Holy ✝️", "Acid 🧪", "Blood 🩸", "Earth 🌍", "Gravity 🪐", "Sound 🎵", "Poisoned 🐍", "Wind 🌬️", "Electricity 🔌", "Shadow 🔮"];

    var name1 = names[num1 - 1];  
    var name2 = names[num2 - 1];  
    var name3 = names[num3 - 1];  

    var biggest = Math.max(num1, num2, num3);

    if(biggest==num1){
		var biggestName = name1;
	}
	if(biggest==num2){
		var biggestName = name2;
	}
	if(biggest==num3){
		var biggestName = name3;
	}

    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var letter = alphabet[num1 - 1];

    var totalMinutes = num2 * num3;
    var hours = Math.floor(totalMinutes / 60);
    var minutes = totalMinutes % 60;

   if (hours == 0) {
        timeBreakdown = minutes;
    } 
	if (hours == 1) {
        if (minutes == 0) {
            timeBreakdown = "1 hour";
        } 
		if (minutes == 1) {
            timeBreakdown = "1 hour and 1 minute";
        } 
		else {
            timeBreakdown = `1 hour and ${minutes} minutes`;
        }
    } 
	
	else {
        if (minutes == 0) {
            timeBreakdown = `${hours} hours`;
        } 
		if (minutes == 1) {
            timeBreakdown = `${hours} hours and 1 minute`;
        } 
		else {
            timeBreakdown = `${hours} hours and ${minutes} minutes`;
        }
    }

    document.getElementById('weakness').innerText = `His Weakness is: ${biggestName}(${biggest})`;
    document.getElementById('spell').innerText = `Your spell has activated, it starts with the letter: ${letter}`;
    document.getElementById('time').innerText = `You beat him in: ${totalMinutes} minutes (${timeBreakdown})`;
}
