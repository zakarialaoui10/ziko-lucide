import {tags} from 'ziko';
const {svg} = tags;
const CookingPot = (props) => 
    svg(
        {
        ...{
         "viewBox": "0 0 24 24",
         "fill": "none",
         "width": 24,
         "height": 24,
         "stroke": "green",
         "stroke-width": 2,
         "stroke-linecap": "round",
         "stroke-linejoin": "round"
        },
        ...props
        },
    tags.path({"d":"M2 12h20"}),
	tags.path({"d":"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}),
	tags.path({"d":"m4 8 16-4"}),
	tags.path({"d":"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"})
    )
export default CookingPot;
