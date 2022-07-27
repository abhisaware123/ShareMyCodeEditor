import React from "react";
import codemirror from 'codemirror'
// import 'codemirror/mode/javascript/javascript';

const Editor = () => {

  useEffect(() => {
    
    async function init( ) {
      
      codemirror.fromTextArea(document.getElementById("realtimeEditor"),{

        mode:{name:'javascript',json:true}
      });
    }

    return () => {
      
    }
  }, [])
  
  return <textarea id="realtimeEditor"></textarea>;
};

export default Editor;
