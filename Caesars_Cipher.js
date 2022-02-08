function rot13(str){
                let newArr = [];
                for(let i = 0; i < str.length; i++){
                    newArr.push(str.charCodeAt(i));
                }

                let arr = "";
                for(let k = 0; k < str.length; k++){
                    let index;
                    if(newArr[k] >= 65 && newArr[k] <= 90){
                        newArr[k] = newArr[k] - 13;
                        if(newArr[k] < 65){
                            index = 90 + (newArr[k] - 65) + 1;
                        }else{
                            index = newArr[k];
                        }

                        arr += String.fromCharCode(index);
                    }else if(newArr[k] == 32){
                        arr += " ";
                    }else{
                        arr += String.fromCharCode(newArr[k]);
                    }
                }
                return arr;
            }


rot13("SERR PBQR PNZC");
