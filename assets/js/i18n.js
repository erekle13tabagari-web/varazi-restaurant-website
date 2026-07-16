/* ============================================================
   VARAZI — bilingual (English / Georgian) engine
   ------------------------------------------------------------
   All Georgian text lives in EN_KA below (English : Georgian).
   To tweak any Georgian wording, edit the right-hand side here.
   The toggle, the remembered choice and the logo swap all use this.
   ============================================================ */
(function () {
  'use strict';

  var STORE = 'varazi-lang';

  /* English source string  :  Georgian translation */
  var EN_KA = {
    /* ---------- Navigation & shared chrome ---------- */
    "Home": "მთავარი",
    "Menu": "მენიუ",
    "About": "ჩვენ შესახებ",
    "Blog": "ბლოგი",
    "Book A Table": "დაჯავშნე მაგიდა",
    "Make a Reservation": "დაჯავშნე მაგიდა",
    "Explore Menu": "იხილე მენიუ",
    "Explore Our Story": "იხილე ჩვენი ისტორია",
    "Scroll": "ქვემოთ",

    /* ---------- Footer ---------- */
    "A Georgian restaurant & beer garden on Varaziskhevi, Tbilisi. Honest food, cold draughts and warm hospitality since 1995.":
      "ქართული რესტორანი და ლუდის ბაღი ვარაზისხევზე, თბილისში. გულწრფელი საკვები, ცივი ლუდი და თბილი მასპინძლობა 1995 წლიდან.",
    "Explore": "გვერდები",
    "Visit": "მისამართი",
    "Find Us": "მოგვძებნე",
    "Open in Google Maps": "გახსენი Google Maps-ში",
    "Reservations": "ჯავშანი",
    "Stay in Touch": "დაგვიკავშირდი",
    "Seasonal menus, garden events and a little Georgian warmth — straight to your inbox.":
      "სეზონური მენიუ, ბაღის ღონისძიებები და ცოტა ქართული სითბო — პირდაპირ თქვენს ფოსტაში.",
    "1 Varaziskhevi St": "ვარაზისხევის ქუჩა 1",
    "Tbilisi, Georgia": "თბილისი, საქართველო",
    "Ltd. Varazi · Established 1995": "შპს ვარაზი · დაარსდა 1995",
    "Tbilisi · Georgia · გემრიელად": "თბილისი · საქართველო · გემრიელად",

    /* ---------- Home: hero ---------- */
    "Tbilisi · Beer Garden · Since 1995": "თბილისი · ლუდის ბაღი · 1995 წლიდან",
    "The Soul of the Georgian Table": "ქართული სუფრის სული",
    "Authentic Georgian cuisine and a beloved open-air beer garden on Varaziskhevi — where hand-folded khachapuri, fire-kissed mangal, fresh draughts and warm hospitality turn every meal into a feast.":
      "ნამდვილი ქართული სამზარეულო და საყვარელი ღია ცის ქვეშ ლუდის ბაღი ვარაზისხევზე — სადაც ხელით გაკეთებული ხაჭაპური, მანგალი, ცივი ლუდი და თბილი მასპინძლობა ყოველ ვახშამს დღესასწაულად აქცევს.",

    /* ---------- Home: our menu ---------- */
    "Our Menu": "ჩვენი მენიუ",
    "Where Every Dish": "ყოველი კერძი",
    "Tells a Georgian Story": "ქართულ ამბავს ჰყვება",
    "From the mountains of Svaneti to the vineyards of Kakheti — a menu rooted in tradition, served with intention and a generous spirit.":
      "სვანეთის მთებიდან კახეთის ვენახებამდე — მენიუ ტრადიციებზე დაფუძნებული, სიყვარულითა და გულუხვად მირთმეული.",
    "Georgian Classics": "ქართული კლასიკა",
    "Khachapuri, khinkali and the dishes of our grandmothers — folded and shaped by hand every morning.":
      "ხაჭაპური, ხინკალი და ბებიების კერძები — ყოველ დილით ხელით გაკეთებული.",
    "From the Mangal": "მანგალიდან",
    "Mtsvadi, kebabs and prime steaks kissed by open flame and vine-wood smoke.":
      "მწვადი, კებაბი და სტეიკები ღია ცეცხლსა და ვაზის შეშის კვამლზე.",
    "From the Garden": "ბაღიდან",
    "Pkhali, vivid salads and generous cheese boards — bright with fresh herbs and walnuts.":
      "ფხალი, ნაირფერი სალათები და ყველის ასორტი — ახალი მწვანილითა და ნიგვზით.",
    "Beer Garden & Cellar": "ლუდის ბაღი და მარანი",
    "Rotating craft draughts, qvevri wines and signature cocktails under the open sky.":
      "მრავალფეროვანი ლუდი, ქვევრის ღვინო და საფირმო კოქტეილები ღია ცის ქვეშ.",
    "Chef's daily selection": "შეფის დღის შეთავაზება",

    /* ---------- Home: signature dishes ---------- */
    "Signature Dishes": "საფირმო კერძები",
    "Tastes That": "გემო, რომელიც",
    "Define Us": "გვახასიათებს",
    "Savour the moment with our most-loved plates — crafted with passion and the finest seasonal produce.":
      "დატკბი წუთით ჩვენი ყველაზე საყვარელი კერძებით — შექმნილი სიყვარულითა და საუკეთესო სეზონური პროდუქტებით.",
    "Soup Dumplings": "წვნიანი ცომეული",
    "Khinkali": "ხინკალი",
    "Cheese Bread": "ყველის პური",
    "Megruli Khachapuri": "მეგრული ხაჭაპური",
    "Family Skillet": "საოჯახო ტაფა",
    "Ojakhuri": "ოჯახური",
    "Garlic Chicken": "ნივრიანი ქათამი",
    "Shkmeruli": "შქმერული",
    "Grilled Skewers": "შამფურზე",
    "Mtsvadi": "მწვადი",
    "Herbed Stew": "ჩაშუშული",
    "Chakhokhbili": "ჩახოხბილი",

    /* ---------- Home: ambiance ---------- */
    "The Ambiance": "ატმოსფერო",
    "Beneath the Trees,": "ხეების ჩრდილქვეშ,",
    "Around the Table": "სუფრის გარშემო",
    "Lantern light, leafy greenery and the easy hum of good company — Varazi is made for lingering evenings.":
      "ფარნების შუქი, მწვანე ბაღი და სასიამოვნო საუბრის ხმაური — ვარაზი შექმნილია დაუვიწყარი საღამოებისთვის.",

    /* ---------- Home: story & stats ---------- */
    "Our Story": "ჩვენი ისტორია",
    "A Legacy of": "ქართული მასპინძლობის",
    "Georgian Hospitality": "მემკვიდრეობა",
    "★ Beloved in Tbilisi since 1995": "★ თბილისის საყვარელი ადგილი 1995 წლიდან",
    "\"A table at Varazi is never just a meal — it is a sufra, where strangers become friends and every glass is raised to life.\"":
      "„ვარაზში სუფრა არასდროსაა უბრალოდ ვახშამი — ეს არის სუფრა, სადაც უცნობები მეგობრდებიან და ყოველი სადღეგრძელო ცხოვრებას ეძღვნება.“",
    "For three decades, Varazi has poured its heart into honest Georgian cooking and the warm, open-air spirit of the beer garden. What began as a neighbourhood gathering place on Varaziskhevi is today a Tbilisi institution.":
      "სამი ათწლეულის განმავლობაში ვარაზი გულს დებს გულწრფელ ქართულ სამზარეულოსა და ლუდის ბაღის თბილ, ღია ცის ქვეშ ატმოსფეროში. ის, რაც ვარაზისხევზე უბნის შესაკრებ ადგილად დაიწყო, დღეს თბილისის სავიზიტო ბარათია.",
    "Since 1995": "1995 წლიდან",
    "Three decades of feasting on Varaziskhevi Street.": "სამი ათწლეული ვარაზისხევის ქუჩაზე.",
    "100% Handmade": "100% ხელით",
    "Khinkali & khachapuri folded fresh by hand each day.": "ხინკალი და ხაჭაპური ყოველდღე ხელით მზადდება.",
    "Open-Air Garden": "ღია ბაღი",
    "Seating beneath the trees, lanterns and the Tbilisi sky.": "მაგიდები ხეების, ფარნებისა და თბილისის ცის ქვეშ.",
    "Craft & Cellar": "ლუდი და მარანი",
    "Rotating draught beers and Georgian qvevri wines.": "მრავალფეროვანი ლუდი და ქართული ქვევრის ღვინო.",

    /* ---------- Home: testimonials ---------- */
    "Guest Stories": "სტუმრების ამბები",
    "Where Every Visit": "ყოველი ვიზიტი",
    "Becomes a Memory": "მოგონებად იქცევა",
    "From first-time guests to regulars of twenty years — the warmth of Varazi keeps Tbilisi coming back.":
      "პირველად მოსულებიდან ოცწლიან მუდმივ სტუმრებამდე — ვარაზის სითბო თბილისს ისევ და ისევ აბრუნებს.",
    "Nino K.": "ნინო კ.",
    "Local Guest": "ადგილობრივი სტუმარი",
    "An Evening That Tasted Like Home": "საღამო, რომელსაც სახლის გემო ჰქონდა",
    "The khinkali were perfect, the garden glowed with lantern light, and the staff treated us like family. This is the Tbilisi I fell in love with.":
      "ხინკალი იდეალური იყო, ბაღი ფარნების შუქით ბრწყინავდა, პერსონალი კი ოჯახივით გვექცეოდა. სწორედ ასეთ თბილისს შევუყვარდი.",
    "Davit M.": "დავით მ.",
    "Food Writer": "კულინარიული მიმომხილველი",
    "The Best Beer Garden in the City": "ქალაქის საუკეთესო ლუდის ბაღი",
    "Cold draughts, blistered mtsvadi off the mangal and a cheese board worth the trip alone. Varazi balances tradition and craft like nowhere else.":
      "ცივი ლუდი, მანგალზე შემწვარი მწვადი და ყველის ასორტი, რომლისთვისაც ცალკე ღირს მისვლა. ვარაზი ტრადიციასა და ხელოვნებას სხვაგან არსად ისე აბალანსებს.",

    /* ---------- Home: reserve CTA ---------- */
    "Reserve Your Table": "დაჯავშნე მაგიდა",
    "An Evening of": "სითბოსა და",
    "Warmth & Flavour": "გემოს საღამო",
    "Monday – Friday": "ორშაბათი – პარასკევი",
    "Saturday – Sunday": "შაბათი – კვირა",
    "Find Us": "მოგვძებნე",

    /* ---------- Menu page ---------- */
    "A Georgian Feast": "ქართული სუფრა",
    "Handmade each day from time-honoured recipes — served generously, the way a sufra should be. Prices in Georgian Lari (₾).":
      "ყოველდღე ხელით, ტრადიციული რეცეპტებით — გულუხვად მირთმეული, როგორც ნამდვილ სუფრას შეჰფერის. ფასები ქართულ ლარში (₾).",
    "Appetizers": "წასახემსებელი",
    "Salads": "სალათები",
    "Soups": "სუპები",
    "Georgian": "ქართული",
    "Mangal": "მანგალი",
    "Fish": "თევზი",
    "Pasta & Pizza": "პასტა და პიცა",
    "Desserts": "დესერტი",
    "Beer & Drinks": "ლუდი და სასმელი",
    "Vegan": "ვეგანური",

    "Appetizers & Cheese": "წასახემსებელი და ყველი",
    "To share, to start, to linger over with a cold draught.": "გასაზიარებლად, დასაწყებად, ცივ ლუდთან ერთად.",
    "Georgian Cheese Board": "ქართული ყველის ასორტი",
    "Sulguni, guda, nadughi and imeruli with honey and walnuts.": "სულგუნი, გუდა, ნადუღი და იმერული თაფლითა და ნიგვზით.",
    "Pkhali Platter": "ფხალის ასორტი",
    "Spinach, beetroot and bean pâtés with walnut and pomegranate.": "ისპანახის, ჭარხლისა და ლობიოს ფხალი ნიგვზითა და ბროწეულით.",
    "Charcuterie Board": "ხორცის ასორტი",
    "Cured meats, prosciutto, olives and pickles.": "შებოლილი ხორცი, პროშუტო, ზეთისხილი და მწნილი.",
    "Mozzarella Sticks": "მოცარელას ჩხირები",
    "Golden, crisp and molten, with garden herb dip.": "ოქროსფერი, ხრაშუნა და დნება, მწვანილის სოუსით.",
    "Loaded Nachos": "ნაჩოსი",
    "Melted cheese, jalapeño, salsa and sour cream.": "გამდნარი ყველი, ხალაპენო, სალსა და არაჟანი.",
    "Garden Dip Plate": "სოუსების ასორტი",
    "Seasonal dips with warm flatbread.": "სეზონური სოუსები თბილ ლავაშთან ერთად.",
    "Golden Bites": "ოქროს ლუკმები",
    "Crisp cheese-filled dough, fried to order.": "ხრაშუნა ცომი ყველის გულსართით.",
    "Glazed Chicken Wings": "ქათმის ფრთები",
    "Sticky, smoky and finished with toasted sesame.": "ტკბილ-შებოლილი, შემწვარი სეზამით.",

    "Crisp, vivid and full of garden freshness.": "ხრაშუნა, ნაირფერი და ბაღის სიახლით სავსე.",
    "Caesar Salad": "ცეზარის სალათი",
    "Romaine, parmesan, croutons and grilled chicken.": "რომენი, პარმეზანი, კრუტონი და შემწვარი ქათამი.",
    "Tuna Salad": "ტუნას სალათი",
    "Seared tuna, leaves, egg and a citrus dressing.": "შემწვარი ტუნა, მწვანილი, კვერცხი და ციტრუსის სოუსი.",
    "Steak Salad": "სტეიკის სალათი",
    "Sliced beef, greens, cherry tomato and parmesan.": "საქონლის ხორცი, მწვანილი, ჩერი პომიდორი და პარმეზანი.",
    "Garden Salad": "ბაღის სალათი",
    "Tomato, cucumber, herbs and walnut dressing.": "პომიდორი, კიტრი, მწვანილი და ნიგვზის სოუსი.",

    "Warming bowls, slow-simmered and comforting.": "გამათბობელი, ნელ-ნელა მოხარშული კერძები.",
    "Chikhirtma": "ჩიხირთმა",
    "Velvety chicken broth with egg and coriander.": "ნაზი ქათმის ბულიონი კვერცხითა და ქინძით.",
    "Country Chicken Soup": "სოფლის ქათმის სუპი",
    "Clear broth, vegetables and tender chicken.": "გამჭვირვალე ბულიონი, ბოსტნეული და ნაზი ქათამი.",
    "Mushroom Cream Soup": "სოკოს კრემ-სუპი",
    "Forest mushrooms, cream and fresh herbs.": "ტყის სოკო, ნაღები და ახალი მწვანილი.",
    "Roast Tomato Soup": "პომიდვრის სუპი",
    "Sweet roasted tomato with basil.": "შემწვარი ტკბილი პომიდორი რეჰანით.",
    "Pumpkin & Spinach Soup": "გოგრისა და ისპანახის სუპი",
    "Silky pumpkin with spinach and toasted seeds.": "ნაზი გოგრა ისპანახითა და თესლებით.",

    "The heart of our table — folded and shaped by hand each morning.": "ჩვენი სუფრის გული — ყოველ დილით ხელით გაკეთებული.",
    "Cheese-filled bread topped with even more sulguni.": "ყველით სავსე პური, ზემოდან კიდევ მეტი სულგუნით.",
    "Khinkali (5 pcs)": "ხინკალი (5 ცალი)",
    "Hand-pleated soup dumplings with spiced meat.": "ხელით დაკეცილი ხინკალი ცხარე ხორცით.",
    "Lobiani": "ლობიანი",
    "Warm bread filled with seasoned beans.": "თბილი პური ლობიოს გულსართით.",
    "Lobio in Clay Pot": "ლობიო ქოთანში",
    "Slow-cooked beans with herbs, served with mchadi.": "ნელ-ნელა მოხარშული ლობიო მწვანილით, მჭადთან ერთად.",
    "Pan-fried pork and potatoes with onion and herbs.": "შემწვარი ღორის ხორცი და კარტოფილი ხახვითა და მწვანილით.",
    "Crispy chicken in a rich garlic and milk sauce.": "ხრაშუნა ქათამი ნივრისა და რძის სოუსში.",
    "Chicken stewed with tomato, herbs and spices.": "ქათამი ჩაშუშული პომიდორით, მწვანილითა და სანელებლებით.",
    "Ajapsandali": "აჯაფსანდალი",
    "Braised aubergine, pepper and tomato with garden herbs.": "ჩაშუშული ბადრიჯანი, წიწაკა და პომიდორი მწვანილით.",

    "Fire, smoke and vine-wood — the soul of the beer garden.": "ცეცხლი, კვამლი და ვაზის შეშა — ლუდის ბაღის სული.",
    "Pork Mtsvadi": "ღორის მწვადი",
    "Char-grilled pork skewers with onion and pomegranate.": "შამფურზე შემწვარი ღორის მწვადი ხახვითა და ბროწეულით.",
    "Chicken Mtsvadi": "ქათმის მწვადი",
    "Marinated chicken skewers off the open mangal.": "მარინებული ქათმის მწვადი ღია მანგალზე.",
    "Georgian Kebab": "ქართული კებაბი",
    "Minced meat kebab with spices and lavash.": "ფარშის კებაბი სანელებლებითა და ლავაშით.",
    "T-Bone Steak": "ტი-ბოუნ სტეიკი",
    "Dry-aged, flame-grilled, served on hot stone.": "მომწიფებული ხორცი, ცეცხლზე შემწვარი, ცხელ ქვაზე.",
    "Ribeye Steak": "რიბაი სტეიკი",
    "Grilled to your liking with seasonal garnish.": "თქვენი გემოვნებით შემწვარი, სეზონური გარნირით.",
    "Mixed Meat Plate": "ხორცის ასორტი",
    "A feast of grilled meats to share.": "შემწვარი ხორცის ნაირსახეობა გასაზიარებლად.",
    "Kanchi (Lamb Rack)": "კანჭი (ბატკნის ნეკნი)",
    "Grilled lamb with herbs and roasted vegetables.": "შემწვარი ბატკანი მწვანილითა და ბოსტნეულით.",

    "Fish & Seafood": "თევზი და ზღვის პროდუქტები",
    "Bright, fresh and simply prepared.": "ახალი, მსუბუქი და გემრიელი.",
    "Grilled Salmon": "შემწვარი ორაგული",
    "Salmon fillet with greens and lemon butter.": "ორაგულის ფილე მწვანილითა და ლიმონის კარაქით.",
    "Pan-Seared White Fish": "თეთრი თევზი ტაფაზე",
    "Delicate fillet with herb oil and seasonal sides.": "ნაზი ფილე მწვანილის ზეთითა და სეზონური გარნირით.",
    "Seafood Plate": "ზღვის პროდუქტების ასორტი",
    "A generous selection of the day's catch.": "დღის ნადავლის გულუხვი არჩევანი.",
    "Fisherman's Plate": "მეთევზის კერძი",
    "Grilled fish with vegetables and house sauces.": "შემწვარი თევზი ბოსტნეულითა და საფირმო სოუსებით.",
    "Tuna Tataki": "ტუნა ტატაკი",
    "Lightly seared tuna with sesame and citrus.": "მსუბუქად შემწვარი ტუნა სეზამითა და ციტრუსით.",

    "Wood-fired and hand-rolled, the European way.": "შეშის ღუმელში გამომცხვარი, ევროპულად.",
    "Penne Arrabbiata": "პენე არაბიატა",
    "Penne in a spicy tomato sauce with parmesan.": "პენე ცხარე პომიდვრის სოუსში პარმეზანით.",
    "Creamy Chicken Pasta": "ქათმის პასტა ნაღებში",
    "Tagliatelle with chicken, mushroom and cream.": "ტალიატელე ქათმით, სოკოთი და ნაღებით.",
    "Margherita Pizza": "მარგარიტა პიცა",
    "San Marzano tomato, mozzarella and basil.": "პომიდორი, მოცარელა და რეჰანი.",
    "Varazi Special Pizza": "ვარაზის საფირმო პიცა",
    "Loaded with cured meats, cheese and peppers.": "შებოლილი ხორცით, ყველითა და წიწაკით.",

    "Sweet Endings": "ტკბილი დასასრული",
    "House-made, just the way to finish a feast.": "სახლის დესერტები სუფრის დასასრულებლად.",
    "Strawberry Cheesecake": "მარწყვის ჩიზქეიქი",
    "Creamy baked cheesecake with fresh berries.": "ნაზი ჩიზქეიქი ახალი კენკრით.",
    "Crêpes": "ბლინები",
    "Thin pancakes with chocolate or seasonal fruit.": "თხელი ბლინები შოკოლადით ან სეზონური ხილით.",
    "Honey Cake": "თაფლის ტორტი",
    "Layered honey sponge with delicate cream.": "ფენოვანი თაფლის ნამცხვარი ნაზი კრემით.",
    "Pastry Chef's Dessert": "შეფ-მეკონდიტრის დესერტი",
    "A daily creation from Sofia's kitchen.": "სოფიოს სამზარეულოს დღის ქმნილება.",

    "Cold draughts, qvevri wine and garden cocktails.": "ცივი ლუდი, ქვევრის ღვინო და კოქტეილები.",
    "Draught Beer (0.5L)": "ჩამოსასხმელი ლუდი (0.5ლ)",
    "Crisp, cold and poured fresh all evening.": "მკვახე, ცივი და ახალი მთელი საღამო.",
    "Craft Beer Selection": "კრაფტ ლუდის არჩევანი",
    "Rotating guest and local craft brews.": "ადგილობრივი და სტუმარი კრაფტ ლუდები.",
    "Signature Cocktails": "საფირმო კოქტეილები",
    "House creations with Georgian spirits.": "საფირმო კოქტეილები ქართული სასმელებით.",
    "Garden Spritz": "ბაღის სპრიცი",
    "Bright, bittersweet and perfect under the trees.": "მოცინარე, მომწარო-მოტკბო, იდეალური ხეების ჩრდილქვეშ.",
    "Qvevri Wine (glass)": "ქვევრის ღვინო (ჭიქა)",
    "Saperavi or Rkatsiteli from Kakheti.": "საფერავი ან რქაწითელი კახეთიდან.",
    "Homemade Lemonade": "სახლის ლიმონათი",
    "Tarragon, pear or seasonal fruit.": "ტარხუნა, მსხალი ან სეზონური ხილი.",
    "Join Us": "შემოგვიერთდი",
    "Best Enjoyed Around": "საუკეთესოა სავსე",
    "a Full Table": "სუფრის გარშემო",

    /* ---------- About page ---------- */
    "A Legacy Reimagined": "მემკვიდრეობა ხელახლა",
    "A journey of passion, heritage and Georgian hospitality — written one shared table at a time.":
      "ვნების, მემკვიდრეობისა და ქართული მასპინძლობის მოგზაურობა — დაწერილი თითო საერთო სუფრით.",
    "A Garden Opens": "ბაღი იხსნება",
    "Varazi began as a modest beer garden and grill on Varaziskhevi Street — a few tables beneath the trees, a glowing mangal, and a simple promise: honest Georgian food and a cold draught for every neighbour.":
      "ვარაზი დაიწყო მოკრძალებული ლუდის ბაღითა და მანგალით ვარაზისხევის ქუჩაზე — რამდენიმე მაგიდა ხეების ჩრდილქვეშ, მგზნებარე მანგალი და მარტივი დაპირება: გულწრფელი ქართული საკვები და ცივი ლუდი ყველა მეზობლისთვის.",
    "The Sufra Grows": "სუფრა იზრდება",
    "As word spread, our kitchen grew. We brought in a full Georgian menu — hand-folded khinkali, bubbling khachapuri and slow-cooked clay-pot classics — alongside the grill that started it all.":
      "ხმა გავრცელდა და ჩვენი სამზარეულოც გაიზარდა. შემოვიტანეთ სრული ქართული მენიუ — ხელით დაკეცილი ხინკალი, ცხელი ხაჭაპური და ქოთანში მოხარშული კლასიკა — იმ მანგალთან ერთად, საიდანაც ყველაფერი დაიწყო.",
    "A Tbilisi Institution": "თბილისის სავიზიტო ბარათი",
    "Two decades in, Varazi had become a gathering place for the city — birthdays, reunions and quiet evenings alike. We renovated the garden, planted more green, and kept the table as generous as ever.":
      "ორი ათწლეულის შემდეგ ვარაზი ქალაქის შესაკრები ადგილი გახდა — დაბადების დღეები, შეხვედრები და მშვიდი საღამოები. ჩვენ განვაახლეთ ბაღი, დავრგეთ მეტი მწვანე და სუფრა ისევ ისეთივე გულუხვი დავტოვეთ.",
    "Tradition, Poured Fresh": "ტრადიცია, ახლად მირთმეული",
    "Today, Varazi is defined not by its size, but by its soul. We host fewer rushed meals and more real moments — rooted in heritage, refreshed with craft beer and care, always warm, always Georgian.":
      "დღეს ვარაზს ზომა კი არ განსაზღვრავს, არამედ სული. ჩვენთან ნაკლებია ნაჩქარევი ვახშამი და მეტია ნამდვილი წუთები — მემკვიდრეობაზე დაფუძნებული, კრაფტ ლუდითა და ზრუნვით განახლებული, ყოველთვის თბილი, ყოველთვის ქართული.",
    "Why Varazi": "რატომ ვარაზი",
    "Our Restaurant": "ჩვენი",
    "Highlights": "უპირატესობები",
    "The details that turn a meal into a memory — devoted to the hands and hearts behind every plate.":
      "დეტალები, რომლებიც ვახშამს მოგონებად აქცევს — მიძღვნილი ხელებსა და გულებს, რომლებიც ყოველ კერძს ქმნიან.",
    "Timeless Heritage": "მარადიული მემკვიდრეობა",
    "Recipes passed down and folded by hand each day.": "თაობებიდან გადმოცემული რეცეპტები, ყოველდღე ხელით.",
    "The Open Mangal": "ღია მანგალი",
    "Live-fire grilling over vine-wood, every evening.": "ცოცხალ ცეცხლზე, ვაზის შეშაზე, ყოველ საღამოს.",
    "Garden & Greenery": "ბაღი და მწვანე",
    "Lantern-lit seating beneath the trees and sky.": "ფარნებით განათებული მაგიდები ხეებისა და ცის ქვეშ.",
    "Warm Hospitality": "თბილი მასპინძლობა",
    "The kind of welcome that makes guests regulars.": "ისეთი მასპინძლობა, რომელიც სტუმარს მუდმივ სტუმრად აქცევს.",
    "Our People": "ჩვენი გუნდი",
    "The Architects": "გემოს",
    "of Taste": "არქიტექტორები",
    "Devoted to perfection — meet the hands and hearts behind every Varazi experience.":
      "სრულყოფილებისადმი ერთგული — გაიცანი ხელები და გულები, რომლებიც ვარაზს ქმნიან.",
    "Giorgi Beridze": "გიორგი ბერიძე",
    "Executive Chef": "შეფ-მზარეული",
    "Levan Tatishvili": "ლევან ტატიშვილი",
    "Mangal Master": "მანგალის ოსტატი",
    "Sofia Kapanadze": "სოფიო კაპანაძე",
    "Pastry Chef": "მეკონდიტორე",
    "Join Our Story": "გახდი ჩვენი ისტორიის ნაწილი",
    "Pull Up": "მოიწიე",
    "a Chair": "სკამი",
    "There is always room at our table. Reserve your place beneath the trees and become part of the next chapter.":
      "ჩვენს სუფრაზე ყოველთვის არის ადგილი. დაჯავშნე ადგილი ხეების ჩრდილქვეშ და გახდი შემდეგი თავის ნაწილი.",

    /* ---------- Reservations page ---------- */
    "Every evening at Varazi is a feast in the making. Tell us when you'll join us, and leave the rest to us.":
      "ვარაზში ყოველი საღამო დღესასწაულია. გვითხარი, როდის შემოგვიერთდები, დანარჩენი კი ჩვენ მოგვანდე.",
    "Dine With Us": "ისადილე ჩვენთან",
    "Reservations are confirmed by phone. For parties of 8 or more, please call us directly.":
      "ჯავშანი დასტურდება ტელეფონით. 8 ან მეტ სტუმარზე გთხოვთ, პირდაპირ დაგვირეკოთ.",
    "Full Name": "სახელი და გვარი",
    "Email": "ელ. ფოსტა",
    "Contact Number": "ტელეფონის ნომერი",
    "Number of Guests": "სტუმრების რაოდენობა",
    "1 guest": "1 სტუმარი",
    "2 guests": "2 სტუმარი",
    "3 guests": "3 სტუმარი",
    "4 guests": "4 სტუმარი",
    "5 guests": "5 სტუმარი",
    "6 guests": "6 სტუმარი",
    "7 guests": "7 სტუმარი",
    "8+ (please call)": "8+ (დაგვირეკეთ)",
    "Date": "თარიღი",
    "Time": "დრო",
    "Confirm My Reservation": "დაადასტურე ჯავშანი",
    "Call Us": "დაგვირეკე",
    "Opening Hours": "სამუშაო საათები",

    /* ---------- Blog page ---------- */
    "The Journal": "ჟურნალი",
    "Stories from the Garden": "ამბები ბაღიდან",
    "Recipes, seasonal menus and tales from our table — a little taste of Tbilisi between visits.":
      "რეცეპტები, სეზონური მენიუ და ამბები ჩვენი სუფრიდან — ცოტა თბილისი ვიზიტებს შორის.",
    "The Art of Folding the Perfect Khinkali": "სრულყოფილი ხინკლის დაკეცვის ხელოვნება",
    "Twenty pleats, one knot, and decades of practice — inside the morning ritual that fills our kitchen.":
      "ოცი ნაკეცი, ერთი კვანძი და ათწლეულების გამოცდილება — დილის რიტუალი, რომელიც ჩვენს სამზარეულოს ავსებს.",
    "Pairing Georgian Dishes with Craft Draughts": "ქართული კერძების შეხამება კრაფტ ლუდთან",
    "From a hoppy lager with mtsvadi to a dark ale beside lobio — our guide to the perfect pour.":
      "მწვადთან მსუბუქი ლაგერიდან ლობიოსთან მუქ ეილამდე — ჩვენი გზამკვლევი იდეალური სასმელისთვის.",
    "What Makes a Real Georgian Sufra": "რა ქმნის ნამდვილ ქართულ სუფრას",
    "More than a meal — the toasts, the tamada and the spirit that turns dinner into a celebration.":
      "მეტი, ვიდრე ვახშამი — სადღეგრძელოები, თამადა და სული, რომელიც ვახშამს დღესასწაულად აქცევს.",
    "Summer in the Garden: Our Seasonal Cocktails": "ზაფხული ბაღში: ჩვენი სეზონური კოქტეილები",
    "Tarragon, pomegranate and Georgian spirits — the bright flavours behind this season's menu.":
      "ტარხუნა, ბროწეული და ქართული სასმელები — ამ სეზონის მენიუს ნათელი გემოები.",
    "Mastering the Mangal: Fire, Smoke & Patience": "მანგალის ოსტატობა: ცეცხლი, კვამლი და მოთმინება",
    "Why vine-wood embers make all the difference, straight from our grill master Levan.":
      "რატომ ცვლის ყველაფერს ვაზის შეშის ნაკვერჩხალი — პირდაპირ ჩვენი მანგალის ოსტატის, ლევანისგან.",
    "Behind Sofia's Daily Dessert Creations": "სოფიოს ყოველდღიური დესერტების კულისებში",
    "A peek into the pastry kitchen, where tradition meets a little modern whimsy.":
      "ჩახედვა საკონდიტროში, სადაც ტრადიცია თანამედროვე ფანტაზიას ხვდება.",

    /* ---------- Gallery ---------- */
    "Gallery": "გალერეა",
    "A Look Inside": "ერთი შემოხედვა",
    "The food, the room and the garden — Varazi as our guests find it.":
      "კერძები, დარბაზი და ბაღი — ვარაზი ისეთი, როგორსაც სტუმრები ხედავენ.",
    "Photos": "ფოტოები",
    "Video": "ვიდეო",
    "All": "ყველა",
    "Food & Drinks": "კერძები და სასმელები",
    "Interior": "ინტერიერი",
    "Exterior": "ექსტერიერი",
    "View in menu": "იხილე მენიუში",
    "View the Gallery": "იხილე გალერეა",
    "Nothing here yet.": "აქ ჯერ არაფერია.",
    "Reels and clips from our Instagram and YouTube.":
      "რილები და კლიპები ჩვენი ინსტაგრამიდან და YouTube-იდან.",
    "See It for Yourself": "ნახე საკუთარი თვალით",
    "An Evening in the Garden": "საღამო ბაღში",
    "Fire & Smoke: The Mangal": "ცეცხლი და კვამლი: მანგალი",
    "Folding Khinkali by Hand": "ხინკლის ხელით დაკეცვა",
    "The Perfect Pour": "იდეალური ჩამოსხმა",
    "Khachapuri, Straight from the Oven": "ხაჭაპური პირდაპირ ღუმელიდან",
    "A Sufra at Varazi": "სუფრა ვარაზში",

    /* ---------- Instagram reels (home) ---------- */
    "On Instagram": "ინსტაგრამზე",
    "Life at Varazi,": "ცხოვრება ვარაზში,",
    "Reel by Reel": "რილი რილზე",
    "Sizzling mangal, garden evenings and the little moments in between — follow along":
      "მბრდღვინავი მანგალი, საღამოები ბაღში და პატარა მომენტები — გამოგვყევი",
    "Follow on Instagram": "გამოგვყევი ინსტაგრამზე",
    "Beloved in Tbilisi since 1995": "თბილისის საყვარელი ადგილი 1995 წლიდან",

    /* ---------- Vacancies ---------- */
    "Vacancies": "ვაკანსიები",
    "Join the": "შემოუერთდი",
    "Varazi Team": "ვარაზის გუნდს",
    "We are always glad to meet people who cook, pour and welcome with heart. Send us a few words about yourself.":
      "ყოველთვის გვიხარია გავიცნოთ ადამიანები, ვინც გულით ამზადებს, ასხამს და მასპინძლობს. მოგვწერე ორიოდე სიტყვა შენს შესახებ.",
    "Mangal Chef": "მანგალის ოსტატი",
    "Live-fire grilling on the open mangal, evening shifts. Experience with mtsvadi and kebab preferred.":
      "ღია მანგალზე შეწვა, საღამოს ცვლები. სასურველია მწვადისა და ქაბაბის გამოცდილება.",
    "Waiter / Waitress": "ოფიციანტი",
    "Garden and hall service. Georgian and English welcome — a warm welcome matters most.":
      "მომსახურება ბაღსა და დარბაზში. ქართული და ინგლისური სასურველია — მთავარი თბილი მასპინძლობაა.",
    "Bartender": "ბარმენი",
    "Draught beer, Georgian wine and our seasonal cocktail list.":
      "ჩამოსასხმელი ლუდი, ქართული ღვინო და ჩვენი სეზონური კოქტეილები.",
    "Kitchen Assistant": "სამზარეულოს ასისტენტი",
    "Prep and support across the Georgian kitchen. No experience required — we teach.":
      "მომზადება და დახმარება ქართულ სამზარეულოში. გამოცდილება არ სჭირდება — გასწავლით.",
    "Full time": "სრული განაკვეთი",
    "Full / Part time": "სრული / ნახევარი განაკვეთი",
    "Send Your CV": "გამოგზავნე CV",

    /* ---------- Drinks (split menu) ---------- */
    "Beer, Wine & Spirits": "ლუდი, ღვინო და სპირტიანი",
    "Soft Drinks": "უალკოჰოლო",
    "Juices & Soft Drinks": "წვენები და უალკოჰოლო სასმელები",
    "Homemade lemonades, fresh juices and everything alcohol-free.":
      "სახლური ლიმონათი, ახალი წვენები და ყველაფერი უალკოჰოლო.",
    "Chacha (Georgian Grappa)": "ჭაჭა",
    "The traditional finish to a Georgian feast.": "ქართული სუფრის ტრადიციული დასასრული.",
    "Fresh Fruit Juice": "ახლადგამოწურული წვენი",
    "Pressed to order from seasonal fruit.": "იწურება შეკვეთისთანავე, სეზონური ხილისგან.",
    "Georgian Lemonade": "ქართული ლიმონათი",
    "Tarkhuna, cream or pear — the classics.": "ტარხუნა, კრემი ან მსხალი — კლასიკა.",
    "Sparkling / Still Water": "გაზიანი / უგაზო წყალი",
    "Borjomi, Nabeghlavi or still spring water.": "ბორჯომი, ნაბეღლავი ან უგაზო წყაროს წყალი.",

    /* ---------- WhatsApp ---------- */
    "Typically replies within an hour": "ჩვეულებრივ პასუხობს ერთ საათში",
    "Questions about a table, a large group or the garden? Message us on WhatsApp.":
      "კითხვები მაგიდაზე, დიდ კომპანიაზე ან ბაღზე? მოგვწერე WhatsApp-ზე.",
    "Chat on WhatsApp": "დაგვიკავშირდი WhatsApp-ით"
  };

  /* Build the document and translate text nodes -------------------- */
  var nodes = null;

  function collect() {
    nodes = [];
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentNode;
        if (!p) return NodeFilter.FILTER_REJECT;
        var tag = p.nodeName;
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest('.lang-switch')) return NodeFilter.FILTER_REJECT; // never translate the toggle
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = walker.nextNode())) nodes.push(n);
  }

  function apply(lang) {
    if (!nodes) collect();
    nodes.forEach(function (n) {
      if (n.__key === undefined) {                 // decide once, from the original English
        var k = n.nodeValue.trim();
        n.__key = (EN_KA[k] != null) ? k : null;   // only manage strings we actually know
        if (n.__key) n.__en = n.nodeValue;
      }
      if (!n.__key) return;                          // leave dynamic / unknown text alone
      n.nodeValue = (lang === 'ka') ? n.__en.replace(n.__key, EN_KA[n.__key]) : n.__en;
    });

    // Swap the logo
    document.querySelectorAll('.brand-logo').forEach(function (img) {
      img.setAttribute('src', lang === 'ka' ? 'assets/img/varazi-logo-ka.svg' : 'assets/img/varazi-logo.svg');
    });

    document.documentElement.lang = lang;
    document.documentElement.classList.toggle('lang-ka', lang === 'ka');
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem(STORE, lang); } catch (e) {}
    window.__varaziLang = lang;
  }

  function getSaved() {
    try { return localStorage.getItem(STORE); } catch (e) { return null; }
  }

  function init() {
    collect();
    apply(getSaved() || 'en');     // default language: English
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
