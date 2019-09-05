import './loader.scss';
import React from 'react';
// //<div class="lds-css ng-scope"><div style="width:100%;height:100%" class="lds-pacman"><div><div></div><div></div><div></div></div><div><div></div><div></div></div></div>

// export const WithLoader = ( showLoader , props ) => {
//         if( showLoader === true) {
//             return (
//               <div className="lds-css ng-scope">
//                 <div
//                   style={{'width':'100%','height':'100%'}}
//                   className="lds-pacman"
//                 >
//                 </div>
//                </div>
//             );
//         }
//         else
//         {
//             return <h2>Hello {props.children} </h2>
            
//         //    return props.children;
//         }
    
//     // return (props) =>{
//     //     if( showLoader )
//     //     {
//     //         return(
//     //         <div className="lds-css ng-scope">
//     //             <div style="width:100%;height:100%" class="lds-pacman">
//     //             </div>
//     //         </div>
//     //         );
//     //     }   
//     //     else
//     //     {
            
//     //     }   
//     // }
// }

export const WithLoader = ( props ) => {
    if(props.showLoader === true) 
    {
        return (
          <div className="lds-css ng-scope">
            <div
              style={{ width: "100%", height: "100%" }}
              className="lds-pacman"
            >
              <div>
                <div />
                <div />
                <div />
              </div>
              <div class="">
                <div class="" />
                <div />
              </div>
            </div>
          </div>
        );
    }
    else
    {
        return props.children;
    }
}