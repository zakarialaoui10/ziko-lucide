import {tags} from 'ziko';
const {svg} = tags;
const ReceiptEuro = (props) => 
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
	tags.path({"d":"M8 12h5"}),
	tags.path({"d":"M16 9.5a4 4 0 1 0 0 5.2"})
    )
export default ReceiptEuro;
