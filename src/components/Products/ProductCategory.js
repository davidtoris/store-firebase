import React from 'react'

export const ProductCategory = () => {
    return (
        <div className="ps-block--products-of-category">

        {/* <!--=====================================
        Menu subcategory
        ======================================-->   */}

        <div className="ps-block__categories">

            <h3>
                ClothingApparel 
            </h3>

                <ul>
                    <li><a href="#">Best Seller</a></li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Girls</a></li>
                    <li><a href="#">Boys</a></li>
                    <li><a href="#">Baby</a></li>
                    <li><a href="#">Sales Deals</a></li>
                </ul>

                <a className="ps-block__more-link" href="#">View All</a>

        </div>

        {/* <!--=====================================
        Vertical Slider Category
        ======================================-->   */}

        <div className="ps-block__slider">

            <div className="ps-carousel--product-box owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="7000" data-owl-gap="0" data-owl-nav="true" data-owl-dots="true" data-owl-item="1" data-owl-item-xs="1" data-owl-item-sm="1" data-owl-item-md="1" data-owl-item-lg="1" data-owl-duration="500" data-owl-mousedrag="off">

                <a href="#">

                    <img src="img/slider/vertical/clothing-1.jpg" alt="" />

                </a>

                

            </div>

        </div>

        {/* <!--=====================================
        Block Product Box
        ======================================-->   */}

        <div className="ps-block__product-box">
            
            {/* <!--=====================================
            Product Simple
            ======================================-->  */}

            <div className="ps-product ps-product--simple">

                <div className="ps-product__thumbnail">

                    <a href="product-default.html">

                        <img src="img/products/clothing/1.jpg" alt="" />

                    </a>

                    <div className="ps-product__badge">-16%</div>

                </div>

                <div className="ps-product__container">

                    <div className="ps-product__content" data-mh="clothing">

                        <a className="ps-product__title" href="product-default.html">Herschel Leather Duffle Bag In Brown Color</a>

                        <div className="ps-product__rating">

                            <select className="ps-rating" data-read-only="true">

                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>

                            </select>

                            <span>01</span>

                        </div>

                        <p className="ps-product__price sale">$567.99 <del>$670.00 </del></p>

                    </div>

                </div>

            </div> 

            {/* <!--=====================================
            Product Simple
            ======================================-->  */}

            <div className="ps-product ps-product--simple">

                <div className="ps-product__thumbnail">

                    <a href="product-default.html">

                        <img src="img/products/clothing/2.jpg" alt="" /></a>

                    <div className="ps-product__badge out-stock">Out Of Stock</div>

                </div>

                <div className="ps-product__container">

                    <div className="ps-product__content" data-mh="clothing">

                        <a className="ps-product__title" href="product-default.html">Unero Military ClassNameical Backpack</a>
                        
                        <div className="ps-product__rating">

                            <select className="ps-rating" data-read-only="true">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select>
                            <span>01</span>

                        </div>

                        <p className="ps-product__price">$101.99</p>

                    </div>

                </div>

            </div>

            {/* <!--=====================================
            Product Simple
            ======================================-->  */}

            <div className="ps-product ps-product--simple">

                <div className="ps-product__thumbnail">

                    <a href="product-default.html">

                        <img src="img/products/clothing/3.jpg" alt="" /></a>

                    <div className="ps-product__badge">-25%</div>

                </div>

                <div className="ps-product__container">

                    <div className="ps-product__content" data-mh="clothing">

                        <a className="ps-product__title" href="product-default.html">Rayban Rounded Sunglass Brown Color</a>
                        
                        <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select>
                            <span>02</span>
                        </div>

                        <p className="ps-product__price sale">$42.00 <del>$60.00 </del></p>

                    </div>

                </div>

            </div>

            {/* <!--=====================================
            Product Simple
            ======================================-->  */}

            <div className="ps-product ps-product--simple">

                <div className="ps-product__thumbnail">

                    <a href="product-default.html">

                        <img src="img/products/clothing/4.jpg" alt="" />

                    </a>

                    <div className="ps-product__badge out-stock">Out Of Stock</div>

                </div>

                <div className="ps-product__container">

                    <div className="ps-product__content" data-mh="clothing">

                        <a className="ps-product__title" href="product-default.html">Sleeve Linen Blend Caro Pane Shirt</a>

                        <div className="ps-product__rating">

                            <select className="ps-rating" data-read-only="true">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select>
                            <span>01</span>

                        </div>

                        <p className="ps-product__price">$320.00</p>

                    </div>

                </div>

            </div>

            {/* <!--=====================================
            Product Simple
            ======================================-->  */}

            <div className="ps-product ps-product--simple">

                <div className="ps-product__thumbnail">

                    <a href="product-default.html">

                        <img src="img/products/clothing/5.jpg" alt="" /></a>

                    <div className="ps-product__badge out-stock">Out Of Stock</div>   

                </div>

                <div className="ps-product__container">

                    <div className="ps-product__content" data-mh="clothing">

                        <a className="ps-product__title" href="product-default.html">Men’s Sports Runnning Swim Board Shorts</a>
                        
                        <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select><span>01</span>
                        </div>

                        <p className="ps-product__price">$85.00</p>

                    </div>

                </div>

            </div>

            {/* <!--=====================================
            Product Simple
            ======================================-->  */}

            <div className="ps-product ps-product--simple">

                <div className="ps-product__thumbnail">

                    <a href="product-default.html">

                        <img src="img/products/clothing/6.jpg" alt="" /></a>

                    <div className="ps-product__badge out-stock">Out Of Stock</div>

                </div>

                <div className="ps-product__container">

                    <div className="ps-product__content" data-mh="clothing">

                        <a className="ps-product__title" href="product-default.html">Paul’s Smith Sneaker InWhite Color</a>

                        <div className="ps-product__rating">
                            <select className="ps-rating" data-read-only="true">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select>
                            <span>01</span>
                        </div>

                        <p className="ps-product__price">$92.00</p>

                    </div>

                </div>

            </div>

        </div>
      
    </div>
    )
}
