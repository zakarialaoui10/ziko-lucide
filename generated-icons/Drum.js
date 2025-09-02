import {tags} from 'ziko';
const {svg} = tags;
const Drum = (props) => 
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
    tags.path({"d":"m2 2 8 8"}),
	tags.path({"d":"m22 2-8 8"}),
	tags.ellipse({"cx":"12","cy":"9","rx":"10","ry":"5"}),
	tags.path({"d":"M7 13.4v7.9"}),
	tags.path({"d":"M12 14v8"}),
	tags.path({"d":"M17 13.4v7.9"}),
	tags.path({"d":"M2 9v8a10 5 0 0 0 20 0V9"})
    )
export default Drum;
