import {tags} from 'ziko';
const {svg} = tags;
const TableOfContents = (props) => 
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
    tags.path({"d":"M16 12H3"}),
	tags.path({"d":"M16 18H3"}),
	tags.path({"d":"M16 6H3"}),
	tags.path({"d":"M21 12h.01"}),
	tags.path({"d":"M21 18h.01"}),
	tags.path({"d":"M21 6h.01"})
    )
export default TableOfContents;
