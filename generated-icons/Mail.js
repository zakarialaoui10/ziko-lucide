import {tags} from 'ziko';
const {svg} = tags;
const Mail = (props) => 
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
    tags.path({"d":"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}),
	tags.rect({"x":"2","y":"4","width":"20","height":"16","rx":"2"})
    )
export default Mail;
