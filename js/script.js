function Bahamut1(){
    this.bahamut = {
        name: "Bahamut",
        pv :4755,
        pm :2866,
        attaque : 450,
        défense : 230,
        Mattaque: 250,
        Mdefense: 200,
        element:"Ténèbre",
        attack: "Auroboros",
        img :"<img src='img/bahamut.png' width='300' height='300'>",
        video:"<iframe width='300' height='250' class='video' src='https://www.youtube.com/embed/s6cFDIrfCZY' frameborder='0'>",
        
        identite :function(){
                return  this.img +
                "<br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack +
                "<br> Invocation: <br> " +this.video ;
    }
}
   
document.getElementById("1").innerHTML=this.bahamut.identite();

}

function Shiva1(){
this.shiva = {
    name: "Shiva",
    pv :3650,
    pm :5210,
    attaque : 310,
    défense : 420,
    Mattaque: 320,
    Mdefense: 180,
    element:"Glace",
    attack: "Transcendentale",
    img :"<img src='img/shiva.png' width='200' height='300'>",
    video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/0lEdB-bSufM?ecver=1' frameborder='0' >",
    
    identite : function(){
        return  this.img +
                "<br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack  +
            "<br> Invocation: <br> " +this.video ;
    }
}

document.getElementById("1").innerHTML=this.shiva.identite();
    
}

function Ifrit1(){
this.ifrit = {
    name: "Ifrit",
    pv :5431,
    pm :2140,
    attaque : 410,
    défense : 330,
    Mattaque: 120,
    Mdefense: 190,
    element:"Feu",
    attack: "Divine Comédie",
    img :"<img src='img/ifrit.png' width='300' height='300'>",
    video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/oFtMnj5w9_4?ecver=1' frameborder='0' >",
    
    identite : function(){
        return this.img +
                "<br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack  + 
                "<br> Invocation :<br> " +this.video;
    }
}
document.getElementById("1").innerHTML=this.ifrit.identite();
}

function Nosferatu1(){
this.nosferatu = {
    name: "Nosferatu",
    pv :7150,
    pm :6550,
    attaque : 720,
    défense : 540,
    Mattaque: 110,
    Mdefense: 130,
    element:"Neutre",
    attack: "Noctis",
    img :"<img src='img/Nosferatu.png' width='300' height='300'>",
    video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/suxQsTVL6sc' frameborder='0' >",
    
    identite : function(){
        return this.img +
                "<br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack  +
                "<br> Invocation: <br>" + this.video ;
    }
}
document.getElementById("1").innerHTML=this.nosferatu.identite();
}

function Odin1(){
this.odin = {
    name: "Odin",
    pv :9150,
    pm :9840,
    attaque : 407,
    défense : 200,
    Mattaque: 750,
    Mdefense: 276,
    element:"Neutre",
    attack: "Zantetsuken",
    img :"<img src='img/odin.png' width='300' height='300'>",
    video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/0aWwSDn_bgY' frameborder='0' >",
    
    identite : function(){
        return this.img +
                "<br><br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack  + 
                "<br> Invocation: <br> " + this.video ;
    }
}
document.getElementById("1").innerHTML=this.odin.identite();
}

function Phoenix1(){
this.phoenix = {
    name: "Phoenix",
    pv :4150,
    pm :340,
    attaque : 180,
    défense : 200,
    Mattaque: 430,
    Mdefense: 610,
    element:"Feu",
    attack: "Terre Brulé",
    img :"<img src='img/phoenix.png'width='300' height='300'>",
    video :"<iframe width='300' height='250' src='https://www.youtube.com/embed/cBl3o3TNAE8?ecver=1' frameborder='0' >",
    
    identite : function(){
        return this.img +
                "<br><br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack  + 
                "<br> Invocation: <br> " + this.video ;
    }
    
}
document.getElementById("1").innerHTML=this.phoenix.identite();
}

function Ark1(){
this.ark= {
    name: "Ark",
    pv :7150,
    pm :5640,
    attaque : 380,
    défense : 721,
    Mattaque: 196,
    Mdefense: 205,
    element:"Sacré",
    attack: "Nova",
    img :"<img src='img/ark.png'width='300' height='300'>",
    video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/dys7ymUDov8?ecver=1' frameborder='0' >",
    
    
    identite : function(){
        return this.img +
                "<br><br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack  +
                "<br> Invocation: <br> " + this.video ;
    }
    
}
document.getElementById("1").innerHTML=this.ark.identite();
}
function Golgotha1(){
this.golgotha = {
    name: "Golgotha",
    pv :3246,
    pm :4420,
    attaque : 250,
    défense : 230,
    Mattaque: 250,
    Mdefense: 200,
    element:"Foudre",
    attack: "Feu Purificateur",
    img :"<img src='img/golgotha.png'width='300' height='300'>",
    video:"<iframe width='300' height='250'src='https://www.youtube.com/embed/aMesfWQkE7Y?ecver=1' frameborder='0'>",
    
    identite : function(){
        return this.img +
                "<br><br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack  +
                "<br> Invocation: <br> " + this.video ;
    }
    
}
document.getElementById("1").innerHTML=this.golgotha.identite();
    
}

function Leviathan1(){
    this.leviathan = {
        name: "Leviathan",
        pv :3285,
        pm :5166,
        attaque : 311,
        défense : 230,
        Mattaque: 333,
        Mdefense: 420,
        element:"Eau",
        attack: "Tsunami",
        img :"<img src='img/leviathan.png'width='300' height='300'>",
        video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/EpQdrb2ux7w?ecver=1' frameborder='0' >",
        
        identite : function(){
                return  this.img +
                "<br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack +
                "<br> Invocation: <br> " +this.video ;
    }
}
   
document.getElementById("1").innerHTML=this.leviathan.identite();

}
function Ondine1(){
    this.ondine = {
        name: "Ondine",
        pv :2785,
        pm :3666,
        attaque : 281,
        défense : 190,
        Mattaque: 333,
        Mdefense: 290,
        element:"Eau",
        attack: "Tsunami",
        img :"<img src='img/ondine.png'width='300' height='300'>",
        video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/EPTJ26Nazpc?ecver=1' frameborder='0' >",
        
        identite : function(){
                return  this.img +
                "<br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack +
                "<br> Invocation: <br> " +this.video ;
    }
}
   
document.getElementById("1").innerHTML=this.ondine.identite();

}
function Alexander1(){
    this.alexander = {
        name: "Alexander",
        pv :5625,
        pm :8666,
        attaque : 281,
        défense : 190,
        Mattaque: 333,
        Mdefense: 290,
        element:"Neutre",
        attack: "Dernier Jugement",
        img :"<img src='img/alexander.png'width='300' height='300'>",
        video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/vHS3ZH0OShU?ecver=1' frameborder='0'>",
        
        identite : function(){
                return  this.img +
                "<br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack +
                "<br> Invocation: <br> " +this.video ;
    }
}
   
document.getElementById("1").innerHTML=this.alexander.identite();

}
/////////////////////////////Block 2///////////////
function Bahamut2(){
    this.bahamut = {
        name: "Bahamut",
        pv :4755,
        pm :2866,
        attaque : 450,
        défense : 230,
        Mattaque: 250,
        Mdefense: 200,
        element:"Ténèbre",
        attack: "Auroboros",
        img :"<img src='img/bahamut.png'width='300' height='300'>",
        video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/s6cFDIrfCZY' frameborder='0'>",
        
        identite : function(){
                return  this.img +
                "<br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack +
                "<br> Invocation: <br> " +this.video ;
    }
}
   
document.getElementById("2").innerHTML=this.bahamut.identite();

}

function Shiva2(){
this.shiva = {
    name: "Shiva",
    pv :3650,
    pm :5210,
    attaque : 310,
    défense : 420,
    Mattaque: 320,
    Mdefense: 180,
    element:"Glace",
    attack: "Transcendentale",
    img :"<img src='img/shiva.png'width='200' height='300'>",
    video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/0lEdB-bSufM?ecver=1' frameborder='0'>",
    
    identite : function(){
        return  this.img +
                "<br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack  +
            "<br> Invocation: <br> " +this.video ;
    }
}

document.getElementById("2").innerHTML=this.shiva.identite();
    
}

function Ifrit2(){
this.ifrit = {
    name: "Ifrit",
    pv :5431,
    pm :2140,
    attaque : 410,
    défense : 330,
    Mattaque: 120,
    Mdefense: 190,
    element:"Feu",
    attack: "Divine Comédie",
    img :"<img src='img/ifrit.png'width='300' height='300'>",
    video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/oFtMnj5w9_4?ecver=1' frameborder='0'>",
    
    identite : function(){
        return this.img +
                "<br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack  + 
                "<br> Invocation :<br> " +this.video;
    }
}
document.getElementById("2").innerHTML=this.ifrit.identite();
}

function Nosferatu2(){
this.nosferatu = {
    name: "Nosferatu",
    pv :7150,
    pm :6550,
    attaque : 720,
    défense : 540,
    Mattaque: 110,
    Mdefense: 130,
    element:"Neutre",
    attack: "Messagé Sombre",
    img :"<img src='img/Nosferatu.png'width='300' height='300'>",
    video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/suxQsTVL6sc' frameborder='0'>",
    
    identite : function(){
        return this.img +
                "<br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack  +
                "<br> Invocation: <br>" + this.video ;
    }
}
document.getElementById("2").innerHTML=this.nosferatu.identite();
}

function Odin2(){
this.odin = {
    name: "Odin",
    pv :9150,
    pm :9840,
    attaque : 407,
    défense : 200,
    Mattaque: 750,
    Mdefense: 276,
    element:"Neutre",
    attack: "Zantetsuken",
    img :"<img src='img/odin.png'width='300' height='300'>",
    video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/0aWwSDn_bgY' frameborder='0'>",
    
    identite : function(){
        return this.img +
                "<br><br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack  + 
                "<br> Invocation: <br> " + this.video ;
    }
}
document.getElementById("2").innerHTML=this.odin.identite();
}

function Phoenix2(){
this.phoenix = {
    name: "Phoenix",
    pv :4150,
    pm :340,
    attaque : 180,
    défense : 200,
    Mattaque: 430,
    Mdefense: 610,
    element:"Feu",
    attack: "Terre Brulé",
    img :"<img src='img/phoenix.png'width='300' height='300'>",
    video :"<iframe width='300' height='250' src='https://www.youtube.com/embed/cBl3o3TNAE8?ecver=1' frameborder='0' >",
    
    identite : function(){
        return this.img +
                "<br><br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack  + 
                "<br> Invocation: <br> " + this.video ;
    }
    
}
document.getElementById("2").innerHTML=this.phoenix.identite();
}

function Ark2(){
this.ark= {
    name: "Ark",
    pv :7150,
    pm :5640,
    attaque : 380,
    défense : 721,
    Mattaque: 196,
    Mdefense: 205,
    element:"Sacré",
    attack: "Nova",
    img :"<img src='img/ark.png'width='300' height='300'>",
    video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/dys7ymUDov8?ecver=1' frameborder='0' >",
    
    
    identite : function(){
        return this.img +
                "<br><br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack  +
                "<br> Invocation: <br> " + this.video ;
    }
    
}
document.getElementById("2").innerHTML=this.ark.identite();
}
function Golgotha2(){
this.golgotha = {
    name: "Golgotha",
    pv :3246,
    pm :4420,
    attaque : 250,
    défense : 230,
    Mattaque: 250,
    Mdefense: 200,
    element:"Foudre",
    attack: "Feu Purificateur",
    img :"<img src='img/golgotha.png'width='300' height='300'>",
    video:"<iframe width='300' height='250'src='https://www.youtube.com/embed/aMesfWQkE7Y?ecver=1' frameborder='0'>",
    
    identite : function(){
        return this.img +
                "<br><br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack  +
                "<br> Invocation: <br> " + this.video ;
    }
    
}
document.getElementById("2").innerHTML=this.golgotha.identite();
    
}


function Leviathan2(){
    this.leviathan = {
        name: "Leviathan",
        pv :3285,
        pm :5166,
        attaque : 311,
        défense : 230,
        Mattaque: 333,
        Mdefense: 420,
        element:"Eau",
        attack: "Tsunami",
        img :"<img src='img/leviathan.png'width='300' height='300'>",
        video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/EpQdrb2ux7w?ecver=1' frameborder='0'>",
        
        identite : function(){
                return  this.img +
                "<br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack +
                "<br> Invocation: <br> " +this.video ;
    }
}
   
document.getElementById("2").innerHTML=this.leviathan.identite();

}


function Ondine2(){
    this.ondine = {
        name: "Ondine",
        pv :2785,
        pm :3666,
        attaque : 281,
        défense : 190,
        Mattaque: 333,
        Mdefense: 290,
        element:"Eau",
        attack: "Tsunami",
        img :"<img src='img/ondine.png'width='300' height='300'>",
        video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/EPTJ26Nazpc?ecver=1' frameborder='0'>",
        
        identite : function(){
                return  this.img +
                "<br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack +
                "<br> Invocation: <br> " +this.video ;
    }
}
   
document.getElementById("2").innerHTML=this.ondine.identite();

}


function Alexander2(){
    this.alexander = {
        name: "Alexander",
        pv :5625,
        pm :8666,
        attaque : 281,
        défense : 190,
        Mattaque: 333,
        Mdefense: 290,
        element:"Neutre",
        attack: "Dernier Jugement",
        img :"<img src='img/alexander.png'width='300' height='300'>",
        video:"<iframe width='300' height='250' src='https://www.youtube.com/embed/vHS3ZH0OShU?ecver=1' frameborder='0'>",
        
        identite : function(){
                return  this.img +
                "<br> Nom : " +this.name +
                "<br> PV : " +this.pv +
                "<br> PM : " +this.pm +
                "<br> Attaque : " +this.attaque +
                "<br> Défense: " +this.défense +
                "<br> M.Attaque : " +this.Mattaque+
                "<br> M.Défense: " +this.Mdefense+
                "<br> Element : " +this.element +
                "<br> Ultime:  " + this.attack +
                "<br> Invocation: <br> " +this.video ;
    }
}
   
document.getElementById("2").innerHTML=this.alexander.identite();

}
