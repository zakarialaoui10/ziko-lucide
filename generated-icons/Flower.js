import {tags} from 'ziko';
const {svg} = tags;
const Flower = (props) => 
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
    tags.circle({"cx":"12","cy":"12","r":"3"}),
	tags.path({"d":"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"}),
	tags.path({"d":"M12 7.5V9"}),
	tags.path({"d":"M7.5 12H9"}),
	tags.path({"d":"M16.5 12H15"}),
	tags.path({"d":"M12 16.5V15"}),
	tags.path({"d":"m8 8 1.88 1.88"}),
	tags.path({"d":"M14.12 9.88 16 8"}),
	tags.path({"d":"m8 16 1.88-1.88"}),
	tags.path({"d":"M14.12 14.12 16 16"})
    )
export default Flower;
