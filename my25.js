function evenAndodd (){
    let number = 9;
    
    if (number % 2 ===0){
        console.log("even")
    }
    else {
        // Problem was here: `else` cannot have a condition. Only `if` or `else if` can.
        console.log("odd")
    }
}
evenAndodd()
