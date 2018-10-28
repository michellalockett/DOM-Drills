
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.style.position = 'fixed';
    button.append(btnText);
    document.body.append(button);


    button.addEventListener('click', function() {
        
        let myDiv = document.createElement('div');
        document.body.append(myDiv);
        myDiv.style.cssFloat = 'left';    
        myDiv.style.backgroundColor = 'black';
        myDiv.style.width = '100px';
        myDiv.style.height = '100px';
        myDiv.className = 'allDivs';
        myDiv.setAttribute('id', 'id');

    myDiv.addEventListener('mouseover', function() {
        myDiv.style.backgroundColor = 'pink';
     });

     myDiv.addEventListener('mousedown', function() {
         myDiv.style.backgroundColor = 'green';
     });

    });



