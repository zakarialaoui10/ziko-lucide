import {tags} from 'ziko';
const {svg} = tags;
const Repeat1 = (props) => 
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
    tags.path({"d":"m17 2 4 4-4 4"}),
	tags.path({"d":"M3 11v-1a4 4 0 0 1 4-4h14"}),
	tags.path({"d":"m7 22-4-4 4-4"}),
	tags.path({"d":"M21 13v1a4 4 0 0 1-4 4H3"}),
	tags.path({"d":"M11 10h1v4"})
    )
export default Repeat1;
