import logo from '~/img/logo.png';



export default function Header() {
	  function toggleMenu(){
		let elm: any = document.querySelector("#menu")
		if (window.getComputedStyle(elm).display === "none"){
			elm.classList.remove("hidden")
			elm.classList.add("max-lg:animate-slide")
			document.body.classList.add("overflow-hidden")
		}
		else{
			elm.classList.add("hidden")
			document.body.classList.remove("overflow-hidden")
		}
		let pos_menu: any = document.querySelector("#menu a")
		// pos_menu.addEventListener("onclick", function(){	
		// })
	  }
	  function posMenu(){
		let elm: any = document.querySelector("#menu")
		elm.classList.add("hidden")
		document.body.classList.remove("overflow-hidden")
	  }
      return (
        <header>
		<nav className="z-10 flex items-center justify-between p-5 lg:px-8">
			<a href="/">
				<span className="txt">Modern UI</span>
				{/* <Image src="img/logo.png" width="160px" height="auto" alt="Modern UI" /> */}
				<img src={logo} className="rounded-md" width="160px"></img>
			</a>
			<div className="select-none lg:hidden" onClick={toggleMenu}>Menu</div>
			<div id="menu" className="hidden fixed z-10 right-0 bg-white w-full h-full max-lg:top-[-700px] lg:bg-unset lg:w-max lg:h-0 lg:static lg:flex lg:gap-x-12">
				<a href="/#services" onClick={posMenu} className="text-sm font-semibold leading-6 axu">Services</a>
				<a href="/#advantages" onClick={posMenu} className="text-sm font-semibold leading-6 axu">Advantages</a>
				<a href="/#defence" onClick={posMenu} className="text-sm font-semibold leading-6 axu">Defence</a>
				<a href="/contact" onClick={posMenu} className="text-sm font-semibold leading-6 axu">Contact</a>
			</div>
		</nav>
	</header>
    );   
}