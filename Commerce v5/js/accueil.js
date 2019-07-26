
window.addEventListener("load", function () {
    console.log("Page entièrement chargée");
   
});

let etatMenu = 0;/*ont declare un etat */
let etat=0;

//menu mobile
//bar de recherche
function openSearch(){

    document.getElementById('bandolang').style.visibility="hidden";
    document.getElementById('searchingbar').style.display="block";

}

//quand ont tape la recherche la bar disparait
let barSearch =document.getElementById('searchText');
barSearch.onsubmit();
// fermeture et ouverture du menu vanillajs 

function openNav1(){

    document.getElementById('navMobile').style.display="block";
    document.getElementById('bandolang').style.visibility = "hidden";
    document.getElementById('searchingbar').style.display = "none";

}
function closeNav1(){
    document.getElementById('navMobile').style.display = "none";
    document.getElementById('bandolang').style.visibility = "visible";
    document.getElementById('searchingbar').style.display = "none";


}



function ouvrirFermer() {
    if (etatMenu == 0) {
        //console.log("ouvrir");
        openNav1();//fonction ouvert
        etatMenu = 1;//1 est affecter a etatMenu
    }
    else {
        //console.log("fermer");
        closeNav1();//fonction fermer
        etatMenu = 0;//0 est affecter a etatMenu
    }
}

function openProduit(){


    document.getElementById('catProduit').style.display="block";
    
    }
    function closeProduit(){
    
    
        document.getElementById('catProduit').style.display="none";
        
        }
    
        function ouvrirFermerProduit() {
            if (etat == 0) {
                //console.log("ouvrir");
                openProduit();//fonction ouvert
                etat = 1;//1 est affecter a etatMenu
            }
            else {
                //console.log("fermer");
                closeProduit();//fonction fermer
                etat = 0;//0 est affecter a etatMenu
            }
        }

        function openProduit(){


document.getElementById('catProduit').style.display="block";

}
function closeProduit(){


    document.getElementById('catProduit').style.display="none";
    
    }

    function ouvrirFermerProduit() {
        if (etat == 0) {
            //console.log("ouvrir");
            openProduit();//fonction ouvert
            etat = 1;//1 est affecter a etatMenu
        }
        else {
            //console.log("fermer");
            closeProduit();//fonction fermer
            etat = 0;//0 est affecter a etatMenu
        }
    }

    function openPropo(){


        document.getElementById('prop').style.display="block";
        
        }
        function closePropo(){
        
        
            document.getElementById('prop').style.display="none";
            
            }
        
            function opencloseApropos() {
                if (etat == 0) {
                    //console.log("ouvrir");
                    openPropo();//fonction ouvert
                    etat = 1;//1 est affecter a etatMenu
                }
                else {
                    //console.log("fermer");
                    closePropo();//fonction fermer
                    etat = 0;//0 est affecter a etatMenu
                }
            }
        
    







