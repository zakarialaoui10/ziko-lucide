import {tags} from 'ziko';
const {svg} = tags;
const Martini = (props) => 
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
    tags.path({"d":"M8 22h8"}),
	tags.path({"d":"M12 11v11"}),
	tags.path({"d":"m19 3-7 8-7-8Z"})
    )
export default Martini;
