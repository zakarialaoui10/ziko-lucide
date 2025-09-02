import {tags} from 'ziko';
const {svg} = tags;
const Bed = (props) => 
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
    tags.path({"d":"M2 4v16"}),
	tags.path({"d":"M2 8h18a2 2 0 0 1 2 2v10"}),
	tags.path({"d":"M2 17h20"}),
	tags.path({"d":"M6 8v9"})
    )
export default Bed;
