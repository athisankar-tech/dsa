import promptSync from 'prompt-sync';

// Initialize the prompt function
const prompt = promptSync();

class ArrayDSA {
    getArrayFromUser(): number[] {
        let arItems: number[] = [];

        const iTotalCount: number = parseInt(prompt('Enter number of elements: '), 0);

        for (let i = 0; i < iTotalCount; i++) {
            const value: number = parseInt(prompt('Enter element '+ (i+1) +': '), 0);
            arItems.push(value);
        }

        return arItems;
    }

    //Print all elements of the array in order
    printAll(arrSlices: number[]) : void{
        console.log("Printed array below : \n");
        for (let index = 0; index < arrSlices.length; index++) {
            console.log(arrSlices[index] + " ");
        }
    }
}

async function main() {    
    // 1. Basic String Input
    const option: string = prompt('Choose Option :  \n 1.Array Traversal \n');
    const objArray = new ArrayDSA();

    switch(option) { 
    case "1": { 
        let arItems = objArray.getArrayFromUser();
        objArray.printAll(arItems);
        break; 
    } 
    case "2": { 
        //statements; 
        break; 
    } 
    default: { 
        console.log("Option not in that list");
        break; 
    } 
    } 
}

main();
