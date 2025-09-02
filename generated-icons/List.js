import {tags} from 'ziko';
const {svg} = tags;
const List = (props) => 
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
    tags.path({"d":"M3 12h.01"}),
	tags.path({"d":"M3 18h.01"}),
	tags.path({"d":"M3 6h.01"}),
	tags.path({"d":"M8 12h13"}),
	tags.path({"d":"M8 18h13"}),
	tags.path({"d":"M8 6h13"})
    )
export default List;
