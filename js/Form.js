class Form {
    constructor() {
      
    }
  
    display(){
      var title = createElement('h2')
      title.html("Ethan's Car Racing Game");
      title.position(130, 0);
      
      var input = createInput("Name");
      var button = createButton('Play');
      
      input.position(130, 160);
      button.position(250, 200);
  
      button.mousePressed(function(){
        input.hide();
        button.hide();
  
        var name = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updatePlayerCount(playerCount);

        var greeting = createElement('h3');
        greeting.html("I missed you" + name )
        greeting.position(130, 160)
      });
  
    }
  }