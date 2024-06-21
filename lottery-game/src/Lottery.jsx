import { useState } from "react"
// eslint-disable-next-line react/prop-types
export default function Lottery({winSum, ticketSize}){

    function numSum(arr){
        let sum=0;
        arr.forEach(n => {
           sum+=n;
        });
        return sum;
    }

    function genRand(){
        return Math.floor(Math.random()*10)
    }

    function genRandArr(size){
        let arr=[];
        for(let i=0;i<size;i++){
            arr.push(genRand())
        }
        return arr;
    }

    let [num, setNum] = useState(genRandArr(ticketSize));
    function randomNumGen(){setNum(genRandArr(ticketSize))}
    
    return(
        <div>
            {(numSum(num)=== winSum)? <h2>Lottery Congratulations, You Won!</h2>: <h2>Lottery</h2>}
            <p>Lottery Ticket = {num[0]}{num[1]}{num[2]}</p>
            <button onClick={randomNumGen}>Get New Ticket</button>
        </div>
    )
}