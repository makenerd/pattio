import React, { useEffect } from 'react';
import $ from 'jquery';

function Subtitle(props) {

    useEffect(() => {
  
      function autoType(elementClass, typingSpeed){
        var thhis = $(elementClass);
        thhis.css({
          "position": "relative",
          "display": "inline-block"
        });
        thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
        thhis = thhis.find(".text-js");
        var text = thhis.text().trim().split('');
        var amntOfChars = text.length;
        var newString = "";
        thhis.text("|");
        setTimeout(function(){
          thhis.css("opacity",1);
          thhis.prev().removeAttr("style");
          thhis.text("");
          for(var i = 0; i < amntOfChars; i++){
            (function(i,char){
              setTimeout(function() {        
                newString += char;
                thhis.text(newString);
              },i*typingSpeed);
            })(i+1,text[i]);
          }
        },1500);
      }
      setTimeout(autoType(".type-js",100), 500);
    },[props.children]);
  
    return (
      <div className='Subtitle'>
        <div className="type-js headline">
          <h1 className="text-js">{props.children}</h1> 
        </div>
      </div>
    );
  }

  export default Subtitle;