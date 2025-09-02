import {tags} from 'ziko';
const {svg} = tags;
const Gavel = (props) => 
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
    tags.path({"d":"m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"}),
	tags.path({"d":"m16 16 6-6"}),
	tags.path({"d":"m21.5 10.5-8-8"}),
	tags.path({"d":"m8 8 6-6"}),
	tags.path({"d":"m8.5 7.5 8 8"})
    )
export default Gavel;
