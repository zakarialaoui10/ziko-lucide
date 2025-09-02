import {tags} from 'ziko';
const {svg} = tags;
const ChevronFirst = (props) => 
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
    tags.path({"d":"m17 18-6-6 6-6"}),
	tags.path({"d":"M7 6v12"})
    )
export default ChevronFirst;
