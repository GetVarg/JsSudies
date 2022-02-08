function checkCashRegister(price, cash, cid) {
                let change = cash - price;
                const ref = change;
                let arr = [];
                let value = [
                ["PENNY", 0.01],
                ["NICKEL", 0.05],
                ["DIME", 0.1],
                ["QUARTER", 0.25],
                ["ONE", 1],
                ["FIVE", 5],
                ["TEN", 10],
                ["TWENTY", 20],
                ["ONE HUNDRED", 100]
                ];
                let total = 0;
                for(let k = 0; k < 9; k++){
                  total += cid[k][1];
                  total = Math.round(total * 100)/100;
                }
                if(total == change){
                  return {status: "CLOSED", change: cid};
                }
                let i = 8
                while(i >= 0){
                    if(change >= value[i][1]){
                        let count = 0;
                        while(cid[i][1] > 0 && change >= value[i][1]){
                            change -= value[i][1];
                            change = Math.round(change * 100)/100;
                            cid[i][1] -= value[i][1];
                            cid[i][1] = Math.round(cid[i][1] * 100)/100;
                            count += value[i][1];
                            count = Math.round(count * 100)/100;
                        }
                        arr.push([value[i][0], count]);
                    }
                    i--;
                }
                if(change > 0){
                    return {status: "INSUFFICIENT_FUNDS", change: []};
                } else{
                    return {status: "OPEN", change: arr}
                }
            }

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
