let word="the quick brown fox jumps overs the lazy dog"
var words=word.split(" ")
let max=0
let wordds=[]
for (let i of words){
    if(i.length>max){
        max=i.length;
        wordds.pop()
        wordds.push(i)
    }
   
}
console.log(wordds)