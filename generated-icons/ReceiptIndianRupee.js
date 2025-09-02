import {tags} from 'ziko';
const {svg} = tags;
const ReceiptIndianRupee = (props) => 
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
	tags.path({"d":"M8 7h8"}),
	tags.path({"d":"M12 17.5 8 15h1a4 4 0 0 0 0-8"}),
	tags.path({"d":"M8 11h8"})
    )
export default ReceiptIndianRupee;
