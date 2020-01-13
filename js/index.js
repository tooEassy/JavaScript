let studentAge = 0,
    guyCount = 0,
    girlCount = 0,
    maxLang = 0,
    counter = 0;
users = JSON.parse(localStorage.getItem('users'));
users.forEach(user => {
    studentAge += user.age;
    if(user.sex === 'М') guyCount++;
    else girlCount++;
    if (user.langCount > maxLang) maxLang = user.langCount;
});
document.write("guys: " + guyCount + "<br>" + " girls: " + girlCount + "<br>" + " languages: " + maxLang + "<br>" +
    " current age: " + Math.round(studentAge/users.length) + "<br>");
    function average() {
        let words = document.getElementById('words').value,
            wordsArr = words.split(' '),
            wordsCount = wordsArr.length,
            wordsLen = 0;
        if (!words) {
            document.getElementById('average').textContent = "String can't be counted.";
            return;
        }
        wordsArr.forEach(word =>{
            wordsLen += word.length;
        });
        let averageLetters = wordsLen/wordsCount;
        console.log(averageLetters);
        document.getElementById('average').textContent = 'Letters average is: ' + averageLetters;
    }
if(document.getElementById('submit')) document.getElementById('submit').addEventListener('click', average);


