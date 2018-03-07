pointUser= 0
pointOrdi=0
var choix = ""

var ciseaux = "ciseaux"
var feuille = "feuille"
var pierre = "pierre"
var boot = " "
var playeur = document.querySelectorAll("audio")

vieJoueur= 4;
vieOrdinateur= 4; 



selectElmt= document.getElementById("form");


function change (){
    document.getElementById("off").style.display="none"
    document.getElementById("game").style.display="block"
}

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
            vieOrdinateur --    
            vie ()
           

    
        
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
         vieJoueur --
         vie()
        


      }

      if (pointUser === 4 ){

        document.getElementById("finsh").innerHTML="Vous avais battu   Skynet le monde et en sécurité   "
        pointUser = 0 
        pointOrdi = 0
        document.getElementById("sj").innerHTML=pointUser; 
        document.getElementById("sb").innerHTML=pointOrdi;
        vieJoueur = 4;
        vieOrdinateur= 4; 


      }

      else if (pointOrdi === 4 )  {
          pointOrdi = 0
          pointUser = 0
          document.getElementById("finsh").innerHTML="Skynet Vous ça vaincu  "
          document.getElementById("sj").innerHTML=pointUser; 
          document.getElementById("sb").innerHTML=pointOrdi;
          vieJoueur = 4;
          vieOrdinateur= 4; 
  


      }

}






// Variables vie ! 

    



function vie ()

{
                if (vieJoueur == 3){
                      document.getElementById("vie4").style.display="none"
                      document.getElementById("vie3").style.backgroundColor="orange"
                    document.getElementById("vie2").style.backgroundColor="orange"
                    document.getElementById("vie1").style.backgroundColor="orange"


                    
                }

               else if (vieJoueur === 2){
                    document.getElementById("vie3").style.display="none"
                  document.getElementById("vie2").style.backgroundColor="red"
                  document.getElementById("vie1").style.backgroundColor="red"


                  
              }

              else if (vieJoueur === 1){
              document.getElementById("vie2").style.display="none"
              document.getElementById("vie1").style.backgroundColor="red"


              
          }

          else if (vieJoueur === 0){
            document.getElementById("vie1").style.display="none"


            
        }


        if (vieOrdinateur == 3){
            document.getElementById("vies4").style.display="none"
            document.getElementById("vies3").style.backgroundColor="orange"
          document.getElementById("vies2").style.backgroundColor="orange"
          document.getElementById("vies1").style.backgroundColor="orange"


          
      }

     else if (vieOrdinateur === 2){
          document.getElementById("vies3").style.display="none"
        document.getElementById("vies2").style.backgroundColor="red"
        document.getElementById("vies1").style.backgroundColor="red"


        
    }

    else if (vieOrdinateur === 1){
    document.getElementById("vies2").style.display="none"
    document.getElementById("vies1").style.backgroundColor="green"


    
}

else if (vieOrdinateur === 0){
  document.getElementById("vie1").style.backgroundColor="none"


  
}

else if (vieJoueur === 4){
    document.getElementById("vie4").style.display="block"
    document.getElementById("vie3").style.display="block"
  document.getElementById("vie2").style.display="block"
  document.getElementById("vie1").style.display="block"


  
}

else if (vieOrdinateur === 4){
    document.getElementById("vies4").style.display="block"
    document.getElementById("vies3").style.display="block"
  document.getElementById("vies2").style.display="block"
  document.getElementById("vies1").style.display="block"


  
}



}
      
      




