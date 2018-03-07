pointUser= 0
pointOrdi=0
var choix = ""

var ciseaux = "ciseaux"
var feuille = "feuille"
var pierre = "pierre"
var boot = " "
var playeur = document.querySelectorAll("audio")
    

selectElmt= document.getElementById("form");

function joueur ()
{   
    choix = textselectionne = selectElmt.options[selectElmt.selectedIndex].text

    
    var user = choix
    var boot = Math.random(); //valeur aleatoire entre 0 et 1//
    //On traduit ce nombre aleatoire en un choix aleatoire entre pierre, papier, ciseaux//
    if (boot < 0.34) {
        boot = "pierre";
        
        
    }
    else if (boot <= 0.67) {
        boot = "feuille";
        

    }
    else {
        boot = "ciseaux";
        

    }

    if (boot === pierre && choix === feuille || boot === feuille && choix === ciseaux || boot === ciseaux && choix === pierre   ) {

         pointUser ++
             document.getElementById("choixor").innerHTML=boot ; 
             document.getElementById("action").innerHTML= "Vous avais gagner le tour "
            document.getElementById("sj").innerHTML=pointUser; 
            document.getElementById("sb").innerHTML=pointOrdi; 
            document.getElementById("js").style.border="rgb(3, 187, 3);"
           

    
        
      }

      else if (boot === pierre && choix === pierre || boot === feuille && choix === feuille || boot === ciseaux && choix === ciseaux   )
       {
              console.log("égalité ")
              console.log(boot)
             document.getElementById("choixor").innerHTML=boot; 
            document.getElementById("action").innerHTML= "Egalité  "


      }

      else{
          pointOrdi ++
          console.log(boot)
          console.log(pointUser)
            console.log(pointOrdi)
            document.getElementById("choixor").innerHTML=boot ; 
            document.getElementById("action").innerHTML= "Vous avais perdu le tour  "
         document.getElementById("sj").innerHTML=pointUser; 
         document.getElementById("sb").innerHTML=pointOrdi; 
        


      }

      if (pointUser === 3 ){

        document.getElementById("finsh").innerHTML="Vous avais battu un ordinateur "
        pointUser = 0 
        pointOrdi = 0
        document.getElementById("sj").innerHTML=pointUser; 
        document.getElementById("sb").innerHTML=pointOrdi;


      }

      else if (pointOrdi === 3 )  {
          pointOrdi = 0
          pointUser = 0
          document.getElementById("finsh").innerHTML="Vous avais perdu dommage "
          document.getElementById("sj").innerHTML=pointUser; 
          document.getElementById("sb").innerHTML=pointOrdi;


      }

}




      
      




