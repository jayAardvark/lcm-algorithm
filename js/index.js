function smallestCommons(arr) {
  if (arr[0] > arr[1]){                     //sorts array into ascending order
    arr.push(arr.shift());
  }
  let aArr = arr[0];
  let bArr = arr[1];  
  let betweenArr = [];
  for (let i = aArr; i <= bArr;i++){ betweenArr.unshift(i)};//arr of numbers between a & b
  console.log(betweenArr);
  let a = betweenArr[0];
  let b = betweenArr[1];
  
  let lcm;
  lcm = ((a*b)/b); // .  ** PERHAPS THIS COULD BE MORE PRECISELY DEFINED USING THE EUCLIDEAN ALGORITHM? **
    
  let varPass;
  let lcmControl = lcm; //keeps a static lcm value in order to add to lcm for tests
  while (varPass = "not ok"){
    for (let i = 0; i < betweenArr.length; i++){
      if ((lcm % betweenArr[i]) != 0){
        varPass = "not ok";
        lcm += lcmControl;
      }
    }   
  }                                       

console.log(lcm);
return lcm;

}
smallestCommons([23,18]);
/*
Some notes: compare this version of the code to the non-passing version of the code.  Read the note above, I assumed that I would have to use the Euclidean algorithm to find LCM but the code ran without it.  Meditate on whehter to include it in a refactor.         */
