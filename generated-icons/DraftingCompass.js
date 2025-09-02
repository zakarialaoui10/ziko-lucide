import {tags} from 'ziko';
const {svg} = tags;
const DraftingCompass = (props) => 
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
    tags.path({"d":"m12.99 6.74 1.93 3.44"}),
	tags.path({"d":"M19.136 12a10 10 0 0 1-14.271 0"}),
	tags.path({"d":"m21 21-2.16-3.84"}),
	tags.path({"d":"m3 21 8.02-14.26"}),
	tags.circle({"cx":"12","cy":"5","r":"2"})
    )
export default DraftingCompass;
