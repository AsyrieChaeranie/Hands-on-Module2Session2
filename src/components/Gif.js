import React from "react"; 

const gif = {
    title: 'Nintendo Plotting GIF by Gaming GIFs',
    url: 'https://media4.giphy.com/media/4HrBfVJJveBNS9ytSk/200w.gif?cid=cb3f2bebpuo6jj0g5f9gfibjre2zzbb4yb1cfshtplanlrpw&rid=200w.gif&ct=g',
}
export default function(){
    return(
        <div>
            <h3>title {gif.title}</h3>
            <img src ={gif.url}/>
        </div>
    )
    
  }
