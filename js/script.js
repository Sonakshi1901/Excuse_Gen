
document.querySelector("#excuse_button").addEventListener("click", excuse_generator);


function excuse_generator() {
  //array with different words
  var first = 'a';
  var adj = ['rude', 'loud', 'lonely', 'crazy', 'hairy', 'two-headed', 'stinky', 'slow', 'fashionable', 'glowing', 'cranky', 'tiny', 'robust', 'bloated', 'colourful'];
  var noun = ['racoon', 'dog', 'jogger', 'driver', 'neighbour', 'shopkeeper', 'receptionist', 'cat', 'security guard', 'waiter', 'manager', 'doctor', 'delivery guy'];
  var action = ['took my', 'threw my', 'yelled at my', 'kicked my', 'jumped on my', 'danced on my', 'hit my', 'burned my', 'stole my', 'swallowed my', 'exploded my', 'stamped on my', 'slipped on my']
  var possession = ['toe', 'wallet', 'watch', 'car', 'bag', 'utensils', 'phone', 'lunch', 'speakers', 'TV set', 'documents', 'coffee'];
  var where = ['in front of my house."', 'on the kitchen counter."', 'on the street."', 'at the bus stop."', 'at the mall."', 'in the toilet."']

  //randomizing the variables
  var rdm1 = Math.floor(Math.random() * adj.length);
  var rdm2 = Math.floor(Math.random() * noun.length);
  var rdm3 = Math.floor(Math.random() * action.length);
  var rdm4 = Math.floor(Math.random() * possession.length);
  var rdm5 = Math.floor(Math.random() * where.length);

  //joining the given sentence
  document.querySelector("#excuse-gen").innerHTML = first + ' ' + adj[rdm1] + ' ' +  noun[rdm2] + ' ' + action[rdm3] + ' ' + possession[rdm4] + ' ' + where[rdm5];
  document.querySelector("#excuse-gen1").style.color = "#4682b4";
  document.querySelector("#excuse-gen").style.color = "#191970";
}
