const SvgComp = ()=>{

    return(
<figure><svg xmlns="http://www.w3.org/2000/svg" width="50" height="37" viewBox="0 0 50 37" className="logo-with-gradient-phone">
    <defs>
      <linearGradient id="a" x1="0%" y1="50%" y2="50%">
        <stop offset="0%" stop-color="#EC8523"></stop>
        <stop offset="35%" stop-color="#ED7745"></stop>
        <stop offset="37%" stop-color="#ED7545"></stop>
        <stop offset="76%" stop-color="#E95D47"></stop>
        <stop offset="100%" stop-color="#E85448"></stop>
      </linearGradient>
    </defs>
    <polygon fill="url(#a)" fill-rule="evenodd" points="0 0 0 36.201 33.604 36.201 33.604 31.948 4.359 31.948 4.359 4.253 45.641 4.253 45.641 36.201 50 36.201 50 0"></polygon>
    </svg></figure>
    )
}
export default SvgComp;