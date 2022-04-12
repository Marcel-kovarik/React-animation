
import { swap } from './Hilfsunktionen'
// import swap funktionen aus Hilfsfunktionen
export const test = () => {
    const array = [6, 4, 3, 9, 1]; // array ist call by reference
    Bubblesort(array)
};


/** Forlers Vorlersung 28.12.2020
 * 
 * BubbleSort Algorithm(A[]):
 * m <- |A| -2                  // Zuweisung mit länge Abziehen 2
 * for i in 0..m:               // WiederholungsFaktor wie oft man durch den Array laufen soll (legt Oberegrenze fest)       
 *  for j in 0..m-i:            // Zeiger wo er sich aktuell befindet und darf nur maximal m-i laufen
 *      if A[j]>A[j+1]:         // Falls das linkere ELemente größer ist als das rechte dann tauschen
 *         A[j] <-> A[j+1]      // tauschen umsetzen  
 * 
 */
export const Bubblesort = (A) => {
    let m = A.length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m - i; j++) {
            if (A[j] > A[j + 1]) {
                console.log(A)
                swap(A, j, j + 1)
                console.log(A)
            }
        }
    }
}


