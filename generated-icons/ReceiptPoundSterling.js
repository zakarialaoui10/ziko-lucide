import {tags} from 'ziko';
const {svg} = tags;
const ReceiptPoundSterling = (props) => 
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
    tags.path({"d":"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}),
	tags.path({"d":"M8 13h5"}),
	tags.path({"d":"M10 17V9.5a2.5 2.5 0 0 1 5 0"}),
	tags.path({"d":"M8 17h7"})
    )
export default ReceiptPoundSterling;
