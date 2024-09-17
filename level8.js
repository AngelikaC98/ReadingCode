function greet(name) {

    // In this example we wanna see hello on our html website, but "+ name" meaning we wonna name from greet with this text.
    //So that´s the reason of writing this plus, because this is command which seggested to add name

    document.getElementById("message").innerHTML = "Hello, " + name;
}


// In greet("John") we are sugessted which name we wonna see with text hallo, so the browser will know which name put on this space "+name"
greet("John");
