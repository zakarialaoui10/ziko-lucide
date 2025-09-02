import {tags} from 'ziko';
const {svg} = tags;
const ListTree = (props) => 
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
    tags.path({"d":"M21 12h-8"}),
	tags.path({"d":"M21 6H8"}),
	tags.path({"d":"M21 18h-8"}),
	tags.path({"d":"M3 6v4c0 1.1.9 2 2 2h3"}),
	tags.path({"d":"M3 10v6c0 1.1.9 2 2 2h3"})
    )
export default ListTree;
