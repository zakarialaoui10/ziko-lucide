import {tags} from 'ziko';
const {svg} = tags;
const Mars = (props) => 
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
    tags.path({"d":"M16 3h5v5"}),
	tags.path({"d":"m21 3-6.75 6.75"}),
	tags.circle({"cx":"10","cy":"14","r":"6"})
    )
export default Mars;
