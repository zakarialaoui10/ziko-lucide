import {tags} from 'ziko';
const {svg} = tags;
const CupSoda = (props) => 
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
    tags.path({"d":"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}),
	tags.path({"d":"M5 8h14"}),
	tags.path({"d":"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}),
	tags.path({"d":"m12 8 1-6h2"})
    )
export default CupSoda;
