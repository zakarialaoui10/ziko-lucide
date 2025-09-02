import {tags} from 'ziko';
const {svg} = tags;
const Tablets = (props) => 
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
    tags.circle({"cx":"7","cy":"7","r":"5"}),
	tags.circle({"cx":"17","cy":"17","r":"5"}),
	tags.path({"d":"M12 17h10"}),
	tags.path({"d":"m3.46 10.54 7.08-7.08"})
    )
export default Tablets;
