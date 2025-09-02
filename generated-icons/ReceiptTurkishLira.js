import {tags} from 'ziko';
const {svg} = tags;
const ReceiptTurkishLira = (props) => 
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
    tags.path({"d":"M10 6.5v11a5.5 5.5 0 0 0 5.5-5.5"}),
	tags.path({"d":"m14 8-6 3"}),
	tags.path({"d":"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"})
    )
export default ReceiptTurkishLira;
