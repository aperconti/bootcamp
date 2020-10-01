function WordCount(string){

  const stringArray = string.split(" ");

  let frequency = {};

  for (var i = 0; i < stringArray.length; i++)
    var currentWord = stringArray[1];

    if (currentWord in frequency) {
        frequency[currentWord] += 1;

    }
}