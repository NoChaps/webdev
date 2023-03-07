function fibonacciGenerator(n) {
    output = [];
    let x = 0;

for(let i = 1; i <= n; i++) {
    if (i == 1){
        output.push(0);
    }else if (i == 2){
        output.push(1);
    } else{
        x = (output[output.length - 1]) + (output[output.length - 2]);
        output.push(x);
    }    
}
    console.log(output);
}



fibonacciGenerator(20);
