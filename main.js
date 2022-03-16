import 'reveal.js/dist/reveal.css'
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
import 'reveal.js/dist/theme/simple.css'
// our styles to adjust the presentation
import './css/styles.css'
//
import './plugin/chalkboard/chalkboard.css'
import './plugin/customcontrols/plugin.js'
import './plugin/customcontrols/style.css'
import './plugin/math/math.js'
import './plugin/highlight/highlight.js'
import './plugin/notes/notes.js'
import './plugin/markdown/markdown.js'
//
import Reveal from 'reveal.js'

//import './plugin/pointer/pointer.css'
//import './plugin/pointer/pointer.js'

const deck = new Reveal()
deck.initialize({ 
                        hash: true,
                        center: true,
                        margin: 0,
                        padding: 0,
                        width: 1920,
                        height: 1080,
                        minScale: 0.2,
                        maxScale: 1.5,
                        keyboard: true,
                        overview: true,
//                        pointer: {
//                                key: "q",
//                                color: "red",
//                               pointerSize: 15, 
//                                alwaysVisible: false
//                        },
			plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX, RevealPointer, RevealChalkboard], 
})
