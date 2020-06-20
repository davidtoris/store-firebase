import React from 'react'

export const HeaderTop = () => {
    return (
        <div className="header__top">

            <div className="container">

            	{/* <!--=====================================
				Social 
				======================================--> */}

                <div className="header__left">
                    <ul className="d-flex justify-content-center">
						<li><i className="fab fa-facebook-f mr-4"></i></li>
						<li><i className="fab fa-instagram mr-4"></i></li>					
						<li><i className="fab fa-twitter mr-4"></i></li>
						<li><i className="fab fa-youtube mr-4"></i></li>
					</ul>
                </div>

                {/* <!--=====================================
				Contact & lenguage 
				======================================--> */}

                <div className="header__right">
                    <ul className="header__top-links"> 
                        <li><a href="#">Sell on MarketPlace</a></li>
                        <li><a href="#">Store List</a></li>
                    	<li><i className="icon-telephone"></i> Hotline:<strong> 1-800-234-5678</strong></li>                     
                        <li>
                            <div className="ps-dropdown language"><a href="#"><img src="img/template/en.png" alt="" />English</a>
                                <ul className="ps-dropdown-menu">
                                    <li><a href="#"><img src="img/template/es.png" alt=""/> Spanish</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            {/* <!-- End Container --> */}

        </div>
        
    )
}
