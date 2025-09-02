import {tags} from 'ziko';
const {svg} = tags;
const ArrowUpAz = (props) => 
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
    tags.path({"d":"m3 8 4-4 4 4"}),
	tags.path({"d":"M7 4v16"}),
	tags.path({"d":"M20 8h-5"}),
	tags.path({"d":"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}),
	tags.path({"d":"M15 14h5l-5 6h5"})
    )
export default ArrowUpAz;
