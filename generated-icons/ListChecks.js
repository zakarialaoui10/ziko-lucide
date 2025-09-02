import {tags} from 'ziko';
const {svg} = tags;
const ListChecks = (props) => 
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
    tags.path({"d":"m3 17 2 2 4-4"}),
	tags.path({"d":"m3 7 2 2 4-4"}),
	tags.path({"d":"M13 6h8"}),
	tags.path({"d":"M13 12h8"}),
	tags.path({"d":"M13 18h8"})
    )
export default ListChecks;
