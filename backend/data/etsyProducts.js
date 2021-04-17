const products = [
    {
      name: "Airpods Wireless Bluetooth Headphones",
      image: "/images/airpods.jpg",
      description:
        "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
      brand: "Apple",
      category: "Electronics",
      price: 89.99,
      countInStock: 10,
      reviews: [
        {
            "name": "Kelli Dean",
            "date": "28 Jan, 2021",
            "rating": "5",
            "description": "Obsessed!!! This is exactly what I was hoping for! It’s dainty and beautiful! I love it and would definitely order from Kitty again! Shipping was fast and she was ever so pleasant and kind! Not to mention the packaging it came in is compostable! Amazing!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Kirsten Korolenko",
            "date": "17 Oct, 2020",
            "rating": "5",
            "description": "This necklace exceeded my expectations. It is absolutely beautiful and is exactly what I was looking for. It’s delicate, simple, and classy. Highly recommend! I purchased the 14/15 inch, and I have it on its tightest clasp. There is an additional 2 inches that you can extend it to so it’s a looser fit!",
            "profileImg": "https://i.etsystatic.com/iusa/1f142f/36644105/iusa_75x75.36644105_91zi.jpg?version=0"
        },
        {
            "name": "Renee Legault",
            "date": "25 Apr, 2020",
            "rating": "5",
            "description": "Love this piece! Great quality, very dainty but sturdy (my 10 month old has already pulled on it many times and it hasn't snapped! Haha) \nAlso love the eco packaging and complimentary bookmark! Will definitely be ordering more and sharing with friends!\nThanks Kitty!",
            "profileImg": "https://i.etsystatic.com/iap/e0700f/2327600925/iap_300x300.2327600925_jt9qyvzr.jpg?version=0"
        },
        {
            "name": "Willow Hanson",
            "date": "11 May, 2020",
            "rating": "5",
            "description": "This necklace is beautiful, and Kitty is incredibly proactive when it comes to customer service. I look forward to purchasing from her again in the future!",
            "profileImg": "https://i.etsystatic.com/iap/96933f/2306437266/iap_300x300.2306437266_lq5l90x1.jpg?version=0"
        },
        {
            "name": "Leigh Disher",
            "date": "03 Aug, 2020",
            "rating": "5",
            "description": "It’s absolutely perfect and exactly what I was looking for. Perfect length and doesn’t tangle with my other necklaces!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "staceyphilipp",
            "date": "26 Mar, 2021",
            "rating": "5",
            "description": "I had very high expectations for this necklace after reading so many wonderful reviews. It definitely lived up to the hype! Really well made, dainty, and exactly what I have been searching for. 100% recommend.",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Trudy Gritsch",
            "date": "08 May, 2020",
            "rating": "5",
            "description": "Really lovely necklace, I wear it almost daily. Layers well with other necklaces. It does get a bit twisted up, but I don't think there is a way to avoid that when you have two necklaces connected. I got the 14/15 size and that seems just right for me! There is an extender in the back, but you can only put it to the shortest or longest length. In all honesty, that's how I use extenders anyways. I do frequently wear it on either end of the lengths depending on the neckline of the top I'm wearing.",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "natalie",
            "date": "04 Feb, 2021",
            "rating": "5",
            "description": "Gorgeous necklace. I wear this so often. It subtly adds so much to an outfit. Well made, never tangles. My new favourite necklace.",
            "profileImg": "https://i.etsystatic.com/iap/5125f8/2848691322/iap_300x300.2848691322_fqlmxbu3.jpg?version=0"
        },
        {
            "name": "Ashley Vandepol",
            "date": "11 Jul, 2019",
            "rating": "5",
            "description": "Another great buy from lumin!! I never take the necklace off (hoop earrings are lumin too!), and it still looks like it did when I got it. Totally in love with all the stuff from here, and always get excited to order not just for the product but also the amazing customer service. Popping more in my basket as we speak. Thanks Kitty!",
            "profileImg": "https://i.etsystatic.com/iusa/78a68b/40682402/iusa_75x75.40682402_qey9.jpg?version=0"
        },
        {
            "name": "Maricela",
            "date": "06 Aug, 2020",
            "rating": "5",
            "description": "Lovely!!  Very dainty.  It works well as a layering piece.  I also really appreciated the handwritten note.  Touches like these are what makes it feel a bit more special.",
            "profileImg": "https://i.etsystatic.com/iusa/18c392/78131347/iusa_75x75.78131347_o9nd.jpg?version=0"
        },
        {
            "name": "melessacasey",
            "date": "15 Jun, 2020",
            "rating": "5",
            "description": "This necklace is exactly what i was looking for! I ordered the 15\"/16\" and the second layer just reaches my collar bone. Shipping was a little longer than i expected but given the pandemic is completely understandable. Would definitely order again from this shop. Great Quality :)",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "egros928",
            "date": "03 Jun, 2020",
            "rating": "5",
            "description": "Came fast! So cute and dainty and great for layering. Exactly what I was looking for!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "brigittemikkelson",
            "date": "04 Sep, 2020",
            "rating": "5",
            "description": "I love this necklace so much I wear it all the time. You won’t be disappointed. Great service and quality. Will definitely purchase more pieces.",
            "profileImg": "https://i.etsystatic.com/iusa/b4a985/48556121/iusa_75x75.48556121_1705.jpg?version=0"
        },
        {
            "name": "",
            "date": "08 Feb, 2020",
            "rating": "5",
            "description": "Absolutely love!!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Fengrui Yao",
            "date": "21 Jul, 2020",
            "rating": "5",
            "description": "Beautiful necklace and Lumin team was so kind to leave a handwritten note and a bookmark with my order ❤ 100% would buy from them again 😍",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Alison Cardinal",
            "date": "19 Dec, 2019",
            "rating": "5",
            "description": "It was amazing! I am in love with the necklace! Not only that, the cute handwritten note and the compostable packaging definitely made me want to buy from them again! :)",
            "profileImg": "https://i.etsystatic.com/iusa/a81d99/69742018/iusa_75x75.69742018_tt07.jpg?version=0"
        },
        {
            "name": "nicoletobey",
            "date": "02 Jun, 2020",
            "rating": "5",
            "description": "Love my necklace! Exactly what I was looking for!  And thank you Kitty for the sweet personal note inside and bookmark!!",
            "profileImg": "https://i.etsystatic.com/iusa/dc567f/26456371/iusa_75x75.26456371_i79b.jpg?version=0"
        },
        {
            "name": "Celine",
            "date": "28 Jan, 2021",
            "rating": "5",
            "description": "I love that it's layered already because it makes it so much easier to achieve that look! Also it has two clasps you can attach so you can decide if you want it tighter or looser (:",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Rosanna Le",
            "date": "17 Oct, 2020",
            "rating": "5",
            "description": "The perfect danity necklace! I was on the hunt for the perfect one and this goes with all my outfits. Great quality too :)",
            "profileImg": "https://i.etsystatic.com/iusa/06f98e/85741930/iusa_75x75.85741930_l2dm.jpg?version=0"
        },
        {
            "name": "Mae",
            "date": "25 May, 2020",
            "rating": "5",
            "description": "my favorite piece of jewelry! i wear it everyday, shower in it and it remains beautiful! definitely recommend this shop and this product!",
            "profileImg": "https://i.etsystatic.com/iusa/ace268/74825137/iusa_75x75.74825137_kpu1.jpg?version=0"
        },
        {
            "name": "Oana",
            "date": "28 May, 2020",
            "rating": "5",
            "description": "Such a cute necklace! I've been wearing it everyday since I received it. The service was also great. Would recommend this shop!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "mcorrego",
            "date": "05 Nov, 2020",
            "rating": "5",
            "description": "The necklace looks fantastic!  I was a little disappointed when I saw the delivery times but it was worth the wait. 😊",
            "profileImg": "https://i.etsystatic.com/iap/1e4094/2637822214/iap_300x300.2637822214_21d06uwd.jpg?version=0"
        },
        {
            "name": "Storm Saito",
            "date": "26 Feb, 2021",
            "rating": "5",
            "description": "I bought 3 of these for Valentine's Day, for my teenagers. They loved them and have received many compliments from their friends and co-workers. I let the seller know that I would like them by Valentine's Day, and she made sure I had them 2 days later. Amazing service!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Maddie Porter",
            "date": "08 Jul, 2020",
            "rating": "5",
            "description": "so cute and dainty! love it and will be buying from the shop again. also super cute packaging and loved the bookmark :)",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Afeeza Mohamed",
            "date": "27 May, 2020",
            "rating": "5",
            "description": "This necklace is extremely gorgeous and now it’s one of my daily wear pieces. So dainty and classy looking, I love love it!",
            "profileImg": "https://i.etsystatic.com/iusa/4921ab/75206927/iusa_75x75.75206927_it3z.jpg?version=0"
        },
        {
            "name": "minachoey",
            "date": "01 Oct, 2020",
            "rating": "5",
            "description": "Love it! So dainty just how I like, looks great with any outfit.",
            "profileImg": "https://i.etsystatic.com/iusa/2e9773/43066917/iusa_75x75.43066917_2zuj.jpg?version=0"
        },
        {
            "name": "kbcks",
            "date": "17 Sep, 2020",
            "rating": "5",
            "description": "This necklace is absolutely beautiful! It's so minimal and perfect for everyday wear - exactly was I was hoping for! I'll definitely be sure to check out more items in the future.",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Lindsay",
            "date": "03 Jul, 2020",
            "rating": "5",
            "description": "My favourite piece of jewelry!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "lexistat",
            "date": "09 Feb, 2021",
            "rating": "5",
            "description": "So beautiful! Exactly what I was looking for! Instead of buying from major jeweler I chose to shop small... best feeling :)",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Olivia Gonzales",
            "date": "15 Nov, 2020",
            "rating": "5",
            "description": "I love this necklace! The shipping took a few weeks but it was not longer than what I was told it would be! Excellent customer service and very helpful with my questions, will definitely recommend and be buying from again!",
            "profileImg": "https://i.etsystatic.com/iusa/c26f18/82063744/iusa_75x75.82063744_okj2.jpg?version=0"
        },
        {
            "name": "Giulia Lentini",
            "date": "16 Oct, 2020",
            "rating": "5",
            "description": "So delicate! So sparkly! So nice to support Canadian artisans!",
            "profileImg": "https://i.etsystatic.com/iusa/7974ff/50024748/iusa_75x75.50024748_niey.jpg?version=0"
        },
        {
            "name": "Benazir Grace Radmanesh",
            "date": "07 Nov, 2019",
            "rating": "5",
            "description": "Received my beautiful necklace in such thoughtful and gorgeous packaging! Loved the card, treat, and polish cloth! Thank you so much :)",
            "profileImg": "https://i.etsystatic.com/iap/c6b3e1/2075271408/iap_300x300.2075271408_4asa8fn1.jpg?version=0"
        },
        {
            "name": "Kaiku",
            "date": "27 Jul, 2020",
            "rating": "5",
            "description": "Absolutely love this necklace set. It's so dainty and goes with any outfit whether you're dressed up or casual. I've been wearing it everyday - in the shower, while working out, or swimming in the Mediterranean Sea and can see no tarnishing or change in color. 10/10 would purchase again as gifts for family or girlfriends.",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Kimmy Nguyen",
            "date": "07 Jul, 2020",
            "rating": "5",
            "description": "So dainty and beautiful.",
            "profileImg": "https://i.etsystatic.com/iap/dcae77/2400012606/iap_300x300.2400012606_2owzs0ib.jpg?version=0"
        },
        {
            "name": "Tiffany Drabek",
            "date": "25 Jun, 2020",
            "rating": "5",
            "description": "Very pretty dainty necklace! Love it!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Chantal Vignola",
            "date": "15 Jan, 2020",
            "rating": "5",
            "description": "I love this necklace. Its the perfect length and sits really nicely.",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Tamy Tsujimoto",
            "date": "06 Apr, 2021",
            "rating": "5",
            "description": "It is absolutely beautiful and delicate!\nI loved it!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "cclaire",
            "date": "05 Jul, 2020",
            "rating": "5",
            "description": "The necklace is beautiful and it came with a hand written note. I will cherish it forever :)",
            "profileImg": "https://i.etsystatic.com/iap/f9164b/2397004848/iap_300x300.2397004848_9fdr7ss0.jpg?version=0"
        },
        {
            "name": "Nic Gwynne",
            "date": "14 Sep, 2019",
            "rating": "4",
            "description": "clasp is a bit tough to open but love how dainty these chains are, perfect length",
            "profileImg": "https://i.etsystatic.com/iusa/e78122/68246695/iusa_75x75.68246695_3hph.jpg?version=0"
        },
        {
            "name": "caileigh sweeney",
            "date": "11 Jun, 2020",
            "rating": "5",
            "description": "Came on time and it was Very dainty and pretty!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Gwendoline Decat",
            "date": "23 Oct, 2020",
            "rating": "5",
            "description": "lovely ! could have done without the hour spent to detangle it when it arrived though ...",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Megan Adams",
            "date": "16 Feb, 2021",
            "rating": "5",
            "description": "So beautiful! Exactly what I wanted, thank you!",
            "profileImg": "https://i.etsystatic.com/iusa/717c95/73996906/iusa_75x75.73996906_7eqj.jpg?version=0"
        },
        {
            "name": "Rie",
            "date": "19 May, 2020",
            "rating": "5",
            "description": "Perfect necklace! Exactly as advertised.",
            "profileImg": "https://i.etsystatic.com/iusa/e611be/82215045/iusa_75x75.82215045_4z9m.jpg?version=0"
        },
        {
            "name": "Su Song",
            "date": "14 Nov, 2019",
            "rating": "5",
            "description": "Lovely Necklace, I ordered 14\"/15\" length and it's perfect. The extension is useful if you want to wear it a little loose.",
            "profileImg": "https://i.etsystatic.com/iusa/d0cad8/65828591/iusa_75x75.65828591_qlmq.jpg?version=0"
        },
        {
            "name": "Irena Xia",
            "date": "14 Sep, 2020",
            "rating": "5",
            "description": "Love wearing this dainty necklace! I've worn it everyday so far.",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "",
            "date": "02 Jun, 2019",
            "rating": "5",
            "description": "Love this necklace! Good quality and looks exactly as pictured.",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Joti",
            "date": "16 Oct, 2019",
            "rating": "5",
            "description": "Love this necklace !",
            "profileImg": "https://i.etsystatic.com/iusa/ca62ef/59273901/iusa_75x75.59273901_8hvv.jpg?version=0"
        },
        {
            "name": "Isabelle K",
            "date": "27 May, 2020",
            "rating": "5",
            "description": "Lovely necklace!",
            "profileImg": "https://i.etsystatic.com/iusa/0c3f8f/74689098/iusa_75x75.74689098_8cr2.jpg?version=0"
        },
        {
            "name": "briellecyoung",
            "date": "18 Sep, 2020",
            "rating": "5",
            "description": "I loved this necklace so much I ordered another as a gift. It’s dainty and the perfect sparkle for everyday wear.",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Laurie-Pier",
            "date": "25 Nov, 2020",
            "rating": "5",
            "description": "The necklaces are beautiful and amazing quality!",
            "profileImg": "https://i.etsystatic.com/iusa/9269a3/81540608/iusa_75x75.81540608_dvcf.jpg?version=0"
        },
        {
            "name": "Georgie Fleming",
            "date": "08 Dec, 2020",
            "rating": "5",
            "description": "Beautiful piece + great quality. Shipped fast - thank you!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "sondrapedersen",
            "date": "19 Feb, 2021",
            "rating": "5",
            "description": "The necklace does tend to get tangled but it looks beautiful on! Very good quality too- I’ve not taken it off and worn in the shower and there is no sign of wear or tarnish.",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Claudia",
            "date": "21 Apr, 2020",
            "rating": "5",
            "description": "Really beautiful necklace, came in a nice box with a cute bookmark, wrapped in compostable packaging too!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Sarah",
            "date": "17 Aug, 2020",
            "rating": "5",
            "description": "Very pretty dainty necklace! Great quality!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Yasmin Aden",
            "date": "12 Apr, 2021",
            "rating": "5",
            "description": "This is a beautiful necklace, it’s a bit tight on me but I will be gifting this to someone and purchasing another for myself",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Anna",
            "date": "14 Nov, 2020",
            "rating": "5",
            "description": "Super quick shipping, packaged well, and it was excactly as pictured!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Taleah Smith",
            "date": "02 Mar, 2021",
            "rating": "5",
            "description": "This is beautiful and exactly what I was looking for!",
            "profileImg": "https://i.etsystatic.com/iusa/130f29/33653857/iusa_75x75.33653857_ihle.jpg?version=0"
        },
        {
            "name": "Sam P. Kim",
            "date": "29 Nov, 2020",
            "rating": "5",
            "description": "Great piece to add to my everyday jewelry. Thank you.",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Czeri Nocon",
            "date": "28 Aug, 2020",
            "rating": "5",
            "description": "Beautiful necklace that’s perfect for everyday wear. It’s subtle yet noticeable. Packaging was beautiful too.",
            "profileImg": "https://i.etsystatic.com/iusa/677938/8436015/iusa_75x75.8436015.jpg?version=0"
        },
        {
            "name": "Sanjana Sridhar",
            "date": "11 Nov, 2020",
            "rating": "5",
            "description": "Very dainty and lovely !",
            "profileImg": "https://i.etsystatic.com/iusa/cf1215/49807962/iusa_75x75.49807962_jxs3.jpg?version=0"
        },
        {
            "name": "Daniel",
            "date": "28 Feb, 2020",
            "rating": "5",
            "description": "Very nice packaging, fast shipping! A+ Would recommend",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Lee-Anne Yuriko",
            "date": "05 Jun, 2020",
            "rating": "5",
            "description": "Super simple and cute! Everyday wear!",
            "profileImg": "https://i.etsystatic.com/iusa/6766f3/75609925/iusa_75x75.75609925_mas6.jpg?version=0"
        },
        {
            "name": "Ronique22",
            "date": "25 May, 2020",
            "rating": "5",
            "description": "Beautiful and simple. My new everyday wear necklace.",
            "profileImg": "https://i.etsystatic.com/iusa/06e778/23771502/iusa_75x75.23771502_8f6h.jpg?version=0"
        },
        {
            "name": "Shelby",
            "date": "24 Jun, 2020",
            "rating": "5",
            "description": "I wear it everyday, love so much!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Sanah Rajkumari",
            "date": "20 May, 2020",
            "rating": "5",
            "description": "Dainty and great quality. Thank you!",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Michelle DeJong",
            "date": "06 Aug, 2019",
            "rating": "5",
            "description": "Very cute and simple. Fast shipping",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Leah Casciano",
            "date": "28 Jul, 2020",
            "rating": "5",
            "description": "Great product and very friendly service! Would definitely purchase again.",
            "profileImg": "https://i.etsystatic.com/iusa/03c66c/69093742/iusa_75x75.69093742_apcf.jpg?version=0"
        },
        {
            "name": "Kristy Prelgovisk",
            "date": "27 Dec, 2020",
            "rating": "1",
            "description": "Due to the craziness of the holidays this package still has not come in for me, it’s a Christmas gift for a friend and it’s the last thing I’m waiting on! The shopping site used for this account is not reliable in anyway, chitchat hasn’t given me an update on this present since Dec 15th!",
            "profileImg": "https://i.etsystatic.com/iusa/7fdb17/61691518/iusa_75x75.61691518_mu4w.jpg?version=0"
        },
        {
            "name": "Jessica Frisky",
            "date": "25 Jun, 2020",
            "rating": "5",
            "description": "Quick response time to my messages, and the necklace is very dainty and exactly what I was looking for!",
            "profileImg": "https://i.etsystatic.com/iusa/3761da/39686780/iusa_75x75.39686780_1gr3.jpg?version=0"
        },
        {
            "name": "Dominique Paquin",
            "date": "17 Aug, 2020",
            "rating": "5",
            "description": "Excellent product. Thank you very much!",
            "profileImg": "https://i.etsystatic.com/iusa/c7eb40/78655093/iusa_75x75.78655093_sw7x.jpg?version=0"
        },
        {
            "name": "charlenanulman",
            "date": "10 Jul, 2020",
            "rating": "3",
            "description": "Great customer service and shipping. Unfortunately the necklace is a bit orange and brassy. Not yellow gold like I hoped. Sometimes gold filled jewelry comes off orange but I’m looking for yellow gold.",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "maddygs1990",
            "date": "16 Jan, 2021",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Brielle",
            "date": "04 Apr, 2021",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Ellyssa Angelucci",
            "date": "28 May, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/iusa/18e7c1/85970273/iusa_75x75.85970273_kt7l.jpg?version=0"
        },
        {
            "name": "Mary Ellen Brown",
            "date": "27 Jun, 2019",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Jennifer",
            "date": "08 Mar, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/iap/a70920/2265784349/iap_300x300.2265784349_k97hps0k.jpg?version=0"
        },
        {
            "name": "madelinetaylor4434",
            "date": "27 Sep, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/iusa/1d0703/45499934/iusa_75x75.45499934_kzjz.jpg?version=0"
        },
        {
            "name": "Tia Sohma",
            "date": "06 Sep, 2019",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/iusa/e27c84/23988737/iusa_75x75.23988737_jg7r.jpg?version=0"
        },
        {
            "name": "Alyson Bauman",
            "date": "15 Oct, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Jessica Fedorchuk",
            "date": "09 Mar, 2021",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Jacqueline Sieber",
            "date": "05 Nov, 2019",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Melissa Kirmish",
            "date": "26 Oct, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/iusa/c605b9/70463901/iusa_75x75.70463901_gpis.jpg?version=0"
        },
        {
            "name": "hollybach1",
            "date": "13 Aug, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Breanna Hemiller",
            "date": "18 May, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/iusa/d5cbd6/32106698/iusa_75x75.32106698_mptm.jpg?version=0"
        },
        {
            "name": "Brooke Schneider",
            "date": "08 Dec, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/iap/cb938d/2769566451/iap_300x300.2769566451_t0702hky.jpg?version=0"
        },
        {
            "name": "Mary Nevin",
            "date": "26 Jan, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "neesharai",
            "date": "27 Aug, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Brill C",
            "date": "11 Jul, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/iusa/e533ba/54419461/iusa_75x75.54419461_54lk.jpg?version=0"
        },
        {
            "name": "Judy",
            "date": "25 Sep, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/iusa/943b60/70111260/iusa_75x75.70111260_2gql.jpg?version=0"
        },
        {
            "name": "Maren Oliver",
            "date": "03 Aug, 2020",
            "rating": "4",
            "description": "",
            "profileImg": "https://i.etsystatic.com/11050902/c/1865/1481/454/101/il/5f36f8/1862919241/il_75x75.1862919241_mwli.jpg"
        },
        {
            "name": "Samantha Chi",
            "date": "23 Nov, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/iusa/d64bdc/40959050/iusa_75x75.40959050_4m9w.jpg?version=0"
        },
        {
            "name": "Kordell Dubeau",
            "date": "25 Dec, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/iusa/471778/44106998/iusa_75x75.44106998_7bne.jpg?version=0"
        },
        {
            "name": "Carolina Boets",
            "date": "13 Aug, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/iusa/0d2b7f/78689471/iusa_75x75.78689471_48xz.jpg?version=0"
        },
        {
            "name": "jrankine89",
            "date": "18 Aug, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/iusa/08d1d6/39541720/iusa_75x75.39541720_aodx.jpg?version=0"
        },
        {
            "name": "niesetta Hooghoed",
            "date": "21 Dec, 2020",
            "rating": "5",
            "description": "",
            "profileImg": "https://i.etsystatic.com/iusa/27a2f1/82962764/iusa_75x75.82962764_tcff.jpg?version=0"
        }
    ],
      
 //     rating: 4.5,
  //    numReviews: 12,
    }
  ];
  
  export default products
  