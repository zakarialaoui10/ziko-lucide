import {tags} from 'ziko';
const {svg} = tags;
const Vote = (props) => 
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
    tags.path({"d":"m9 12 2 2 4-4"}),
	tags.path({"d":"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"}),
	tags.path({"d":"M22 19H2"})
    )
export default Vote;
