'use strict';

/**
* Vimeo tag
*
* Syntax:
*   {% vimeo video_id %}
*/

function vimeoTag(args, content) {
  const id = args[0];

  return `<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe src="//player.vimeo.com/video/${id}?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>`;
}

module.exports = vimeoTag;
