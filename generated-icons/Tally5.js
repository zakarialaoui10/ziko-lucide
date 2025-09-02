import {tags} from 'ziko';
const {svg} = tags;
const Tally5 = (props) => 
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
    tags.path({"d":"M4 4v16"}),
	tags.path({"d":"M9 4v16"}),
	tags.path({"d":"M14 4v16"}),
	tags.path({"d":"M19 4v16"}),
	tags.path({"d":"M22 6 2 18"})
    )
export default Tally5;
