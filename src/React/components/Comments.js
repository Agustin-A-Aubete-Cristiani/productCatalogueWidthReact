import React, {Component} from 'react';

window.gc_params = {
graphcomment_id: 'test-web',

// if your website has a fixed header, indicate it's height in pixels
fixed_header_height: 42,
};

function graphComment() {
  console.log("entra")
  var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
  gc.src = 'https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8);
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
};

class Comments extends Component{
  render() {
    return (
      <>
      <div id="graphcomment"></div>
      {graphComment()}
      </>
    )
  }
}


// ** EXPORTS

export default Comments;