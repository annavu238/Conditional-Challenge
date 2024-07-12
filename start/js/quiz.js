/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correct =0;


// 2. Store the rank of a player
rank ="Not Known";

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/answer1=prompt('name the programming Language that you are learning')
if(answer1.toUpperCase() =='JAVASCRIPT'){
  correct +=1
}
answer2=prompt('name the programming for web')
if(answer2.toUpperCase()=='HTML'){
  correct +=1
}
answer3=prompt('What language we use for styling web')
if(answer3.toUpperCase() =='CSS'){
  correct +=1
}
answer4=prompt('name the college you are going to')
if(answer4.toUpperCase() =='DOUGLAS'){
  correct +=1
}
answer5=prompt('name the city your college locates')
if(answer5.toUpperCase() =='NEW WESTMINSTER'){
  correct +=1
}

//  document.querySelector('main').innerHTML= correct
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if(
  correct==5){rank ='Gold crown'}
else 
if(
  correct>=3){rank ='silver crown'}
else if(
  correct>=1){rank='brozer crown'}
else if(
  correct==0){rank='no crown'}

  document.querySelector('main').innerHTML= `<h2>your score is: ${correct} out of 5. <br> and you have ${rank}</h2>`


// 6. Output results to the <main> element

