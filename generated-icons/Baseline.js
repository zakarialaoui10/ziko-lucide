import {tags} from 'ziko';
const {svg} = tags;
const Baseline = (props) => 
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
    tags.path({"d":"M4 20h16"}),
	tags.path({"d":"m6 16 6-12 6 12"}),
	tags.path({"d":"M8 12h8"})
    )
export default Baseline;
