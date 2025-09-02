import {tags} from 'ziko';
const {svg} = tags;
const MouseOff = (props) => 
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
    tags.path({"d":"M12 6v.343"}),
	tags.path({"d":"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"}),
	tags.path({"d":"M19 13.343V9A7 7 0 0 0 8.56 2.902"}),
	tags.path({"d":"M22 22 2 2"})
    )
export default MouseOff;
