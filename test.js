
let field = [];
let res = 10;
let cols, rows; 

function setup() {
  createCanvas(600, 600); // Fonction en JavaScript qui permet de créer un fenetre a afficher avec la taille en parametre
  cols = width / res;   // le nombre de colones de la fentre(matrice) = largeur /la resolution
  rows = height / res;  // le nombre de ligne de la fentre(matrice) = hauteur / la resolution
  for (let i = 0; i < cols; i++) {  // i permet de parcourire les colones de la matrice
   let k = []; // declaration d'un noveau tableau k (2 DIMENSIONS)
    for (let j = 0; j < rows; j++) { // J permet de parcourire les LIGNES de la matrice
      k.push(0);   // utiliser push afin d'ajouter de nouveaux éléments à la fin du tableau et renvoyer la nouvelle longueur
    }
    field.push(k);
  }
}

function drawLine(v1, v2) {
  line(v1.x, v1.y, v2.x, v2.y); // fonction qui permet de dessiner les ligne en donnant les vecteurs en parametres 
}

function draw() { // fonction qui permet de dessiner les lignes en utilisant des fonctions
  background(0);  // couleur du fond en noir 
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      //field[i][j] =sqrt( (i-res/2)^2 + (j-res/2)^2) // utilisation de la fonction
      //field[i][j] =sqrt((i-res*2) + (j-res*4))
      //field[i][j] =abs((i-res*2) + abs(j-res*2))
      field[i][j] =Math.sin((i-res*2^2) + Math.sin(j-res*2^2))
     
    }
  }


  for (let i = 0; i < cols-1; i++) {
    for (let j = 0; j < rows-1; j++) {
      let x = i * res;
      let y = j * res;
      let a = createVector(x + res * 0.5, y);
      let b = createVector(x + res, y + res * 0.5);
      let c = createVector(x + res * 0.5, y + res);
      let d = createVector(x, y + res * 0.5);
      let state = getState(ceil(field[i][j]), ceil(field[i+1][j]), 
        ceil(field[i+1][j+1]), ceil(field[i][j+1])); //génerer les 4 sommets des carées
      stroke(255); // la couleur des lignes
      strokeWeight(4); // épaisseur des lignes
      switch (state) { // generer les case de [1..14]
      case 1:  
        drawLine(c, d);
        break;
      case 2:  
        drawLine(b, c);
        break;
      case 3:  
        drawLine(b, d);
        break;
      case 4:  
        drawLine(a, b);
        break;
      case 5:  
        drawLine(a, d);
        drawLine(b, c);
        break;
      case 6:  
        drawLine(a, c);
        break;
      case 7:  
        drawLine(a, d);
        break;
      case 8:  
        drawLine(a, d);
        break;
      case 9:  
        drawLine(a, c);
        break;
      case 10: 
        drawLine(a, b);
        drawLine(c, d);
        break;
      case 11: 
        drawLine(a, b);
        break;
      case 12: 
        drawLine(b, d);
        break;
      case 13: 
        drawLine(b, c);
        break;
      case 14: 
        drawLine(c, d);
        break;
      }
    }
  }
}

function getState(a, b, c, d) { // fonction qui permet de Créer un index en stockant l’état binaire de chaque sommet dans un bit
  return a * 8 + b * 4  + c * 2 + d * 1;
}