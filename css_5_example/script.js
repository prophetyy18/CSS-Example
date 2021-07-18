document.addEventListener('mousemove',()=>{ document.getElementById('eyes').style.left=`${(window.event.clientX / 80)+20}px`
  document.getElementById('eyes').style.top=`${(window.event.clientY / 50)+27}px`
  document.getElementById('eyes2').style.left=`${(window.event.clientX / 80)+20}px`
  document.getElementById('eyes2').style.top=`${(window.event.clientY / 50)+27}px`
})
