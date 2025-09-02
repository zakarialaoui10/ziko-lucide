import {tags} from 'ziko';
const {svg} = tags;
const Asterisk = (props) => 
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
    tags.path({"d":"M12 6v12"}),
	tags.path({"d":"M17.196 9 6.804 15"}),
	tags.path({"d":"m6.804 9 10.392 6"})
    )
export default Asterisk;
