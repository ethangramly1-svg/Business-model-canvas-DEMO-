(function(){
  "use strict";

  /* ===================== DATA ===================== */
  var SELLERS = [
    {id:'elena', name:'Elena Marsh', initials:'EM', craft:'Jewelry — metalwork', location:'Asheville, NC', memberSince:'2023', verifiedRate:96,
      bio:'Elena hand-forges copper and silver from a one-room studio in the Blue Ridge foothills. Every piece starts as raw sheet metal — no casting, no shortcuts.'},
    {id:'nadia', name:'Nadia Okafor', initials:'NO', craft:'Jewelry — metalwork', location:'Brooklyn, NY', memberSince:'2024', verifiedRate:91,
      bio:'Nadia trained as a goldsmith before going independent. Her hammered brass line is entirely hand-finished, piece by piece.'},
    {id:'marcus', name:'Marcus Reyes', initials:'MR', craft:'Woodworking', location:'Portland, OR', memberSince:'2022', verifiedRate:93,
      bio:'Marcus works reclaimed walnut and live-edge oak into functional pieces — boards, shelves, and small furniture — out of a shared woodshop.'},
    {id:'tomas', name:'Tomás Vidal', initials:'TV', craft:'Woodworking — turning', location:'Santa Fe, NM', memberSince:'2023', verifiedRate:97,
      bio:'Tomás turns maple and cherry bowls on a foot-powered lathe, a technique he learned from his grandfather.'},
    {id:'priya', name:'Priya Nair', initials:'PN', craft:'Ceramics', location:'Austin, TX', memberSince:'2021', verifiedRate:94,
      bio:'Priya throws stoneware and porcelain on the wheel, glazing everything in small batches with food-safe, hand-mixed glazes.'},
    {id:'junko', name:'Junko Ito', initials:'JI', craft:'Ceramics', location:'Seattle, WA', memberSince:'2024', verifiedRate:88,
      bio:'Junko’s speckled stoneware planters are wheel-thrown and wood-fired in a communal kiln outside the city.'},
    {id:'otis', name:'Otis Reyes', initials:'OR', craft:'Leather goods', location:'Nashville, TN', memberSince:'2022', verifiedRate:91,
      bio:'Otis tans and cuts every hide himself, then saddle-stitches each seam by hand with waxed linen thread so it won’t unravel. He started out repairing tour cases for touring bands before turning his bench into a full leather shop in 2022.'},
    {id:'mira', name:'Mira Solheim', initials:'MS', craft:'Textiles & weaving', location:'Missoula, MT', memberSince:'2021', verifiedRate:94,
      bio:'Mira hand-spins and dyes her own wool before warping it onto a floor loom thread by thread, then weaves everything on foot-powered treadles the way her grandmother taught her.'},
    {id:'finn', name:'Finn Okafor', initials:'FO', craft:'Glasswork', location:'Corning, NY', memberSince:'2023', verifiedRate:89,
      bio:'Finn gathers molten glass from a 2,100°F furnace and shapes every piece solo at the bench with jacks, blocks, and a blowpipe before it anneals overnight. He opened his own one-man hot shop in 2023.'},
    {id:'wren', name:'Wren Castillo', initials:'WC', craft:'Candles & soap', location:'Burlington, VT', memberSince:'2024', verifiedRate:87,
      bio:'Wren hand-pours small batches of soy candles on her kitchen stove, weighing each wick and fragrance load on a scale, and cold-processes bar soap that cures on cedar racks for weeks before it’s ready to sell.'}
  ];

  var CATEGORIES = [
    {id:'jewelry', label:'Jewelry', img:'1378705', alt:'Jewelry category'},
    {id:'wood', label:'Woodworking', img:'6944927', alt:'Woodworking category'},
    {id:'ceramic', label:'Ceramics', img:'29520386/free-photo-of-organized-display-of-colorful-ceramic-plant-pots', alt:'Ceramics category'},
    {id:'leather', label:'Leather goods', img:'31661556', alt:'Leather goods category'},
    {id:'textile', label:'Textiles', img:'6021663', alt:'Textiles category'},
    {id:'glass', label:'Glasswork', img:'32176015', alt:'Glasswork category'},
    {id:'candle', label:'Candles &amp; soap', img:'5933780', alt:'Candles and soap category'}
  ];

  var PRODUCTS = [
    {id:'cuff', name:'Hand-forged copper cuff', sellerId:'elena', category:'jewelry', price:210, score:5,
      img:'35921025/free-photo-of-elegant-gold-bracelets-on-white-fabric-background', alt:'Hand-forged copper cuff, product photo',
      desc:'Hand-forged from a single sheet of raw copper, hammered and shaped without casting. Each cuff is one continuous piece — no seams, no solder.',
      manifest:'PVM-7F2C-991A', window:'Aug 12 – Aug 14, 2026',
      checkpoints:[['Raw copper sheet','Aug 12, 9:04 AM'],['Cutting to template','Aug 12, 9:41 AM'],['Hand forging','Aug 13, 2:15 PM'],['Polishing','Aug 14, 10:30 AM'],['Finished piece','Aug 14, 11:52 AM']]},
    {id:'rings', name:'Silver stacking rings (set of 3)', sellerId:'elena', category:'jewelry', price:132, score:5,
      img:'1378705', alt:'Silver stacking rings, product photo',
      desc:'Three sterling silver bands, forged to sit flush against one another. Sold as a set of three; wear together or apart.',
      manifest:'PVM-3A19-662D', window:'Aug 9 – Aug 11, 2026',
      checkpoints:[['Raw silver stock','Aug 9, 8:50 AM'],['Cutting bands','Aug 9, 9:20 AM'],['Hand forging (x3 bands)','Aug 10, 1:05 PM'],['Polishing &amp; fitting','Aug 11, 11:10 AM'],['Finished set','Aug 11, 12:40 PM']]},
    {id:'hoops', name:'Hammered brass hoop earrings', sellerId:'nadia', category:'jewelry', price:86, score:4,
      img:'15785491/free-photo-of-two-golden-hoops', alt:'Hammered brass hoop earrings, product photo',
      desc:'Solid brass hoops, cold-hammered for texture and finished entirely by hand. Light enough for all-day wear.',
      manifest:'PVM-9C44-118E', window:'Aug 6 – Aug 7, 2026',
      checkpoints:[['Raw brass wire','Aug 6, 10:15 AM'],['Shaping hoops','Aug 6, 11:02 AM'],['Cold hammering','Aug 7, 3:30 PM'],['Finishing &amp; polish','Aug 7, 4:45 PM'],['Finished pair','Aug 7, 5:10 PM']]},
    {id:'board', name:'Walnut serving board', sellerId:'marcus', category:'wood', price:88, score:5,
      img:'5964663', alt:'Walnut serving board, product photo',
      desc:'Cut and shaped from a single reclaimed walnut plank, finished with food-safe mineral oil. No two boards are alike.',
      manifest:'PVM-5E27-804B', window:'Aug 3 – Aug 5, 2026',
      checkpoints:[['Selecting the walnut plank','Aug 3, 8:00 AM'],['Rough cutting','Aug 3, 9:40 AM'],['Shaping &amp; sanding','Aug 4, 2:00 PM'],['Mineral oil finish','Aug 5, 10:00 AM'],['Finished board','Aug 5, 10:35 AM']]},
    {id:'shelf', name:'Live-edge oak shelf', sellerId:'marcus', category:'wood', price:145, score:4,
      img:'21613161/free-photo-of-a-wooden-shelf-with-decorations-hanging-on-the-wall', alt:'Live-edge oak shelf, product photo',
      desc:'A single live-edge oak slab, sanded smooth and sealed, with the bark line left intact. Mounts with a hidden French cleat.',
      manifest:'PVM-6B90-273F', window:'Jul 30 – Aug 1, 2026',
      checkpoints:[['Selecting the live-edge slab','Jul 30, 9:00 AM'],['Rough cutting','Jul 30, 10:15 AM'],['Sanding &amp; sealing','Jul 31, 1:20 PM'],['Mounting hardware fit','Aug 1, 9:45 AM'],['Finished shelf','Aug 1, 10:20 AM']]},
    {id:'bowl', name:'Hand-turned maple bowl', sellerId:'tomas', category:'wood', price:76, score:5,
      img:'6944927', alt:'Hand-turned maple bowl, product photo',
      desc:'Turned on a foot-powered lathe from a single block of maple, then hand-sanded through eight grits.',
      manifest:'PVM-2D65-517C', window:'Aug 8 – Aug 10, 2026',
      checkpoints:[['Selecting the maple block','Aug 8, 7:45 AM'],['Rough turning','Aug 8, 8:30 AM'],['Fine turning','Aug 9, 1:00 PM'],['Hand sanding (8 grits)','Aug 10, 11:15 AM'],['Finished bowl','Aug 10, 11:50 AM']]},
    {id:'mugs', name:'Stoneware mug set (4pc)', sellerId:'priya', category:'ceramic', price:54, score:4,
      img:'6312177', alt:'Stoneware mug set, product photo',
      desc:'Four wheel-thrown stoneware mugs, glazed in small batches and fired to cone 6 for durability.',
      manifest:'PVM-8F31-405A', window:'Jul 22 – Aug 2, 2026',
      checkpoints:[['Wedging the clay','Jul 22, 9:00 AM'],['Throwing (x4 mugs)','Jul 22, 10:30 AM'],['Trimming &amp; handles','Jul 24, 2:15 PM'],['Glazing','Jul 29, 9:30 AM'],['Kiln-fired &amp; finished','Aug 2, 4:00 PM']]},
    {id:'vase', name:'Wheel-thrown vase', sellerId:'priya', category:'ceramic', price:68, score:5,
      img:'33126633/free-photo-of-minimalist-ceramic-vases-on-wooden-tray', alt:'Wheel-thrown vase, product photo',
      desc:'A single wheel-thrown vase in a matte, food-safe glaze. Each one varies slightly in shape and finish.',
      manifest:'PVM-1C78-936E', window:'Jul 25 – Aug 3, 2026',
      checkpoints:[['Wedging the clay','Jul 25, 9:15 AM'],['Throwing on the wheel','Jul 25, 10:00 AM'],['Trimming','Jul 27, 1:45 PM'],['Glazing','Jul 30, 9:00 AM'],['Kiln-fired &amp; finished','Aug 3, 3:30 PM']]},
    {id:'planter', name:'Speckled ceramic planter', sellerId:'junko', category:'ceramic', price:42, score:3,
      img:'29520386/free-photo-of-organized-display-of-colorful-ceramic-plant-pots', alt:'Speckled ceramic planter, product photo',
      desc:'Wood-fired stoneware with a natural speckled finish from ash in the kiln. Drainage hole included, no saucer.',
      manifest:'PVM-4A52-729D', window:'Jul 18 – Jul 28, 2026',
      checkpoints:[['Wedging the clay','Jul 18, 8:30 AM'],['Throwing on the wheel','Jul 18, 9:20 AM'],['Trimming &amp; drainage hole','Jul 20, 12:00 PM'],['Ash-speckle prep','Jul 23, 10:00 AM'],['Wood-fired &amp; finished','Jul 28, 5:00 PM']]},
    {id:'drops', name:'Hammered copper drop earrings', sellerId:'elena', category:'jewelry', price:68, score:4,
      img:'19408441', alt:'Hammered copper drop earrings, product photo',
      desc:'Each disc is hand-hammered on a steel stake to catch light, then oxidized and hand-polished to bring out the copper’s warmth.',
      manifest:'PVM-4C1A-77F0', window:'Jul 15 – Jul 18, 2026',
      checkpoints:[['Copper sheet cut &amp; annealed','Jul 15, 9:00 AM'],['Discs hammered to shape','Jul 15, 11:30 AM'],['Ear wires formed','Jul 16, 10:15 AM'],['Oxidized &amp; polished','Jul 17, 1:45 PM'],['Finished pair photographed','Jul 18, 3:00 PM']]},
    {id:'spoons', name:'Hand-carved serving spoon set', sellerId:'tomas', category:'wood', price:78, score:5,
      img:'10204219', alt:'Hand-carved wooden serving spoons, product photo',
      desc:'Roughed out with a hatchet from a single walnut blank, then carved to final shape with a hook knife and finished with food-safe walnut oil.',
      manifest:'PVM-9E2B-4410', window:'Jul 20 – Jul 25, 2026',
      checkpoints:[['Walnut blank split &amp; roughed with hatchet','Jul 20, 8:30 AM'],['Bowl carved with hook knife','Jul 21, 10:00 AM'],['Handle shaped &amp; sanded','Jul 22, 2:20 PM'],['Food-safe oil applied','Jul 23, 11:00 AM'],['Finished set photographed','Jul 24, 4:00 PM']]},
    {id:'teapot', name:'Wheel-thrown stoneware teapot', sellerId:'priya', category:'ceramic', price:118, score:4,
      img:'27682072', alt:'Wheel-thrown stoneware teapot, product photo',
      desc:'Thrown in three parts — body, spout, and lid — on the wheel, then joined leather-hard before a single dip in a hand-mixed ash glaze.',
      manifest:'PVM-1F6C-88A3', window:'Jul 26 – Aug 1, 2026',
      checkpoints:[['Clay wedged &amp; centered','Jul 26, 9:00 AM'],['Body, spout &amp; lid thrown','Jul 26, 11:45 AM'],['Parts joined leather-hard','Jul 27, 3:00 PM'],['Bisque fired &amp; glazed','Jul 29, 10:30 AM'],['Glaze fired &amp; photographed','Aug 1, 1:00 PM']]},
    {id:'satchel', name:'Full-grain leather satchel', sellerId:'otis', category:'leather', price:245, score:5,
      img:'31661556', alt:'Full-grain leather satchel, product photo',
      desc:'Cut from a single full-grain hide and saddle-stitched by hand with waxed thread; brass hardware is set with a hand press, not glued.',
      manifest:'PVM-3A7D-902C', window:'Jul 15 – Jul 22, 2026',
      checkpoints:[['Full-grain hide selected &amp; inspected','Jul 15, 9:10 AM'],['Pattern chalked &amp; cut','Jul 16, 10:30 AM'],['Panels skived &amp; glued','Jul 17, 1:15 PM'],['Saddle-stitched by hand','Jul 19, 11:00 AM'],['Edges burnished, hardware set &amp; photographed','Jul 22, 3:45 PM']]},
    {id:'wallet', name:'Hand-stitched bifold wallet', sellerId:'otis', category:'leather', price:62, score:4,
      img:'33428339', alt:'Hand-stitched bifold leather wallet, product photo',
      desc:'Hand-cut from a single piece of vegetable-tanned leather, folded and stitched with a diamond awl so there’s no bulky lining.',
      manifest:'PVM-6B1E-410F', window:'Jul 23 – Jul 26, 2026',
      checkpoints:[['Leather selected &amp; inspected','Jul 23, 9:00 AM'],['Card slots skived &amp; cut','Jul 23, 11:20 AM'],['Diamond awl holes punched','Jul 24, 10:00 AM'],['Hand-stitched with waxed thread','Jul 24, 2:30 PM'],['Edges burnished &amp; photographed','Jul 26, 12:00 PM']]},
    {id:'belt', name:'Vegetable-tanned leather belt', sellerId:'otis', category:'leather', price:88, score:4,
      img:'33495913', alt:'Vegetable-tanned leather belt, product photo',
      desc:'Cut from a single strip of eight-ounce vegetable-tanned leather, hand-beveled at the edges, and finished with a solid brass buckle set with copper rivets.',
      manifest:'PVM-8D4F-235A', window:'Jul 27 – Jul 30, 2026',
      checkpoints:[['Strip cut to width from full hide','Jul 27, 9:15 AM'],['Edges beveled &amp; sanded','Jul 27, 12:00 PM'],['Holes punched &amp; buckle end skived','Jul 28, 10:45 AM'],['Dyed &amp; hand-burnished','Jul 29, 2:00 PM'],['Buckle riveted &amp; photographed','Jul 30, 11:30 AM']]},
    {id:'tote', name:'Hand-stitched leather market tote', sellerId:'otis', category:'leather', price:210, score:5,
      img:'26316185', alt:'Hand-stitched leather tote bag, product photo',
      desc:'Body panels are cut from a single hide to keep the grain consistent, hand-riveted at the stress points, and the straps are cut long enough to be re-stitched for a lifetime of use.',
      manifest:'PVM-1C9E-576B', window:'Jul 31 – Aug 6, 2026',
      checkpoints:[['Hide laid out &amp; panels marked','Jul 31, 8:45 AM'],['Panels cut &amp; skived','Jul 31, 11:30 AM'],['Base &amp; sides hand-stitched','Aug 2, 1:00 PM'],['Straps attached &amp; riveted','Aug 4, 10:15 AM'],['Finished tote conditioned &amp; photographed','Aug 6, 3:30 PM']]},
    {id:'throw', name:'Hand-woven wool throw blanket', sellerId:'mira', category:'textile', price:165, score:5,
      img:'6634551', alt:'Hand-woven wool throw blanket, product photo',
      desc:'Handspun wool is warped onto a floor loom by hand, thread by thread, then woven on foot-powered treadles and finished with a hand-twisted fringe.',
      manifest:'PVM-2F8A-663D', window:'Jul 15 – Jul 23, 2026',
      checkpoints:[['Wool carded &amp; hand-spun','Jul 15, 9:00 AM'],['Loom warped thread by thread','Jul 16, 10:30 AM'],['Weaving begun on treadle loom','Jul 17, 2:00 PM'],['Cut from the loom &amp; fringe twisted','Jul 21, 11:00 AM'],['Steamed flat &amp; photographed','Jul 23, 1:30 PM']]},
    {id:'hanging', name:'Woven fiber wall hanging', sellerId:'mira', category:'textile', price:92, score:4,
      img:'6021663', alt:'Woven fiber wall hanging, product photo',
      desc:'Woven on a small frame loom with hand-dyed wool and cotton roving, then finished with hand-tied fringe and a driftwood dowel.',
      manifest:'PVM-5A3C-701E', window:'Jul 24 – Jul 29, 2026',
      checkpoints:[['Wool hand-dyed in small-batch dye pot','Jul 24, 9:15 AM'],['Frame loom warped','Jul 24, 12:00 PM'],['Weft woven row by row','Jul 25, 10:00 AM'],['Fringe hand-tied &amp; trimmed','Jul 27, 2:15 PM'],['Mounted on dowel &amp; photographed','Jul 29, 11:45 AM']]},
    {id:'scarf', name:'Handwoven merino wool scarf', sellerId:'mira', category:'textile', price:74, score:4,
      img:'10651187', alt:'Handwoven merino wool scarf, product photo',
      desc:'Woven from hand-dyed merino on a rigid heddle loom, then wet-finished by hand to full the fibers and soften the drape.',
      manifest:'PVM-7E0B-482F', window:'Jul 30 – Aug 4, 2026',
      checkpoints:[['Merino yarn hand-dyed','Jul 30, 9:00 AM'],['Rigid heddle loom warped','Jul 30, 11:30 AM'],['Scarf woven','Jul 31, 3:00 PM'],['Wet-finished &amp; fulled by hand','Aug 2, 10:00 AM'],['Pressed, fringed &amp; photographed','Aug 4, 1:00 PM']]},
    {id:'runner', name:'Hand-woven cotton table runner', sellerId:'mira', category:'textile', price:54, score:3,
      img:'22456254', alt:'Hand-woven cotton table runner, product photo',
      desc:'Woven on a floor loom in a doubled cotton weave, hemmed by hand, and pressed flat before it leaves the studio.',
      manifest:'PVM-9C5D-114A', window:'Aug 5 – Aug 9, 2026',
      checkpoints:[['Cotton warp measured &amp; wound','Aug 5, 9:00 AM'],['Loom dressed','Aug 5, 11:00 AM'],['Runner woven','Aug 6, 2:00 PM'],['Hems hand-sewn','Aug 8, 10:30 AM'],['Pressed &amp; photographed','Aug 9, 12:15 PM']]},
    {id:'tumbler', name:'Handblown glass tumbler set', sellerId:'finn', category:'glass', price:92, score:4,
      img:'32176015', alt:'Handblown glass tumbler set, product photo',
      desc:'Gathered from the furnace and shaped freehand with jacks and a wet block, each tumbler is punctured off the pipe and fire-polished before annealing overnight.',
      manifest:'PVM-4D2A-830C', window:'Jul 15 – Jul 18, 2026',
      checkpoints:[['Furnace gather taken on blowpipe','Jul 15, 8:00 AM'],['Shaped with jacks &amp; wet block','Jul 15, 8:40 AM'],['Blown to final form','Jul 15, 9:10 AM'],['Punctured off pipe &amp; fire-polished','Jul 15, 9:45 AM'],['Annealed overnight &amp; photographed','Jul 16, 10:00 AM']]},
    {id:'ornament', name:'Handblown glass ornament', sellerId:'finn', category:'glass', price:36, score:3,
      img:'36605413', alt:'Handblown glass ornament, product photo',
      desc:'A small gather is shaped at the bench and free-blown into a bubble, then hand-finished with a hook for hanging before it goes into the kiln to anneal.',
      manifest:'PVM-6F1B-729D', window:'Jul 19 – Jul 21, 2026',
      checkpoints:[['Small gather taken','Jul 19, 9:00 AM'],['Bubble blown &amp; shaped','Jul 19, 9:20 AM'],['Color rolled in as frit','Jul 19, 9:35 AM'],['Hanging hook attached','Jul 19, 10:00 AM'],['Annealed &amp; photographed','Jul 21, 11:00 AM']]},
    {id:'pitcher', name:'Handblown glass pitcher', sellerId:'finn', category:'glass', price:155, score:5,
      img:'10508269', alt:'Handblown glass pitcher, product photo',
      desc:'Blown as a single piece with a pulled spout and hand-applied handle, then annealed slowly overnight so the thick base won’t crack.',
      manifest:'PVM-8A6C-345E', window:'Jul 22 – Jul 28, 2026',
      checkpoints:[['Furnace gathered &amp; shaped','Jul 22, 8:15 AM'],['Body blown to volume','Jul 22, 9:00 AM'],['Spout pulled by hand','Jul 22, 9:30 AM'],['Handle pulled &amp; applied','Jul 22, 9:50 AM'],['Annealed overnight &amp; photographed','Jul 24, 1:00 PM']]},
    {id:'paperweight', name:'Solid glass paperweight', sellerId:'finn', category:'glass', price:58, score:4,
      img:'9343599', alt:'Solid glass paperweight, product photo',
      desc:'Layers of colored glass frit are melted into a clear gather and turned by hand at the bench until the color settles before the piece is ground flat on the bottom.',
      manifest:'PVM-2B9F-618A', window:'Jul 29 – Aug 2, 2026',
      checkpoints:[['Color frit selected &amp; melted in','Jul 29, 9:00 AM'],['Clear glass gathered over color','Jul 29, 9:20 AM'],['Shaped round at the bench','Jul 29, 9:45 AM'],['Annealed overnight','Jul 30, 9:00 AM'],['Bottom ground flat &amp; photographed','Aug 2, 11:00 AM']]},
    {id:'tapers', name:'Hand-dipped beeswax taper candles', sellerId:'wren', category:'candle', price:32, score:3,
      img:'36898013', alt:'Hand-dipped beeswax taper candles, product photo',
      desc:'Cotton wicks are dipped by hand into a vat of melted beeswax dozens of times, building up layers until each taper reaches its final thickness.',
      manifest:'PVM-3E7A-501B', window:'Jul 15 – Jul 17, 2026',
      checkpoints:[['Beeswax melted &amp; wicks cut','Jul 15, 9:00 AM'],['First dipping passes','Jul 15, 9:30 AM'],['Layers built up through repeated dipping','Jul 15, 10:15 AM'],['Tapers trimmed &amp; straightened','Jul 15, 11:00 AM'],['Cured &amp; photographed','Jul 17, 2:00 PM']]},
    {id:'ember', name:'Hand-poured soy jar candle', sellerId:'wren', category:'candle', price:34, score:3,
      img:'5933780', alt:'Hand-poured soy candle in a glass jar, product photo',
      desc:'Soy wax is melted and hand-poured at a set temperature, with the wick and fragrance load weighed on a scale rather than eyeballed for a clean, even burn.',
      manifest:'PVM-5C2D-849F', window:'Jul 18 – Jul 20, 2026',
      checkpoints:[['Soy wax weighed &amp; melted','Jul 18, 9:00 AM'],['Fragrance oil weighed &amp; blended in','Jul 18, 9:30 AM'],['Wick centered &amp; wax poured','Jul 18, 9:45 AM'],['Cooled &amp; top layer repoured','Jul 18, 1:00 PM'],['Trimmed, labeled &amp; photographed','Jul 20, 11:00 AM']]},
    {id:'latherbar', name:'Cold-process soap bar trio', sellerId:'wren', category:'candle', price:30, score:4,
      img:'6930879', alt:'Trio of cold-process soap bars, product photo',
      desc:'Cold-processed in small batches with a hand-mixed lye solution, cut into bars with a wire cutter, and cured on cedar racks for weeks until the bars harden fully.',
      manifest:'PVM-7F4B-926C', window:'Jul 21 – Aug 11, 2026',
      checkpoints:[['Oils measured &amp; lye solution mixed','Jul 21, 9:00 AM'],['Soap poured to trace &amp; molded','Jul 21, 10:30 AM'],['Unmolded &amp; cut into bars','Jul 23, 9:00 AM'],['Curing on cedar racks','Jul 30, 9:00 AM'],['Cured bars trimmed &amp; photographed','Aug 11, 10:00 AM']]},
    {id:'soakjar', name:'Oatmeal &amp; honey bath soak', sellerId:'wren', category:'candle', price:29, score:3,
      img:'4426560', alt:'Jar of oatmeal and honey bath soak, product photo',
      desc:'Rolled oats are milled fine and blended by hand with dried honey granules and calendula petals, then jarred and labeled one batch at a time.',
      manifest:'PVM-1A8E-370D', window:'Aug 12 – Aug 16, 2026',
      checkpoints:[['Oats milled fine','Aug 12, 9:00 AM'],['Dried botanicals measured &amp; blended','Aug 12, 10:00 AM'],['Batch mixed by hand','Aug 12, 10:30 AM'],['Jarred &amp; weighed','Aug 13, 9:00 AM'],['Labeled &amp; photographed','Aug 16, 11:00 AM']]}
  ];

  var REVIEWS = [
    {productId:'cuff', reviewerName:'Maren K.', rating:5, relativeDate:'3 weeks ago', verifiedPurchase:true,
      text:'The patina on this copper cuff has already started shifting after a few weeks of wear, which is exactly the kind of change I was hoping for. I wear it stacked with an old bangle from my grandmother and the two metals play off each other nicely. Ordered it as a birthday gift to myself — no regrets.'},
    {productId:'rings', reviewerName:'Daniel O.', rating:5, relativeDate:'2 months ago', verifiedPurchase:true,
      text:'I watched the verification clip before it even shipped and you can see the maker hand-forming the band right there in her shop, which made the wait feel worth it. The ring itself is a little heavier than I expected, in a good way — it doesn’t feel like it’ll ever bend out of shape. Bought it for my partner’s birthday and she hasn’t taken it off since.'},
    {productId:'hoops', reviewerName:'Priya S.', rating:4, relativeDate:'5 days ago', verifiedPurchase:true,
      text:'These hoops are a nice weight, not too heavy on the ear, and the brass has a warm color that photographs beautifully. The clasp on one earring was slightly stiffer than the other at first, but a month later I’m still wearing them constantly.'},
    {productId:'rings', reviewerName:'Tom R.', rating:3, relativeDate:'6 weeks ago', verifiedPurchase:true,
      text:'Sizing is the only reason this isn’t five stars — the ring fits looser than the standard chart suggested, even though the engraving itself came out crisp with a nice matte finish. Provenmade’s support team walked me through a resize request quickly, so I’m optimistic round two will fit right.'},
    {productId:'board', reviewerName:'Ingrid H.', rating:5, relativeDate:'4 months ago', verifiedPurchase:true,
      text:'This walnut board stopped me mid-scroll with the cathedral grain running end to end, and there’s a shallow juice groove I wasn’t expecting at this price point. Since it was a wedding gift, I checked the proof score first, and seeing the actual sanding and oiling steps in the footage sealed it for me. It’s already the centerpiece of every cheese night we host.'},
    {productId:'shelf', reviewerName:'Malik J.', rating:5, relativeDate:'9 days ago', verifiedPurchase:true,
      text:'Mounted this oak shelf in my kitchen for cookbooks and it’s solid enough that I’m not worried about sag even fully loaded. You can still see the hand-planed marks on the underside if you look, which I actually like — it doesn’t pretend to be a factory piece. Took about twenty minutes to install with the included hardware.'},
    {productId:'bowl', reviewerName:'Rosa V.', rating:5, relativeDate:'7 months ago', verifiedPurchase:true,
      text:'Lighter in the hand than the photos suggested, this maple bowl has a soft, almost silvery grain that shifts depending on the light, and honestly the verification footage of it being turned on the lathe, shavings curling off in real time, is what finally got me to buy. It sits on the counter and holds fruit, though it gets touched more than it probably should.'},
    {productId:'board', reviewerName:'Colin D.', rating:4, relativeDate:'10 days ago', verifiedPurchase:true,
      text:'Beautiful board, deep color, and the beeswax finish smells great right out of the box. Shipping took longer than the estimate said, about ten days past the window, but the seller sent an update explaining the delay so I wasn’t left guessing. Worth the wait in the end.'},
    {productId:'mugs', reviewerName:'Naomi F.', rating:5, relativeDate:'2 weeks ago', verifiedPurchase:true,
      text:'No two spots on this mug’s glaze are quite alike — it pools into a deeper blue near the base and fades almost gray toward the rim. It holds heat well past the point my old mugs would’ve gone lukewarm. My mother-in-law asked where I got it within a week, which is basically the highest compliment I know how to pass along.'},
    {productId:'vase', reviewerName:'Fatima A.', rating:5, relativeDate:'5 weeks ago', verifiedPurchase:true,
      text:'Bought this vase for a friend who just moved into her first apartment, and the unglazed base against the glossy speckled body is such a nice contrast in person. I’ll admit I got a little obsessed with the proof score and ended up watching the whole trimming process before checkout, which is not something I usually do. She texted me a photo of it on her mantel the day it arrived.'},
    {productId:'planter', reviewerName:'Greg N.', rating:4, relativeDate:'3 days ago', verifiedPurchase:true,
      text:'Good weight, drainage hole properly sized, and the speckled stoneware matches almost everything on my patio — there’s a small kiln mark on the underside near the base, invisible unless you tip it over, so I’m not counting it against the piece. My rosemary seems happy in it so far.'},
    {productId:'wallet', reviewerName:'Beatriz C.', rating:5, relativeDate:'6 months ago', verifiedPurchase:true,
      text:'A month of living in my back pocket and this wallet’s vegetable-tanned leather has already gone a warm honey color — it’s only going to get better with age. Stitching is tight and even along every edge, no loose threads anywhere. I got it for my dad’s sixtieth birthday and he keeps pulling it out just to look at it.'},
    {productId:'tote', reviewerName:'Owen S.', rating:5, relativeDate:'1 month ago', verifiedPurchase:true,
      text:'This tote is stiffer than I expected on arrival but it’s already softening up around the handles after daily use. Watching the maker skive and hand-stitch the gusset in the verification video made the proof score make total sense to me — you can see exactly why the corners hold their shape. Fits my laptop, a water bottle, and a change of shoes without straining the seams.'},
    {productId:'belt', reviewerName:'Sanjay P.', rating:4, relativeDate:'11 days ago', verifiedPurchase:true,
      text:'Solid full-grain belt, holds a crease at the buckle nicely, and the edges are burnished clean, though it runs a touch long against my usual size so there are a couple of extra holes I’ll probably never use. Otherwise no complaints — this’ll outlast every belt I’ve bought at a mall store.'},
    {productId:'runner', reviewerName:'Wren E.', rating:5, relativeDate:'7 weeks ago', verifiedPurchase:true,
      text:'You only really notice the herringbone in this runner’s weave when the light hits it sideways, which feels like a nice reward for looking twice. Colors are exactly what was pictured, a kind of faded rust and oatmeal, nothing garish. Six weeks on our dining table now and it hasn’t shed or pilled at all.'},
    {productId:'hanging', reviewerName:'Leilani K.', rating:5, relativeDate:'3 months ago', verifiedPurchase:true,
      text:'I don’t usually care about behind-the-scenes stuff, but the verification photos of this wall hanging on the loom, mid-weave, were genuinely beautiful on their own. The fringe is hand-knotted and even, and the cream wool has flecks of undyed fiber running through it. Hung it above the crib and it’s the softest thing in the room, visually and literally.'},
    {productId:'throw', reviewerName:'Marcus T.', rating:5, relativeDate:'2 days ago', verifiedPurchase:true,
      text:'Heavier than a typical throw, which is exactly what I wanted for the foot of our bed in winter, with a plaid pattern that lines up cleanly at the seam where two panels were joined and a faint lanolin smell that fades a little more with each wash.'},
    {productId:'scarf', reviewerName:'Delphine R.', rating:3, relativeDate:'8 months ago', verifiedPurchase:true,
      text:'Soft alpaca-blend feel, a rich forest green true to the listing photos, and a nice drape when it’s actually on — no complaints about the scarf itself. It arrived a little wrinkled from how tightly it was folded for shipping, though a quick steam sorted that out and I’d still buy from this maker again.'},
    {productId:'tumbler', reviewerName:'Jack W.', rating:5, relativeDate:'1 week ago', verifiedPurchase:true,
      text:'Ordered a set of four tumblers, and each one has slightly different swirl patterns in the glass, which the listing’s proof score and process photos had already prepared me for. They’re heavier than machine-made glassware, almost like holding river stones, and we’ve already retired our everyday cups in favor of these.'},
    {productId:'pitcher', reviewerName:'Susan L.', rating:5, relativeDate:'4 weeks ago', verifiedPurchase:true,
      text:'From clear at the base to a soft amber at the lip, the color gradient in this pitcher is even more striking in person than in the listing photos, and it’s become the default home for whatever flowers are cheapest at the farmers market that week.'},
    {productId:'pitcher', reviewerName:'Andre B.', rating:4, relativeDate:'5 months ago', verifiedPurchase:true,
      text:'Nice hand-blown pitcher, pours cleanly without dribbling down the side, which is rarer than it should be, and there’s a tiny air bubble trapped in the handle that I actually think adds character. Handwashing only, as advertised, and worth the extra care.'},
    {productId:'ember', reviewerName:'Carla M.', rating:5, relativeDate:'12 days ago', verifiedPurchase:true,
      text:'Burns evenly all the way to the edges of the jar, no tunneling at all after two full burns, and the cedar-and-clove scent is subtle when unlit but fills the room without being overpowering once it’s going. Bought three as hostess gifts and kept one for myself — should’ve ordered four.'},
    {productId:'latherbar', reviewerName:'Devon P.', rating:5, relativeDate:'9 weeks ago', verifiedPurchase:true,
      text:'The oatmeal-honey bar soap smells warm rather than sweet, and it’s held up well without turning to mush in the shower like some handmade soaps do. I watched the pour and cure process in the verification footage out of curiosity, and it explained why the bars are cut a little differently each batch. My skin feels noticeably less dry after switching over a few weeks ago.'},
    {productId:'ember', reviewerName:'Yuki T.', rating:2, relativeDate:'4 days ago', verifiedPurchase:true,
      text:'The scent is lovely, a soft sandalwood, but my candle arrived partially melted and re-solidified with the wick bent sideways, which I’m guessing happened from sitting in a hot delivery truck. Not the maker’s fault exactly, but I wish there’d been sturdier packaging for summer shipping. I reached out to swap it and I’m waiting to hear back.'}
  ];

  var TESTIMONIALS = [
    {name:'Silas Bergman', craft:'Woodworker, walnut and oak',
      quote:'People used to ask if my boards were really hand-planed or just sanded smooth somewhere overseas, and I never had a good way to prove it beyond my word. Now the verification footage does that talking for me, and buyers tell me they watched it before they even checked out.'},
    {name:'Marisol Reyes', craft:'Stoneware ceramicist',
      quote:'Every mug that comes out of my kiln is a little different depending on how the shelf was loaded that day, and Provenmade is the first place I’ve sold where that variation reads as the point instead of a complaint. Building trust like that used to take a whole summer of craft fairs — now it happens with a camera running in the corner of my studio.'},
    {name:'Terrence Ashby', craft:'Metalsmith, copper and silver',
      quote:'I used to lose sales to cast pieces that looked hand-forged in a photo but weren’t anything close. On Provenmade, people can actually watch me hammer a cuff flat on the anvil before they buy it, so the customers who do buy already understand what they’re paying for.'}
  ];

  var PRESS_QUOTE = {source:'The Burl &amp; Awl, a small newsletter for independent makers',
    quote:'In a sea of vague “handcrafted” claims, Provenmade is the rare marketplace that actually shows its work.'};

  function img(id, w){ var n = id.split('/')[0]; return 'https://images.pexels.com/photos/' + n + '/pexels-photo-' + n + '.jpeg?auto=compress&cs=tinysrgb&w=' + (w||600); }
  function money(n){ return '$' + n.toFixed(0); }
  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function productById(id){ return PRODUCTS.filter(function(p){return p.id===id;})[0]; }
  function sellerById(id){ return SELLERS.filter(function(s){return s.id===id;})[0]; }
  function catLabel(id){ var c = CATEGORIES.filter(function(c){return c.id===id;})[0]; return c ? c.label : id; }
  function reviewsFor(id){ return REVIEWS.filter(function(r){return r.productId===id;}); }
  function avgRating(id){ var list = reviewsFor(id); if(!list.length) return null; return list.reduce(function(s,r){return s+r.rating;},0) / list.length; }
  function starStr(rating){ var r = Math.round(rating); var s = ''; for(var i=1;i<=5;i++){ s += (i<=r ? '★' : '☆'); } return s; }

  /* ===================== STATE ===================== */
  var state = {
    shopQuery:'', shopCategory:'all', shopSort:'featured',
    cart: [],                       // [{id, qty}]
    wishlist: JSON.parse(localStorage.getItem('pm_wishlist') || '[]'),
    account: JSON.parse(localStorage.getItem('pm_account') || 'null'),
    checkout: { step:1, shipping:{}, payment:{}, orderId:null },
    sellDemoStep: 1
  };
  function saveWishlist(){ localStorage.setItem('pm_wishlist', JSON.stringify(state.wishlist)); }
  function saveAccount(){ localStorage.setItem('pm_account', JSON.stringify(state.account)); }

  /* ===================== ROUTER ===================== */
  function parseHash(){
    var raw = location.hash.replace(/^#\/?/, '');
    var qIndex = raw.indexOf('?');
    var query = {};
    if (qIndex !== -1){
      raw.slice(qIndex+1).split('&').forEach(function(pair){
        if(!pair) return;
        var kv = pair.split('=');
        query[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]||'');
      });
      raw = raw.slice(0, qIndex);
    }
    var parts = raw.split('/').filter(Boolean);
    return {parts:parts, query:query};
  }

  function getViewHtml(){
    var r = parseHash();
    var p = r.parts, q = r.query;
    if (p.length===0) return viewHome();
    if (p[0]==='shop'){ if(q.cat) state.shopCategory = q.cat; return viewShop(); }
    if (p[0]==='product') return viewProduct(p[1]);
    if (p[0]==='certificate') return viewCertificate(p[1]);
    if (p[0]==='seller') return viewSeller(p[1]);
    if (p[0]==='about') return viewAbout();
    if (p[0]==='sell') return viewSell();
    if (p[0]==='wishlist') return viewWishlist();
    if (p[0]==='checkout') return viewCheckout();
    return viewNotFound();
  }

  function renderRoute(){
    var app = document.getElementById('app');
    app.classList.remove('in');
    app.innerHTML = getViewHtml();
    window.scrollTo({top:0, behavior:'instant'});
    requestAnimationFrame(function(){ app.classList.add('in'); });
    updateNavActive();
    updateHeaderCounts();
    renderCartDrawer();
    afterRenderHooks();
  }

  function refreshView(preserveSearchFocus){
    var app = document.getElementById('app');
    var active = document.activeElement;
    var wasSearch = preserveSearchFocus && active && active.id === 'shopSearch';
    var selStart = wasSearch ? active.selectionStart : null;
    app.innerHTML = getViewHtml();
    updateHeaderCounts();
    afterRenderHooks();
    if (wasSearch){
      var el = document.getElementById('shopSearch');
      if (el){ el.focus(); if(selStart!=null) el.setSelectionRange(selStart, selStart); }
    }
  }

  function afterRenderHooks(){
    // nothing extra for now; placeholder for view-specific post-render wiring
  }

  function updateNavActive(){
    var r = parseHash();
    var top = r.parts[0] || '';
    document.querySelectorAll('#mainNav a').forEach(function(a){
      a.classList.toggle('active', a.dataset.route === top);
    });
  }

  window.addEventListener('hashchange', renderRoute);
  window.addEventListener('DOMContentLoaded', function(){
    renderRoute();
    updateHeaderCounts();
    renderCartDrawer();
    renderAccountArea();
  });

  /* ===================== VIEWS ===================== */

  function statBand(){
    var avgScore = Math.round(PRODUCTS.reduce(function(s,p){return s+p.score;},0) / PRODUCTS.length / 5 * 100);
    return '' +
      '<div class="stat-band"><div class="container stat-row">' +
        '<div><b>' + PRODUCTS.length + '</b><span>Verified listings</span></div>' +
        '<div><b>' + SELLERS.length + '</b><span>Independent makers</span></div>' +
        '<div><b>' + avgScore + '%</b><span>Average proof score</span></div>' +
      '</div></div>';
  }

  function productCard(p){
    var s = sellerById(p.sellerId);
    var saved = state.wishlist.indexOf(p.id) !== -1;
    return '' +
      '<div class="pcard" data-category="' + p.category + '">' +
        '<div class="pcard-imgwrap">' +
          '<a class="pcard-img" href="#/product/' + p.id + '"><img src="' + img(p.img,500) + '" alt="' + esc(p.alt) + '" loading="lazy"></a>' +
          '<button class="heart-btn' + (saved?' saved':'') + '" aria-label="Save to wishlist" data-wish="' + p.id + '" onclick="PM.toggleWishlistEl(this)">' +
            '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>' +
          '</button>' +
        '</div>' +
        '<div class="pcard-b">' +
          '<a class="title" href="#/product/' + p.id + '">' + esc(p.name) + '</a>' +
          '<a class="maker" href="#/seller/' + s.id + '">by ' + esc(s.name) + '</a>' +
          '<div class="pcard-foot"><span class="price">' + money(p.price) + '</span><span class="chip">' + p.score + '/5 verified</span></div>' +
          '<button class="btn btn-outline pcard-add" data-add="' + p.id + '" onclick="PM.addToCartEl(this)">Add to cart</button>' +
        '</div>' +
      '</div>';
  }

  function viewHome(){
    var featured = PRODUCTS.slice(0,6);
    var spotSellers = [sellerById('elena'), sellerById('marcus')];
    return '' +
    '<section class="hero"><div class="container hero-grid">' +
      '<div><span class="eyebrow">A verified handmade marketplace</span>' +
      '<h1 class="serif">Every listing, verifiably made by hand.</h1>' +
      '<p class="lede">Provenmade proves it with cryptographically signed process footage, captured while the maker actually makes it — not a checkbox anyone can fake.</p>' +
      '<div class="hero-actions"><a class="btn btn-primary btn-lg" href="#/shop">Browse verified makers</a><a class="btn btn-outline btn-lg" href="#/sell">Become a seller</a></div></div>' +
      '<div class="hero-media">' +
        '<div class="hero-img"><img src="' + img('35921025/free-photo-of-elegant-gold-bracelets-on-white-fabric-background',800) + '" alt="Hand-forged copper cuff bracelet, product photo"></div>' +
        '<div class="hero-badge"><div class="score-ring">5/5</div><div class="t">Proof score<b>Cryptographically signed</b></div></div>' +
        '<div class="hero-cap"><div><b>Hand-forged copper cuff</b><span>by Elena Marsh — $210</span></div></div>' +
      '</div>' +
    '</div></section>' +
    statBand() +
    '<div class="press-strip"><div class="container"><blockquote>“' + PRESS_QUOTE.quote + '”</blockquote><cite>— ' + PRESS_QUOTE.source + '</cite></div></div>' +
    '<section class="section container">' +
      '<div class="section-head"><h2 class="serif">Shop by craft</h2></div>' +
      '<div class="cats">' + CATEGORIES.map(function(c){
        var pct = Math.round(PRODUCTS.filter(function(p){return p.category===c.id;}).reduce(function(s,p){return s+p.score;},0) / (PRODUCTS.filter(function(p){return p.category===c.id;}).length*5) * 100);
        return '<a class="cat" href="#/shop?cat=' + c.id + '"><div class="cat-img"><img src="' + img(c.img,400) + '" alt="' + esc(c.alt) + '"></div><div class="cat-body"><b>' + c.label + '</b><span>' + pct + '% verified</span></div></a>';
      }).join('') + '</div>' +
    '</section>' +
    '<section class="section container">' +
      '<div class="section-head"><h2 class="serif">Fresh from verified makers</h2><a class="more" href="#/shop">See full shop →</a></div>' +
      '<div class="grid3">' + featured.map(productCard).join('') + '</div>' +
    '</section>' +
    '<section class="section container">' +
      '<div class="section-head"><h2 class="serif">How verification works</h2><a class="more" href="#/about">Read the details →</a></div>' +
      '<div class="how-teaser">' +
        '<div class="step"><div class="step-n">1</div><h4>Capture</h4><p>Sellers record 3–6 timestamped checkpoints while they actually make the item.</p></div>' +
        '<div class="step"><div class="step-n">2</div><h4>Cross-check</h4><p>An automated pass checks consistency across checkpoints to catch staged footage.</p></div>' +
        '<div class="step"><div class="step-n">3</div><h4>Proof score</h4><p>Buyers see a portable, per-listing score — not a seller-level badge.</p></div>' +
      '</div>' +
    '</section>' +
    '<section class="section container">' +
      '<div class="section-head"><h2 class="serif">Meet a few makers</h2><a class="more" href="#/shop">Browse all listings →</a></div>' +
      '<div class="maker-spot">' + spotSellers.map(function(s){
        return '<a class="maker-card card" href="#/seller/' + s.id + '"><div class="av-lg">' + s.initials + '</div><div><b>' + esc(s.name) + '</b><span class="craft">' + esc(s.craft) + ' · ' + esc(s.location) + '</span><p>' + esc(s.bio) + '</p></div></a>';
      }).join('') + '</div>' +
    '</section>' +
    '<section class="section container">' +
      '<div class="cta-band"><div><h3 class="serif">Make something? Prove it.</h3><p>Join as a seller and every listing you make carries its own verified proof score — no seller-level badge to game.</p></div><a class="btn btn-primary btn-lg" href="#/sell">Start selling</a></div>' +
    '</section>';
  }

  function viewShop(){
    var q = state.shopQuery.trim().toLowerCase();
    var list = PRODUCTS.filter(function(p){
      var matchesCat = state.shopCategory==='all' || p.category===state.shopCategory;
      var s = sellerById(p.sellerId);
      var hay = (p.name + ' ' + s.name + ' ' + catLabel(p.category)).toLowerCase();
      var matchesQ = q==='' || hay.indexOf(q) !== -1;
      return matchesCat && matchesQ;
    });
    if (state.shopSort==='price-asc') list = list.slice().sort(function(a,b){return a.price-b.price;});
    else if (state.shopSort==='price-desc') list = list.slice().sort(function(a,b){return b.price-a.price;});
    else if (state.shopSort==='score') list = list.slice().sort(function(a,b){return b.score-a.score;});

    return '' +
    '<section class="section container">' +
      '<div class="section-head"><h2 class="serif">Shop all listings</h2><p>Search or filter by craft — every result carries its own verified process footage.</p></div>' +
      '<div class="shop-toolbar">' +
        '<div class="search-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>' +
          '<input id="shopSearch" type="text" placeholder="Search handmade goods…" value="' + esc(state.shopQuery) + '" oninput="PM.setShopQuery(this.value)"></div>' +
        '<div class="cat-chips">' +
          '<button class="cat-chip' + (state.shopCategory==='all'?' active':'') + '" data-cat="all" onclick="PM.setShopCategoryEl(this)">All</button>' +
          CATEGORIES.map(function(c){ return '<button class="cat-chip' + (state.shopCategory===c.id?' active':'') + '" data-cat="' + c.id + '" onclick="PM.setShopCategoryEl(this)">' + c.label + '</button>'; }).join('') +
        '</div>' +
        '<select class="sort-select" onchange="PM.setShopSort(this.value)">' +
          '<option value="featured"' + (state.shopSort==='featured'?' selected':'') + '>Featured</option>' +
          '<option value="price-asc"' + (state.shopSort==='price-asc'?' selected':'') + '>Price: low to high</option>' +
          '<option value="price-desc"' + (state.shopSort==='price-desc'?' selected':'') + '>Price: high to low</option>' +
          '<option value="score"' + (state.shopSort==='score'?' selected':'') + '>Highest proof score</option>' +
        '</select>' +
      '</div>' +
      '<p class="result-count">' + list.length + ' result' + (list.length===1?'':'s') + '</p>' +
      '<div class="grid3">' + (list.length ? list.map(productCard).join('') : '<div class="no-results">No listings match your search or filter. <br><button class="btn btn-outline" style="margin-top:14px;" onclick="PM.resetShop()">Clear filters</button></div>') + '</div>' +
    '</section>';
  }

  function viewProduct(id){
    var p = productById(id);
    if (!p) return viewNotFound();
    var s = sellerById(p.sellerId);
    var saved = state.wishlist.indexOf(p.id) !== -1;
    var related = PRODUCTS.filter(function(x){ return x.category===p.category && x.id!==p.id; }).slice(0,3);
    var prodReviews = reviewsFor(p.id);
    var avg = avgRating(p.id);
    var makerLine = 'by ' + esc(s.name) + (avg ? ' · ' + starStr(avg) + ' ' + avg.toFixed(1) + ' (' + prodReviews.length + ')' : ' · New listing');
    return '' +
    '<section class="section container">' +
      '<p class="crumb"><a href="#/">Home</a> / <a href="#/shop?cat=' + p.category + '">' + catLabel(p.category) + '</a> / ' + esc(p.name) + '</p>' +
      '<div class="pd-grid">' +
        '<div>' +
          '<div class="pd-main"><img src="' + img(p.img,800) + '" alt="' + esc(p.alt) + ', main product photo" id="pdMainImg"></div>' +
          '<div class="pd-strip">' + [0,1,2,3,4].map(function(i){ return '<button class="pd-thumb' + (i===0?' active':'') + '" onclick="PM.selectThumb(this)"><img src="' + img(p.img,200) + '" alt="' + esc(p.name) + ' detail view ' + (i+1) + '"></button>'; }).join('') + '</div>' +
        '</div>' +
        '<div>' +
          '<h1 class="pd-title serif">' + esc(p.name) + '</h1>' +
          '<a class="pd-maker" href="#/seller/' + s.id + '">' + makerLine + '</a>' +
          '<a class="proof-badge" href="#/certificate/' + p.id + '"><div class="ring">' + p.score + '/5</div><div class="txt"><b>Verified process</b><span>Tap to view certificate</span></div></a>' +
          '<p class="pd-price">' + money(p.price) + '</p>' +
          '<div class="variant-row"><div class="variant sel">Standard</div><div class="variant">Gift-wrapped (+$8)</div></div>' +
          '<div class="pd-actions">' +
            '<button class="btn btn-primary btn-block" data-add="' + p.id + '" onclick="PM.addToCartEl(this)">Add to cart</button>' +
            '<button class="btn btn-outline btn-block" data-buy="' + p.id + '" onclick="PM.buyNowEl(this)">Buy now</button>' +
            '<button class="heart-btn' + (saved?' saved':'') + '" aria-label="Save to wishlist" data-wish="' + p.id + '" onclick="PM.toggleWishlistEl(this)"><svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg></button>' +
          '</div>' +
          '<p class="pd-ship">Ships in 3–5 days · Free returns within 14 days</p>' +
          '<p class="pd-desc">' + esc(p.desc) + '</p>' +
          '<a class="seller-mini card" href="#/seller/' + s.id + '"><div class="av-lg" style="width:38px;height:38px;font-size:12px;">' + s.initials + '</div><div><b>' + esc(s.name) + '</b><span>' + s.verifiedRate + '% average proof score</span></div><span class="link">View shop →</span></a>' +
        '</div>' +
      '</div>' +
      (related.length ? '<div class="section-head" style="margin-top:10px;"><h2 class="serif">You might also like</h2></div><div class="grid3">' + related.map(productCard).join('') + '</div>' : '') +
      '<div class="reviews-section">' +
        '<div class="reviews-head"><h2 class="serif" style="margin:0;">Customer reviews</h2>' + (avg ? '<span class="reviews-avg">' + avg.toFixed(1) + '/5</span><span class="stars">' + starStr(avg) + '</span><span style="font-size:12px;color:var(--muted);">(' + prodReviews.length + ' review' + (prodReviews.length===1?'':'s') + ')</span>' : '') + '</div>' +
        (prodReviews.length ? prodReviews.map(function(r){
          return '<div class="review-card"><div class="review-card-head"><div><span class="review-name">' + esc(r.reviewerName) + '</span>' + (r.verifiedPurchase ? '<span class="review-badge">Verified purchase</span>' : '') + '</div><span class="review-date">' + esc(r.relativeDate) + '</span></div><div class="stars" style="margin-bottom:6px;">' + starStr(r.rating) + '</div><p class="review-text">' + esc(r.text) + '</p></div>';
        }).join('') : '<p class="no-reviews">No reviews yet for this listing.</p>') +
      '</div>' +
    '</section>';
  }

  function viewCertificate(id){
    var p = productById(id);
    if (!p) return viewNotFound();
    var s = sellerById(p.sellerId);
    return '' +
    '<section class="cert-wrap container">' +
      '<p class="crumb"><a href="#/product/' + p.id + '">← Back to ' + esc(p.name) + '</a></p>' +
      '<div class="cert">' +
        '<div class="cert-head"><div class="seal">✓</div><div><b>Verified process</b><span>' + esc(p.name) + '</span></div></div>' +
        '<div class="cert-body">' +
          '<div class="cert-grid">' +
            '<div class="cert-field"><span>Maker</span><b>' + esc(s.name) + '</b></div>' +
            '<div class="cert-field"><span>Category</span><b>' + catLabel(p.category) + '</b></div>' +
            '<div class="cert-field"><span>Manifest ID</span><code>' + p.manifest + '</code></div>' +
            '<div class="cert-field"><span>Capture window</span><b>' + p.window + '</b></div>' +
          '</div>' +
          p.checkpoints.map(function(cp,i){ return '<div class="cp-row"><div class="cp-left"><div class="cp-dot">' + (i+1) + '</div>' + cp[0] + '</div><span>' + cp[1] + '</span></div>'; }).join('') +
          '<div class="cert-note">This verifies that the process shown was captured on-device, in sequence, over real elapsed time. It does not verify artistic quality or claims made about materials — those remain the seller\'s responsibility.</div>' +
        '</div>' +
        '<div class="cert-foot"><span class="chip">' + p.score + '/5 proof score</span><button class="btn btn-outline" onclick="PM.toastCertNote()">Download certificate</button></div>' +
      '</div>' +
    '</section>';
  }

  function viewSeller(id){
    var s = sellerById(id);
    if (!s) return viewNotFound();
    var listings = PRODUCTS.filter(function(p){ return p.sellerId===s.id; });
    return '' +
    '<section class="container">' +
      '<p class="crumb" style="margin-top:20px;"><a href="#/shop">← All makers</a></p>' +
      '<div class="seller-head">' +
        '<div class="av-xl">' + s.initials + '</div>' +
        '<div><h1 class="serif">' + esc(s.name) + '</h1><p class="meta">' + esc(s.craft) + ' · ' + esc(s.location) + ' · Member since ' + s.memberSince + '</p><p class="bio">' + esc(s.bio) + '</p></div>' +
        '<div class="seller-stats"><div><b>' + listings.length + '</b><span>Listings</span></div><div><b>' + s.verifiedRate + '%</b><span>Avg. proof score</span></div></div>' +
      '</div>' +
    '</section>' +
    '<section class="section container">' +
      '<div class="section-head"><h2 class="serif">Listings by ' + esc(s.name) + '</h2></div>' +
      '<div class="grid3">' + listings.map(productCard).join('') + '</div>' +
    '</section>';
  }

  function viewAbout(){
    return '' +
    '<section class="about-hero container">' +
      '<h1 class="serif">How verification works</h1>' +
      '<p>Every listing on Provenmade carries proof it was actually made by hand — not a badge a seller applies for once, but a per-listing record anyone can check.</p>' +
    '</section>' +
    '<section class="container">' +
      '<div class="about-steps">' +
        '<div class="about-step card"><div class="step-n">1</div><h3>Capture</h3><p>Sellers record 3–6 timestamped checkpoints while they actually make the item — raw material, mid-process, and finished piece — signed on-device as they happen.</p></div>' +
        '<div class="about-step card"><div class="step-n">2</div><h3>Cross-check</h3><p>An automated pass checks consistency across checkpoints: elapsed time, sequence, and continuity — designed to catch footage that was staged or reused.</p></div>' +
        '<div class="about-step card"><div class="step-n">3</div><h3>Proof score</h3><p>Buyers see a portable, per-listing score out of 5 on every product page and a full certificate with timestamps — not a single seller-level badge.</p></div>' +
      '</div>' +
    '</section>' +
    '<section class="section container"><div class="section-head"><h2 class="serif">What our makers say</h2></div><div class="testi-grid">' + TESTIMONIALS.map(function(t){
      return '<div class="testi-card"><p>“' + esc(t.quote) + '”</p><div class="testi-who"><b>' + esc(t.name) + '</b><span>' + esc(t.craft) + '</span></div></div>';
    }).join('') + '</div></section>' +
    '<section class="section container" style="max-width:760px;">' +
      '<div class="section-head"><h2 class="serif">Frequently asked</h2></div>' +
      '<details class="faq" open><summary>Does verification guarantee the materials are what the seller claims?<span class="plus">+</span></summary><p>No. Verification confirms the process shown was captured on-device, in sequence, over real elapsed time — it does not verify claims about materials, origin, or quality. Those remain the seller\'s responsibility.</p></details>' +
      '<details class="faq"><summary>Can a seller fake the footage?<span class="plus">+</span></summary><p>The capture flow requires timestamped checkpoints signed on-device as they happen, and an automated pass checks consistency across them. It\'s designed to make staging meaningfully harder than on an unverified store — not to make it impossible.</p></details>' +
      '<details class="faq"><summary>What does the proof score mean?<span class="plus">+</span></summary><p>It\'s a per-listing score, not a seller-level badge. A seller with mostly 5/5 listings can still have one 3/5 listing if a checkpoint was skipped or the sequence looked inconsistent.</p></details>' +
      '<details class="faq"><summary>Is this a real, operating marketplace?<span class="plus">+</span></summary><p>No — Provenmade is a prototype built to explore the business concept. Nothing on this site processes real payments or ships real products.</p></details>' +
    '</section>' +
    '<section class="section container"><div class="cta-band"><div><h3 class="serif">See it in a real listing</h3><p>Every certificate on the site follows this same format — checkpoints, timestamps, and the same honest disclosure.</p></div><a class="btn btn-primary btn-lg" href="#/shop">Browse listings</a></div></section>';
  }

  function viewSell(){
    return '' +
    '<section class="section container sell-hero">' +
      '<div><span class="eyebrow">For makers</span><h1 class="serif">Sell on Provenmade</h1>' +
        '<p>List what you make, and let the process speak for itself. Every listing gets its own proof score — no seller-level badge to chase, no algorithm rewarding whoever games it best.</p>' +
        '<ul class="sell-points">' +
          '<li>Per-listing proof scores, not a store-wide rating you have to protect</li>' +
          '<li>Capture happens on your own schedule — 3 to 6 checkpoints, whenever you actually work</li>' +
          '<li>Buyers see a real certificate, not just a "handmade" checkbox</li>' +
        '</ul>' +
        '<button class="btn btn-primary btn-lg" onclick="PM.startSelling()">Start selling</button>' +
      '</div>' +
      '<div class="capture-demo">' +
        '<div class="progress-row"><b id="sellStepLabel">Checkpoint 1 of 5</b><div class="dots-row" id="sellDots"></div></div>' +
        '<div class="viewfinder"><div class="vf-grid"></div><div class="vf-flash" id="vfFlash"></div><div class="vf-tag"><span class="rec"></span>Preview — this is what a seller sees</div></div>' +
        '<p class="guidance" id="sellGuidance"></p>' +
        '<div class="capture-actions">' +
          '<button class="side-link" id="sellRetake" data-demo="retake" onclick="PM.sellDemoEl(this)">Retake</button>' +
          '<button class="cap-btn" aria-label="Capture" data-demo="capture" onclick="PM.sellDemoEl(this)"></button>' +
          '<button class="side-link" id="sellSkip" data-demo="skip" onclick="PM.sellDemoEl(this)">Skip checkpoint</button>' +
        '</div>' +
        '<div class="thumbs" id="sellThumbs"></div>' +
        '<p class="capture-preview-note">Illustrative only — no camera is accessed in this prototype.</p>' +
      '</div>' +
    '</section>';
  }

  var SELL_STEPS = ['Raw material','Rough shaping','Mid-process','Finishing','Finished piece'];
  function renderSellDemo(){
    var step = state.sellDemoStep;
    var dots = document.getElementById('sellDots');
    if (!dots) return;
    dots.innerHTML = [1,2,3,4,5].map(function(i){
      return '<div class="step-dot' + (i<step?' done':(i===step?' now':'')) + '"></div>';
    }).join('');
    document.getElementById('sellStepLabel').textContent = 'Checkpoint ' + step + ' of 5';
    document.getElementById('sellGuidance').textContent = 'Capture: ' + SELL_STEPS[step-1] + '. Keep the piece and your work surface in frame.';
    document.getElementById('sellThumbs').innerHTML = [1,2,3,4,5].map(function(i){
      return '<div class="thumb' + (i<step?' done':(i===step?' now':' pending')) + '"></div>';
    }).join('');
    document.getElementById('sellRetake').disabled = step<=1;
    document.getElementById('sellSkip').disabled = step>=5;
  }

  function viewWishlist(){
    var items = PRODUCTS.filter(function(p){ return state.wishlist.indexOf(p.id) !== -1; });
    if (!items.length){
      return '<section class="section container"><div class="empty-state"><h2 class="serif">Your wishlist is empty</h2><p>Save listings you like with the heart icon and they\'ll show up here.</p><a class="btn btn-primary" href="#/shop">Browse the shop</a></div></section>';
    }
    return '<section class="section container"><div class="section-head"><h2 class="serif">Your wishlist</h2><p>' + items.length + ' saved item' + (items.length===1?'':'s') + '</p></div><div class="grid3">' + items.map(productCard).join('') + '</div></section>';
  }

  function viewNotFound(){
    return '<section class="section container"><div class="empty-state"><h2 class="serif">Page not found</h2><p>That link doesn\'t match anything in the prototype.</p><a class="btn btn-primary" href="#/">Back home</a></div></section>';
  }

  /* ---------- checkout ---------- */
  function cartTotal(){
    return state.cart.reduce(function(sum,item){ var p = productById(item.id); return sum + (p ? p.price*item.qty : 0); }, 0);
  }
  function cartCount(){ return state.cart.reduce(function(s,i){return s+i.qty;},0); }

  function viewCheckout(){
    if (!state.cart.length && state.checkout.step !== 3){
      return '<section class="section container"><div class="empty-state"><h2 class="serif">Your cart is empty</h2><p>Add something from the shop before checking out.</p><a class="btn btn-primary" href="#/shop">Browse the shop</a></div></section>';
    }
    var step = state.checkout.step;
    var stepsHtml = '<div class="co-steps">' + [1,2,3].map(function(n){
      var cls = n<step ? 'done' : (n===step ? 'active' : '');
      var row = '<div class="co-step-badge ' + cls + '">' + (n<step?'✓':n) + '</div>';
      return n<3 ? row + '<div class="co-step-line"></div>' : row;
    }).join('') + '</div>';

    var body;
    if (step===1) body = checkoutShippingForm();
    else if (step===2) body = checkoutPaymentForm();
    else body = checkoutConfirmation();

    return '<section class="checkout-wrap container">' + stepsHtml + '<div class="co-card">' + body + '</div></section>';
  }

  function checkoutShippingForm(){
    var sh = state.checkout.shipping;
    return '' +
      '<h2 class="serif">Shipping details</h2>' +
      '<form onsubmit="return PM.submitShipping(event)">' +
        '<div class="field"><label for="shName">Full name</label><input id="shName" required value="' + esc(sh.name||'') + '" placeholder="Jamie Rivera"></div>' +
        '<div class="field"><label for="shAddr">Address</label><input id="shAddr" required value="' + esc(sh.addr||'') + '" placeholder="123 Maple Street"></div>' +
        '<div class="field-row">' +
          '<div class="field"><label for="shCity">City</label><input id="shCity" required value="' + esc(sh.city||'') + '" placeholder="Portland"></div>' +
          '<div class="field"><label for="shZip">Postal code</label><input id="shZip" required value="' + esc(sh.zip||'') + '" placeholder="97201"></div>' +
        '</div>' +
        '<div class="field"><label for="shCountry">Country</label><select id="shCountry"><option>United States</option><option>Canada</option><option>United Kingdom</option><option>Australia</option><option>Other</option></select></div>' +
        checkoutSummary() +
        '<div class="co-actions"><a class="btn btn-ghost" href="#/shop">Continue shopping</a><button class="btn btn-primary btn-block" type="submit">Continue to payment</button></div>' +
      '</form>';
  }

  function checkoutPaymentForm(){
    return '' +
      '<h2 class="serif">Payment</h2>' +
      '<div class="co-note">Demo checkout — this is a prototype. No real payment is processed and no card details are stored or sent anywhere.</div>' +
      '<form onsubmit="return PM.submitPayment(event)">' +
        '<div class="field"><label for="pyName">Name on card</label><input id="pyName" required placeholder="Jamie Rivera"></div>' +
        '<div class="field"><label for="pyNum">Card number</label><input id="pyNum" required placeholder="4242 4242 4242 4242" inputmode="numeric"></div>' +
        '<div class="field-row">' +
          '<div class="field"><label for="pyExp">Expiry</label><input id="pyExp" required placeholder="MM / YY"></div>' +
          '<div class="field"><label for="pyCvc">CVC</label><input id="pyCvc" required placeholder="123" inputmode="numeric"></div>' +
        '</div>' +
        checkoutSummary() +
        '<div class="co-actions"><button type="button" class="btn btn-ghost" onclick="PM.backToShipping()">Back</button><button class="btn btn-primary btn-block" type="submit">Place order</button></div>' +
      '</form>';
  }

  function checkoutSummary(){
    var rows = state.cart.map(function(item){
      var p = productById(item.id);
      if (!p) return '';
      return '<div class="co-summary-row"><span>' + esc(p.name) + ' × ' + item.qty + '</span><span>' + money(p.price*item.qty) + '</span></div>';
    }).join('');
    return '<div class="co-summary">' + rows + '<div class="co-summary-row total"><span>Total</span><span>' + money(cartTotal()) + '</span></div></div>';
  }

  function checkoutConfirmation(){
    return '' +
      '<div class="confirm-wrap">' +
        '<div class="confirm-seal">✓</div>' +
        '<h2 class="serif">Thank you for browsing our store</h2>' +
        '<p class="confirm-note">(this is an experiment)</p>' +
        '<p class="order-id">Order reference <code>' + (state.checkout.orderId || '—') + '</code></p>' +
        '<a class="btn btn-outline" href="#/" onclick="PM.finishCheckout()">Continue browsing</a>' +
      '</div>';
  }

  /* ===================== CART DRAWER ===================== */
  function renderCartDrawer(){
    var itemsEl = document.getElementById('cartItems');
    var subtotalEl = document.getElementById('cartSubtotal');
    if (!state.cart.length){
      itemsEl.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    } else {
      itemsEl.innerHTML = state.cart.map(function(item, idx){
        var p = productById(item.id);
        if (!p) return '';
        var s = sellerById(p.sellerId);
        return '' +
          '<div class="cart-item">' +
            '<div class="ci-thumb"><img src="' + img(p.img,150) + '" alt="' + esc(p.alt) + '"></div>' +
            '<div class="ci-body">' +
              '<b>' + esc(p.name) + '</b><span>' + esc(s.name) + '</span>' +
              '<div class="ci-qty">' +
                '<button type="button" class="qty-btn" onclick="PM.changeQty(' + idx + ',-1)">−</button>' +
                '<span>' + item.qty + '</span>' +
                '<button type="button" class="qty-btn" onclick="PM.changeQty(' + idx + ',1)">+</button>' +
                '<button type="button" class="qty-remove" onclick="PM.removeFromCart(' + idx + ')">Remove</button>' +
              '</div>' +
            '</div>' +
            '<div class="ci-price">' + money(p.price*item.qty) + '</div>' +
          '</div>';
      }).join('');
    }
    subtotalEl.textContent = money(cartTotal());
  }

  function updateHeaderCounts(){
    var cb = document.getElementById('cartBadge');
    var wb = document.getElementById('wishBadge');
    var cc = cartCount(), wc = state.wishlist.length;
    cb.textContent = cc; cb.classList.toggle('show', cc>0);
    wb.textContent = wc; wb.classList.toggle('show', wc>0);
    renderAccountArea();
  }

  function renderAccountArea(){
    var el = document.getElementById('acctArea');
    if (state.account){
      var first = (state.account.name||'').split(' ')[0] || 'You';
      el.innerHTML = '' +
        '<div class="acct-wrap">' +
          '<button class="acct-pill" onclick="PM.toggleAcctMenu()"><span class="av">' + esc(first.charAt(0).toUpperCase()) + '</span>Hi, ' + esc(first) + '</button>' +
          '<div class="acct-menu" id="acctMenu"><a href="#/wishlist">Your wishlist</a><button onclick="PM.signOut()">Sign out</button></div>' +
        '</div>';
    } else {
      el.innerHTML = '<button class="signin-link" onclick="PM.openSignin()">Sign in</button>';
    }
  }

  /* ===================== ACTIONS (window.PM) ===================== */
  var PM = {};

  PM.addToCart = function(id){
    var existing = state.cart.filter(function(i){return i.id===id;})[0];
    if (existing) existing.qty++;
    else state.cart.push({id:id, qty:1});
    renderCartDrawer(); updateHeaderCounts(); openCartDrawer();
    PM.toast('Added to cart');
  };
  PM.buyNow = function(id){
    var existing = state.cart.filter(function(i){return i.id===id;})[0];
    if (existing) existing.qty++;
    else state.cart.push({id:id, qty:1});
    state.checkout = {step:1, shipping:{}, payment:{}, orderId:null};
    location.hash = '#/checkout';
  };
  PM.changeQty = function(idx, delta){
    state.cart[idx].qty += delta;
    if (state.cart[idx].qty <= 0) state.cart.splice(idx,1);
    renderCartDrawer(); updateHeaderCounts();
  };
  PM.removeFromCart = function(idx){ state.cart.splice(idx,1); renderCartDrawer(); updateHeaderCounts(); };
  PM.addToCartEl = function(el){ PM.addToCart(el.dataset.add); };
  PM.buyNowEl = function(el){ PM.buyNow(el.dataset.buy); };

  PM.toggleWishlist = function(id){
    var i = state.wishlist.indexOf(id);
    if (i===-1){ state.wishlist.push(id); PM.toast('Saved to wishlist'); }
    else { state.wishlist.splice(i,1); PM.toast('Removed from wishlist'); }
    saveWishlist();
    updateHeaderCounts();
    refreshView(true);
  };
  PM.toggleWishlistEl = function(el){ PM.toggleWishlist(el.dataset.wish); };

  PM.setShopQuery = function(v){ state.shopQuery = v; refreshView(true); };
  PM.setShopCategory = function(cat){ state.shopCategory = (state.shopCategory===cat ? 'all' : cat); refreshView(true); };
  PM.setShopCategoryEl = function(el){ PM.setShopCategory(el.dataset.cat); };
  PM.setShopSort = function(v){ state.shopSort = v; refreshView(true); };
  PM.resetShop = function(){ state.shopQuery=''; state.shopCategory='all'; state.shopSort='featured'; refreshView(); };

  PM.selectThumb = function(el){
    document.querySelectorAll('.pd-thumb').forEach(function(t){ t.classList.remove('active'); });
    el.classList.add('active');
  };

  PM.submitShipping = function(ev){
    ev.preventDefault();
    state.checkout.shipping = {
      name: document.getElementById('shName').value,
      addr: document.getElementById('shAddr').value,
      city: document.getElementById('shCity').value,
      zip: document.getElementById('shZip').value,
      country: document.getElementById('shCountry').value
    };
    state.checkout.step = 2;
    refreshView();
    return false;
  };
  PM.backToShipping = function(){ state.checkout.step = 1; refreshView(); };
  PM.submitPayment = function(ev){
    ev.preventDefault();
    var num = document.getElementById('pyNum').value.replace(/\s/g,'');
    state.checkout.payment = { last4: num.slice(-4) || '••••' };
    state.checkout.orderId = 'PM-' + Math.random().toString(36).slice(2,8).toUpperCase();
    state.checkout.step = 3;
    refreshView();
    return false;
  };
  PM.finishCheckout = function(){
    state.cart = [];
    state.checkout = {step:1, shipping:{}, payment:{}, orderId:null};
    renderCartDrawer(); updateHeaderCounts();
  };

  PM.sellDemo = function(action){
    if (action==='capture'){
      var flash = document.getElementById('vfFlash');
      if (flash){ flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go'); }
      if (state.sellDemoStep < 5) state.sellDemoStep++;
      else { state.sellDemoStep = 1; PM.toast('Capture sequence complete — starting over'); }
    } else if (action==='retake'){
      if (state.sellDemoStep > 1) state.sellDemoStep--;
    } else if (action==='skip'){
      if (state.sellDemoStep < 5) state.sellDemoStep++;
    }
    renderSellDemo();
  };
  PM.sellDemoEl = function(el){ PM.sellDemo(el.dataset.demo); };

  PM.openSignin = function(){ document.getElementById('signinOverlay').classList.add('open'); };
  PM.closeSignin = function(){ document.getElementById('signinOverlay').classList.remove('open'); };
  PM.signOut = function(){ state.account = null; localStorage.removeItem('pm_account'); renderAccountArea(); PM.toast('Signed out'); };
  PM.toggleAcctMenu = function(){ document.getElementById('acctMenu').classList.toggle('open'); };
  PM.requireAccount = function(cb){
    if (state.account){ cb(); return; }
    pendingAfterSignin = cb;
    PM.openSignin();
  };
  PM.startSelling = function(){
    PM.requireAccount(function(){
      PM.toast('Seller onboarding isn\'t wired up yet in this prototype — but you\'re signed in!');
    });
  };
  PM.toastCertNote = function(){ PM.toast('Certificate download is not wired up in this prototype.'); };

  var pendingAfterSignin = null;
  var toastTimer = null;
  PM.toast = function(msg){
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ t.classList.remove('show'); }, 2400);
  };

  window.PM = PM;

  /* ===================== STATIC SHELL LISTENERS ===================== */
  function openCartDrawer(){ document.getElementById('cartDrawer').classList.add('open'); document.getElementById('cartOverlay').classList.add('open'); }
  function closeCartDrawer(){ document.getElementById('cartDrawer').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('open'); }

  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('cartBtn').addEventListener('click', openCartDrawer);
    document.getElementById('cartClose').addEventListener('click', closeCartDrawer);
    document.getElementById('cartOverlay').addEventListener('click', closeCartDrawer);
    document.getElementById('checkoutBtn').addEventListener('click', function(){
      closeCartDrawer();
      if (!state.cart.length) { PM.toast('Your cart is empty'); return; }
      state.checkout = {step:1, shipping:{}, payment:{}, orderId:null};
      location.hash = '#/checkout';
    });

    document.getElementById('signinClose').addEventListener('click', PM.closeSignin);
    document.getElementById('signinOverlay').addEventListener('click', function(e){ if (e.target===this) PM.closeSignin(); });
    document.getElementById('signinForm').addEventListener('submit', function(e){
      e.preventDefault();
      state.account = { name: document.getElementById('siName').value, email: document.getElementById('siEmail').value };
      saveAccount();
      renderAccountArea();
      PM.closeSignin();
      PM.toast('Signed in as ' + state.account.name.split(' ')[0]);
      if (pendingAfterSignin){ var cb = pendingAfterSignin; pendingAfterSignin = null; cb(); }
    });

    document.addEventListener('click', function(e){
      var menu = document.getElementById('acctMenu');
      if (menu && menu.classList.contains('open') && !e.target.closest('.acct-wrap')) menu.classList.remove('open');
    });

    var header = document.getElementById('siteHeader');
    window.addEventListener('scroll', function(){
      header.classList.toggle('scrolled', window.scrollY > 8);
    }, {passive:true});

    // wire the sell-page capture demo whenever that view is on screen
    var origRefresh = renderRoute;
    document.addEventListener('DOMContentLoaded', function(){});
  });

  // hook: whenever the sell view is rendered, initialize its demo state
  var _origRenderRoute = renderRoute;
  renderRoute = function(){
    _origRenderRoute();
    if (document.getElementById('sellDots')) { state.sellDemoStep = 1; renderSellDemo(); }
  };
  var _origRefreshView = refreshView;
  refreshView = function(preserveSearchFocus){
    _origRefreshView(preserveSearchFocus);
    if (document.getElementById('sellDots')) renderSellDemo();
  };

})();
