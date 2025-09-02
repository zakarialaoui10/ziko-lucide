import {tags} from 'ziko';
const {svg} = tags;
const Annoyed = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"10"}),
	tags.path({"d":"M8 15h8"}),
	tags.path({"d":"M8 9h2"}),
	tags.path({"d":"M14 9h2"})
    )
export default Annoyed;
