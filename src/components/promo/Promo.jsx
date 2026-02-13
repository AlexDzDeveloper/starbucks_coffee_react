import './promo.scss';
import main from './../../image/promo.png';
import heart from './../../image/proffer/heart.png';
import rocket from './../../image/proffer/rocket.png';
import money from './../../image/proffer/money.png';

function Promo() {
	return (<>
		<div className="promo">
			<div className="container">
				<div className="promo__block-top">
					<div className="promo__prev">
						<h2 className="header">New Cafe <br/>by <span>StarBucks</span></h2>
						<p className="descr">Have time to buy the most harmonious drinks in the <br/> new Starbucks coffee and don't forget about the discount!</p>
						<div className="promo__btns">
							<button className="btn btn-active select">Select a coffee </button>
							<button className="btn more">More</button>
						</div>
						<div className="promo__indicators">
							<div className="promo__indicators-block">
								<p className="number">9k</p>
								<span>Premium Users</span>
							</div>
							<div className="promo__indicators-block">
								<p className="number">2k</p>
								<span>Happy Customer</span>
							</div>
							<div className="promo__indicators-block">
								<p className="number">28</p>
								<span>Awards Winning</span>
							</div>
						</div>
					</div>
					<div className="promo__img">
						<img src={main} alt="promo" />
					</div>
				</div>
				<div className="promo__block-bottom">
					<div className="promo__proffer">
						<div className="promo__proffer-img">
							<img src={heart} alt="heart" />
						</div>
						<h3 className="promo__proofer-header">Tasty</h3>
						<p className="promo__proofer-text">We have the m ost delicious coffee</p>
					</div>
					<div className="promo__proffer">
						<div className="promo__proffer-img">
							<img src={rocket} alt="rocket" />
						</div>
						<h3 className="promo__proofer-header">Fast</h3>
						<p className="promo__proofer-text">Our cafe will serve you quickly</p>
					</div>
					<div className="promo__proffer">
						<div className="promo__proffer-img">
							<img src={money} alt="money" />
						</div>
						<h3 className="promo__proofer-header">Available</h3>
						<p className="promo__proofer-text">Cafe will serveat the most pleasant prices</p>
					</div>
				</div>
			</div>
		</div>
	</>);
}

export default Promo;