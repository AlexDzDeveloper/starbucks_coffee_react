import './header.css';

function Header() {
	return (<>
		<header>
			<div className="container">
				<div className="header__row">
					<div className="logo">StarBucks</div>
					<div className="burger">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="links">
						<ul>
							<li><a href="#!">Home</a></li>
							<li><a href="#!">Select</a></li>
							<li><a href="#!">Shop</a></li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	</>);
}

export default Header;