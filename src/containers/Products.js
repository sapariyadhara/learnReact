import React, { Component } from 'react';
import { Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle } from 'reactstrap';


const myData = [
    {
        id: "GGOEAFKA087499",
        name: "Android Small Removable Sticker Sheet",
        description: "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
        features: "8 Android stickers n White colored sticker sheet",
        price: "2.99",
        keywords: "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
        url: "https://loremflickr.com/320/240  ",
        category: "accessories",
        subcategory: "accessories"
    },
    {
        id: "GGOEAFKA087599",
        name: "Android Large Removable Sticker Sheet",
        description: "Show your quirky side by placing these fun Android stickers on your personal belongings.",
        features: "Android StickersnWhite Colored Sticker Sheet",
        price: "2.99",
        keywords: "Android Large Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, large sticker sheet, android large sticker sheets, Android Sheet",
        url: "https://loremflickr.com/320/240&quot",
        category: "accessories",
        subcategory: "accessories"
    },
    {
        id: "GGOEGEBK094499",
        name: "Google Bot",
        description: "This Google Bot can hold multiple poses making it a fun toy for all. Fold the Google Bot back up into a perfect cube when you are done playing.",
        features: "Made of wood n 2.5 x 2.5 inch cuben6.75 inch tall n Recommended for Ages 3+",
        price: "9.99",
        keywords: "Google Bot, google bot, bots, natural bots, wood bot, google wood bot",
        url: "https://loremflickr.com/320/240&quot",
        category: "accessories",
        subcategory: "accessories"
    },
    {
        id: "GGOEGFKA086699",
        name: "Google Emoji Sticker Pack",
        description: "Who doesn't use emojis? Decorate your space with your current mood!",
        features: "Pack contains two sticker sheets n Each Sheet has different emojis n Decal dimensions should fit in a maximum sheet size of 12 3/4 x 17 1/2 inch.",
        price: "4.99",
        keywords: "Google Emoji Sticker Pack, Google sticker pack, emoji sticker pack, google emoji, stickers, pack of sticker, pack of emoji stickers",
        url: " https://loremflickr.com/320/240&quot",
        category: "accessories",
        subcategory: "accessories"
    },
    {
        id: "GGOEWCKQ085457",
        name: "Waze Pack of 9 Decal Set",
        description: "Can't decide which Waze decal to get? We have made that decision easier for you! Now you can purchase a pack of nine Waze Mood Decals!",
        features: "<p>Pack of 9 includes:n3 Waze Mood Happy decals n 3 Waze Mood Original decals n 3 Waze Mood Ninja decals",
        price: "16.99",
        keywords: "Waze Pack of 9 Decal Set, decals pack, packs of 9, Waze Packs, Waze Decals, waze, Waze",
        url: " https://loremflickr.com/320/240&quot",
        category: "accessories",
        subcategory: "accessories"
    },
    {
        id: "GGOEGHPB071610",
        name: "Google Twill Cap",
        description: "Classic urban styling distinguishes this Google cap. Retains its shape, even when not being worn.",
        features: "Heavy weight brushed twill n Adjustable velcro closuren One size fits all</p>",
        price: "10.99",
        keywords: "Google Twill Cap, Google Cap, Google Twill Caps, Google Twill, google cap, google caps, google twill, google twill black cap, google black caps, google caps, black caps, Google Caps",
        url: " https://loremflickr.com/320/240&quot",
        category: "apparel",
        subcategory: "apparel"
    },
    {
        id: "GGOEGHPJ094299",
        name: "Google Fold-over Beanie Grey",
        description: "Keep you ears warm while enjoying a cold winter day with this Google Fold-over Beanie.",
        features: "<p>100% acrylic</p>\n<p>One size fits all</p>",
        price: "9.99",
        keywords: "Google Fold-over Beanie Grey, gray beanie, grey beanie, Google Beanies, Fold over grey, Google Beanie Grey, Google headgear",
        url: " https://loremflickr.com/320/240&quot",
        category: "apparel",
        subcategory: "apparel"
    },
    {
        id: "GGOEGHPJ094399",
        name: "Google Pom Beanie Charcoal",
        description: "Stay stylish and warm this winter season with this Google Pom Beanie.",
        features: "<p>Thick knit texture outside</p>\n<p>Soft plush inside</p>\n<p>Faux fur pom on top</p>",
        price: "19.99",
        keywords: "Google Pom Beanie Charcoal, pom beanie, charcoal pom beanies, Google Beanies, Pom Beanies, charcoal Google pom, beanies, headgear",
        url: " https://loremflickr.com/320/240&quot",
        category: "apparel",
        subcategory: "apparel"
    },
    {
        id: "GGOEWXXX0827",
        name: "Waze Women's Short Sleeve Tee",
        description: "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
        features: "<p>Jersey knit</p>\n<p>37.5% cotton, 50% polyester, 12.5% rayon</p>\n<p>Made in the USA</p>",
        price: "18.99",
        keywords: "Waze Women's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Women's Tees, Waze Women's tee, waze ladies tees, waze ladies tee, waze short sleeve tees, waze short sleeve tee",
        url: " https://loremflickr.com/320/240&quot",
        category: "apparel",
        subcategory: "apparel"
    },
    {
        id: "GGOEWXXX0828",
        name: "Waze Men's Short Sleeve Tee",
        description: "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
        features: "<p>Jersey knit</p>\n<p>37.5% cotton, 50% polyester, 12.5% rayon</p>\n<p>Made in the USA</p>",
        price: "18.99",
        keywords: "Waze Men's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Men's Tees, Waze Men's tee, waze mens tees, waze mens tee, waze short sleeve tees, waze short sleeve tee",
        url: " https://loremflickr.com/320/240&quot",
        category: "apparel",
        subcategory: "apparel"
    },
    {
        id: "GGOEGBRJ037399",
        name: "Google Rucksack",
        description: "Choose to carry your belongings and presentations to your next meeting with the Google Mistral Rucksack!",
        features: "<p>Size: 13.5 x 6.5 x 17.5</p>\n<p>Ergonomic padded shoulder straps</p>\n<p>Large main compartment with internal laptop compartment</p>\n<p>Easy Snap and Adjustable straps for main compartment access</p>",
        price: "79.99",
        keywords: "Mistral Rucksack, Mistral backpack, Mistral Backpack, backpack, bags, bag, Backpack, backpacks, packs, office gear, Bag, Bags, Google Backpack, google backpack, g, google",
        url: " https://loremflickr.com/320/240&quot",
        category: "bags",
        subcategory: "bags"
    },
    {
        id: "GGOEGDHJ087399",
        name: "Google Rolltop Backpack Blue",
        description: "This stylish Google rolltop backpack will help keep all of your favorite items organized and together while you're on the move.",
        features: "<p>Size: 12 inches wide x 18.5 inches height x 5.3 inches depth</p>\n<p>TPU Liner</p>\n<p>Internal Organizer for Pens, Phones and Other Small Items</p>\n<p>Large Main Compartment</p>\n<p>Flap Closure for Quick Access or Roll-Top for Expandable Volume and Weather Protection</p>",
        price: "149.99",
        keywords: "Google Rolltop Backpack Blue, google backpack, google blue backpack, blue rolltop, Google rolltop, Blue Backpack, backpack, rolltop",
        url: " https://loremflickr.com/320/240&quot",
        category: "bags",
        subcategory: "bags"
    },
    {
        id: "GGOEADHB085999",
        name: "Android Trace Bottle Black",
        description: "Stay hydrated throughout the day with this Android Trace Bottle. 17 oz.",
        features: "<p>17 oz. double wall thermal bottle</p>\n<p>Stainless steel</p>\n<p>Threaded stainless steel insulated lid</p>\n<p>Copper vacuum insulation</p>",
        price: "23.99",
        keywords: "Android Black Force 17 oz Bottle, android bottles, android black bottle, android 17 oz bottle, android black force bottle, android 17 oz Android Black Force Bottle, Android Trace Bottle Black",
        url: " https://loremflickr.com/320/240&quot",
        category: "drinkware",
        subcategory: "drinkware"
    },
    {
        id: "GGOEADHB086299",
        name: "Android Trace Mug Black",
        description: "Start your day off right with that perfect cup of coffee using this Android Trace Mug Black.",
        features: "<p>12 oz. stoneware</p>\n<p>Matte finish</p>",
        price: "9.99",
        keywords: "Android Black C-Handle Mug, android mugs, black android mug, c handle mug, android c handle,Android Trace Mug Black,",
        url: " https://loremflickr.com/320/240&quot",
        category: "drinkware",
        subcategory: "drinkware"
    }
]
class Products extends Component {

    render() {
        return (
            <div>
                {/* <p> Name : {this.state.name} </p>
                <p> Description : {this.state.description} </p>
                <p> Features : {this.state.features} </p>
                <p> Price : {this.state.price} </p>
                <p> Keywords : {this.state.keywords} </p>
                <img src="https://loremflickr.com/320/240"></img>
                <p> Category : {this.state.category} </p>
                <p> Subcategory : {this.state.subcategory} </p>  */}

                {
                    myData.map((v) => {
                       return(
                        <Card
                        style={{
                            width: '18rem'
                        }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                  {v.name} 
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                 Description : {v.description} 
                            </CardSubtitle>
                        </CardBody>
                        <img
                            alt="Card cap"
                            src="https://loremflickr.com/320/240"
                            width="100%"
                        />
                        <CardBody>
                            <CardText>
                             Price : {v.price} 
                                
                            </CardText>
                            <CardLink href="#">
                             category :  {v.category} 
                            </CardLink>
                            <CardLink href="#">
                                {v.subcategory}
                            </CardLink>
                        </CardBody>
                    </Card>
                       )
                    })
                }

                {/* <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            <p> Name : {this.state.name} </p>
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            <p> Description : {this.state.description} </p>
                        </CardSubtitle>
                    </CardBody>
                    <img
                        alt="Card cap"
                        src="https://loremflickr.com/320/240"
                        width="100%"
                    />
                    <CardBody>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card‘s content.
                        </CardText>
                        <CardLink href="#">
                            Card Link
                        </CardLink>
                        <CardLink href="#">
                            Another Link
                        </CardLink>
                    </CardBody>
                </Card> */}

            </div>

        );
    }
}

export default Products;