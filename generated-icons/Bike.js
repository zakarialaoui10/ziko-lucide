import {tags} from 'ziko';
const {svg} = tags;
const Bike = (props) => 
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
    tags.circle({"cx":"18.5","cy":"17.5","r":"3.5"}),
	tags.circle({"cx":"5.5","cy":"17.5","r":"3.5"}),
	tags.circle({"cx":"15","cy":"5","r":"1"}),
	tags.path({"d":"M12 17.5V14l-3-3 4-3 2 3h2"})
    )
export default Bike;
