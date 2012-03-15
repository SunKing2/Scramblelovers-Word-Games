window.onload = function() {
    var footer = document.getElementById("footer");
    footer.style.color = 'red';
    footer.style.position = 'absolute';
    footer.style.top = '13px';
    if (window.innerHeight) {
      var bodyHeight = window.innerHeight;
      // if it contains a string and doesn't parse, this routine will just end.  it's OK
      var footerTop = (window.innerHeight - 46);
      footer.style.top = footerTop + 'px';
      footer.style.width = (window.innerWidth - 0) + 'px';
    
      var midBottom = document.getElementById("midbottom");
      var midBottomTop = midBottom.style.top;
      var newMidBottomHeight = footerTop - midBottomTop;
      midBottom.style.height = newMidBottomHeight = "px";
    }
};
