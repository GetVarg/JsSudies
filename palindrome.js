function palindrome(str) {
                    const regex = /[^A-Za-z0-9]/g;
                    let newArr = str.replace(regex, "").toLowerCase();
                    newArr.split('');
                    for(let k = 0; k < newArr[k].length; k++){
                        newArr[k].split('');
                    }
                    for(let i = 0; i < newArr.length; i++){
                        for(let j = 0; j < newArr[i].length; j++){
                            const index_fim = newArr.length - i - 1;
                            const index_char = newArr[index_fim].length - j - 1;
                            if(newArr[i][j] != newArr[index_fim][index_char]){
                                return false;
                            }
                        }
                    }
                    return true;
                }

palindrome("eye");
