// This...:
// - shows outlines by default (no JS)
// - when having JS it hide outlines
// - when pressing tab, outlines are visible again
//
// Designers happy, keyboard-navigating users happy

(function(_document,_body,_keyBoardEvent) {
  var className = 'no-outlines';

  // hide outlines by default
  _body.className += ' ' + className;

  // show outlines when using tab
  function onKeyUp(ev) {
    // not TAB
    if (ev.which !== 9) {
      return;
    }

    _body.className = _body.className.replace(className,'');
    _document.removeEventListener(_keyBoardEvent, onKeyUp);
  }

  _document.addEventListener(_keyBoardEvent, onKeyUp);
})(document,document.body,'keydown');
