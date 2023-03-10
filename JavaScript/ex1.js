function whosPaying(names) {
    let x = Math.floor(Math.random() * names.length);
    return names[x] + " is going to buy lunch today!";
}

whosPaying("Angela", "Ben", "Jenny", "Michael", "Chloe");

