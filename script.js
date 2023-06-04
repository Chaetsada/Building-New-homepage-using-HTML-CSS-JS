function myToggle(x) {
    x.classList.toggle("change");

    let myMenu = document.getElementById('myMenu')
    if(myMenu.className === 'my-menu'){
        myMenu.className += ' menu-active'
    }else{
        myMenu.className = 'my-menu';
    }

  }